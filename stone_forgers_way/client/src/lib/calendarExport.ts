import type { Practice } from './todaysPractice';

interface CalendarEvent {
  title: string;
  description: string;
  startTime: Date;
  duration: number; // in minutes
  location?: string;
}

// Format date for ICS file (YYYYMMDDTHHMMSS)
function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// Format date for local time (YYYYMMDDTHHMMSS)
function formatICSDateLocal(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

// Escape special characters for ICS format
function escapeICS(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

// Fold long lines (ICS spec requires lines < 75 chars)
function foldLine(line: string): string {
  const maxLength = 75;
  if (line.length <= maxLength) return line;

  const result: string[] = [];
  let remaining = line;

  while (remaining.length > maxLength) {
    result.push(remaining.slice(0, maxLength));
    remaining = ' ' + remaining.slice(maxLength);
  }
  result.push(remaining);

  return result.join('\r\n');
}

// Generate ICS file content
export function generateICS(event: CalendarEvent): string {
  const uid = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}@stoneforger`;
  const now = new Date();
  const endTime = new Date(event.startTime.getTime() + event.duration * 60 * 1000);

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Stone Forger\'s Way//Practice Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(now)}`,
    `DTSTART:${formatICSDateLocal(event.startTime)}`,
    `DTEND:${formatICSDateLocal(endTime)}`,
    foldLine(`SUMMARY:${escapeICS(event.title)}`),
    foldLine(`DESCRIPTION:${escapeICS(event.description)}`),
    event.location ? foldLine(`LOCATION:${escapeICS(event.location)}`) : null,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    // Add reminder 5 minutes before
    'BEGIN:VALARM',
    'TRIGGER:-PT5M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Time for your practice',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].filter(Boolean);

  return lines.join('\r\n');
}

// Create practice reminder event
export function createPracticeReminderEvent(practice: Practice, reminderTime: Date): CalendarEvent {
  // Parse duration string (e.g., "3 minutes", "25 minutes")
  const durationMatch = practice.duration.match(/(\d+)/);
  const durationMinutes = durationMatch ? parseInt(durationMatch[1], 10) : 10;

  const description = [
    practice.shortDescription,
    '',
    'Steps:',
    ...practice.steps.map((step, i) => `${i + 1}. ${step}`),
    '',
    `When to use: ${practice.whenToUse}`,
    '',
    'From The Stone Forger\'s Way'
  ].join('\n');

  return {
    title: `Practice: ${practice.name}`,
    description,
    startTime: reminderTime,
    duration: durationMinutes,
    location: 'The Stone Forger\'s Way'
  };
}

// Download ICS file
export function downloadICS(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Main function to download a practice reminder
export function downloadPracticeReminder(practice: Practice, reminderTime: Date): void {
  const event = createPracticeReminderEvent(practice, reminderTime);
  const icsContent = generateICS(event);
  const filename = `practice-${practice.id}-${reminderTime.toISOString().split('T')[0]}.ics`;
  downloadICS(filename, icsContent);
}

// Get suggested reminder times for today
export function getSuggestedTimes(): { label: string; time: Date }[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const times = [
    { label: 'Morning (7:00 AM)', hour: 7 },
    { label: 'Mid-morning (10:00 AM)', hour: 10 },
    { label: 'Lunch (12:00 PM)', hour: 12 },
    { label: 'Afternoon (3:00 PM)', hour: 15 },
    { label: 'Evening (6:00 PM)', hour: 18 },
    { label: 'Night (9:00 PM)', hour: 21 }
  ];

  return times
    .map(({ label, hour }) => ({
      label,
      time: new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, 0, 0)
    }))
    .filter(({ time }) => time > now); // Only show future times
}

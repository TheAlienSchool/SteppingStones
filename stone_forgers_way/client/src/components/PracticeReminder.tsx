import { useState } from "react";
import { downloadPracticeReminder, getSuggestedTimes } from "@/lib/calendarExport";
import type { Practice } from "@/lib/todaysPractice";
import { Calendar, Clock, Check, ChevronDown } from "lucide-react";

interface PracticeReminderProps {
  practice: Practice;
  className?: string;
}

export default function PracticeReminder({ practice, className = "" }: PracticeReminderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const suggestedTimes = getSuggestedTimes();

  const handleDownload = (time: Date) => {
    downloadPracticeReminder(practice, time);
    setDownloaded(true);
    setIsOpen(false);

    // Reset after 3 seconds
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleCustomTime = () => {
    // Default to 1 hour from now
    const customTime = new Date(Date.now() + 60 * 60 * 1000);
    downloadPracticeReminder(practice, customTime);
    setDownloaded(true);
    setIsOpen(false);
    setTimeout(() => setDownloaded(false), 3000);
  };

  if (downloaded) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-4 ${className}`}>
        <div className="flex items-center gap-3 text-green-700">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium">Reminder Downloaded</p>
            <p className="text-sm text-green-600">Open the .ics file to add it to your calendar</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-stone-50 border border-stone-200 rounded-xl overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-stone-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-amber-700" />
          </div>
          <div className="text-left">
            <p className="font-medium text-stone-800">Set a Practice Reminder</p>
            <p className="text-sm text-stone-500">Download to your calendar</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="border-t border-stone-200 p-4 space-y-2">
          <p className="text-sm text-stone-600 mb-3">
            Choose a time for today's practice reminder:
          </p>

          {suggestedTimes.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {suggestedTimes.map(({ label, time }) => (
                <button
                  key={label}
                  onClick={() => handleDownload(time)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-700 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:bg-amber-50 transition-colors"
                >
                  <Clock className="w-4 h-4 text-stone-400" />
                  {label}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-500 italic">
              No more times available today. Set a reminder for tomorrow.
            </p>
          )}

          <button
            onClick={handleCustomTime}
            className="w-full mt-3 px-3 py-2 text-sm text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"
          >
            Download for 1 hour from now
          </button>

          <p className="text-xs text-stone-500 mt-3 pt-3 border-t border-stone-200">
            The .ics file works with Apple Calendar, Google Calendar, Outlook, and most calendar apps.
          </p>
        </div>
      )}
    </div>
  );
}

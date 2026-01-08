import { Link } from "wouter";
import type { CoreArchetypeId } from "@/lib/archetypeQuiz";
import type { ExpandedArchetypeId } from "@/lib/expandedArchetypes";

type ArchetypeId = CoreArchetypeId | ExpandedArchetypeId;

interface ArchetypeBadgeProps {
  archetypeId: ArchetypeId;
  linkable?: boolean;
  size?: "sm" | "md";
}

// Display name mappings
const archetypeDisplayNames: Record<string, string> = {
  // Core archetypes
  'carrier': 'The Stone Carrier',
  'thrower': 'The Stone Thrower',
  'conscious': 'The Conscious Forger',
  'forger': 'The Stone Forger',
  // Expanded archetypes
  'jade-hunter': 'The Jade Hunter',
  'walker-of-the-way': 'Walker of The Way',
  'stone-keeper': 'The Stone Keeper',
  'stone-breaker': 'The Stone Breaker',
  'stone-caller': 'The Stone Caller',
  'stone-witness': 'The Stone Witness'
};

// Determine if archetype is expanded (has portal page)
const expandedArchetypeIds = [
  'jade-hunter',
  'walker-of-the-way',
  'stone-keeper',
  'stone-breaker',
  'stone-caller',
  'stone-witness'
];

export default function ArchetypeBadge({
  archetypeId,
  linkable = true,
  size = "sm"
}: ArchetypeBadgeProps) {
  const displayName = archetypeDisplayNames[archetypeId] || archetypeId;
  const isExpandedArchetype = expandedArchetypeIds.includes(archetypeId);

  // Size classes
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5"
  };

  // Base badge styling
  const badgeClasses = `
    inline-block rounded-full font-medium transition-colors
    ${sizeClasses[size]}
    ${linkable && isExpandedArchetype
      ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 cursor-pointer'
      : 'bg-stone-100 text-stone-600'
    }
  `;

  // If linkable and expanded archetype, wrap in Link
  if (linkable && isExpandedArchetype) {
    return (
      <Link href={`/archetype/${archetypeId}`}>
        <span className={badgeClasses}>
          {displayName}
        </span>
      </Link>
    );
  }

  // Otherwise, just render the badge
  return (
    <span className={badgeClasses}>
      {displayName}
    </span>
  );
}

// Helper component for rendering multiple badges
interface ArchetypeBadgesProps {
  coreArchetypes?: CoreArchetypeId[];
  expandedArchetypes?: ExpandedArchetypeId[];
  linkable?: boolean;
  size?: "sm" | "md";
  prefix?: string;
}

export function ArchetypeBadges({
  coreArchetypes = [],
  expandedArchetypes = [],
  linkable = true,
  size = "sm",
  prefix = "For:"
}: ArchetypeBadgesProps) {
  const allArchetypes = [...coreArchetypes, ...expandedArchetypes];

  if (allArchetypes.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {prefix && (
        <span className="text-sm text-stone-500 font-medium">{prefix}</span>
      )}
      {allArchetypes.map((archetypeId) => (
        <ArchetypeBadge
          key={archetypeId}
          archetypeId={archetypeId}
          linkable={linkable}
          size={size}
        />
      ))}
    </div>
  );
}

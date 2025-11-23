import { useState, useEffect } from "react";
import { getLatestQuizResult, getArchetypeName } from "@/lib/archetypeQuiz";

export interface NavItem {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items?: NavItem[];
}

export function useNavigation(): NavGroup[] {
  const [hasArchetype, setHasArchetype] = useState(false);
  const [archetypeName, setArchetypeName] = useState("");

  useEffect(() => {
    const result = getLatestQuizResult();
    if (result) {
      setHasArchetype(true);
      setArchetypeName(getArchetypeName(result.archetype));
    }
  }, []);

  const navGroups: NavGroup[] = [
    { label: "The Journey", href: "/journey" },
    {
      label: "Archetypes",
      items: [
        { href: "/archetypes", label: "The Archetypes" },
        { href: "/archetype-quiz", label: "Discover Your Archetype" },
        ...(hasArchetype ? [{ href: "/my-archetype", label: `My Archetype :: ${archetypeName}` }] : []),
      ],
    },
    {
      label: "Explore",
      items: [
        { href: "/todays-practice", label: "Today's Practice" },
        { href: "/concepts", label: "Concepts" },
        { href: "/practices", label: "Practices" },
        { href: "/glossary", label: "Glossary" },
        { href: "/works", label: "Complete Works" },
      ],
    },
    { label: "Reflections", href: "/reflections" },
    {
      label: "Lineage",
      items: [
        { href: "/the-container", label: "The Container" },
        { href: "/samuel-r-harris", label: "Samuel R. Harris" },
      ],
    },
    { label: "About", href: "/about" },
  ];

  return navGroups;
}

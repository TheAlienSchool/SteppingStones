import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getLatestQuizResult, getArchetypeName } from "@/lib/archetypeQuiz";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

interface NavGroup {
  label: string;
  href?: string;
  items?: { href: string; label: string }[];
}

function useNavStructure() {
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

function DropdownMenu({ group }: { group: NavGroup }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!group.items) {
    return (
      <Link href={group.href!}>
        <span className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer">
          {group.label}
        </span>
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-stone-700 hover:text-amber-700 transition-colors"
      >
        {group.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-lg border border-stone-200 min-w-[200px] z-50">
          {group.items.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function Breadcrumbs() {
  const [location] = useLocation();

  if (location === "/") return null;

  const pathSegments = location.split("/").filter(Boolean);
  const breadcrumbs = [{ href: "/", label: "Home" }];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    breadcrumbs.push({ href: currentPath, label });
  });

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex items-center gap-2 text-sm text-stone-600">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-amber-700">{crumb.label}</span>
            ) : (
              <Link href={crumb.href}>
                <span className="hover:text-amber-700 transition-colors cursor-pointer">
                  {crumb.label}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Layout({ children, showNav = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navGroups = useNavStructure();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {showNav && (
        <>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200/50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <span className="text-2xl font-serif text-stone-800 cursor-pointer hover:text-amber-700 transition-colors">
                    The Stone Forger's Way
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                  {navGroups.map((group) => (
                    <DropdownMenu key={group.label} group={group} />
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-stone-700 hover:text-amber-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu - Full Screen Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Panel */}
              <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-amber-50 shadow-xl overflow-y-auto">
                {/* Close button area */}
                <div className="sticky top-0 bg-amber-50 border-b border-amber-200/50 p-4 flex justify-between items-center">
                  <span className="text-lg font-serif text-stone-800">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-stone-700 hover:text-amber-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="p-4 space-y-6">
                  {navGroups.map((group) => (
                    <div key={group.label}>
                      {group.items ? (
                        <div>
                          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
                            {group.label}
                          </p>
                          <div className="space-y-1 pl-2 border-l-2 border-amber-200">
                            {group.items.map((item) => (
                              <Link key={item.href} href={item.href}>
                                <div
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-2 px-3 text-stone-700 hover:text-amber-700 hover:bg-amber-100/50 rounded-r transition-colors cursor-pointer"
                                >
                                  {item.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link href={group.href!}>
                          <div
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-3 text-lg font-medium text-stone-800 hover:text-amber-700 transition-colors cursor-pointer border-b border-amber-200/50"
                          >
                            {group.label}
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 mt-auto border-t border-amber-200/50">
                  <p className="text-xs text-stone-500 text-center">
                    "It's better to light a candle than to curse the darkness."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Breadcrumbs */}
          <div className="fixed top-16 left-0 right-0 z-30 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200/50">
            <Breadcrumbs />
          </div>
        </>
      )}

      <main className={showNav ? "pt-28" : ""}>
        {children}
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <footer className="bg-stone-800 text-stone-200 py-12">
        <div className="container mx-auto px-4">
          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto mb-12">
            <NewsletterSignup variant="compact" />
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm">
              "It's better to light a candle than to curse the darkness."
            </p>
            <p className="text-xs text-stone-400">
              A collaboration between Kamau Z. Akabueze and Manus AI
            </p>
            <p className="text-xs text-stone-400">
              © {new Date().getFullYear()} · All wisdom freely shared
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

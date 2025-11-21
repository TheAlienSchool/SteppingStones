import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getLatestQuizResult, getArchetypeName } from "@/lib/archetypeQuiz";

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

function useNavLinks() {
  const [hasArchetype, setHasArchetype] = useState(false);
  const [archetypeName, setArchetypeName] = useState("");

  useEffect(() => {
    const result = getLatestQuizResult();
    if (result) {
      setHasArchetype(true);
      setArchetypeName(getArchetypeName(result.archetype));
    }
  }, []);

  const baseLinks = [
    { href: "/journey", label: "The Journey" },
    { href: "/archetypes", label: "Archetypes" },
  ];

  if (hasArchetype) {
    baseLinks.push({ href: "/my-archetype", label: `My Archetype :: ${archetypeName}` });
  }

  return [
    ...baseLinks,
    { href: "/concepts", label: "Concepts" },
    { href: "/practices", label: "Practices" },
    { href: "/glossary", label: "Glossary" },
    { href: "/works", label: "Complete Works" },
    { href: "/reflections", label: "Reflections" },
    { href: "/the-container", label: "The Container" },
    { href: "/samuel-r-harris", label: "Samuel R. Harris" },
    { href: "/about", label: "About" },
  ];
}

function Breadcrumbs() {
  const [location] = useLocation();
  
  if (location === "/") return null;
  
  const pathSegments = location.split("/").filter(Boolean);
  const breadcrumbs = [{ href: "/", label: "Home" }];
  
  let currentPath = "";
  pathSegments.forEach((segment, index) => {
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
  const navLinks = useNavLinks();
  
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
                <div className="hidden lg:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
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
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-amber-50 border-t border-amber-200/50">
                <div className="container mx-auto px-4 py-4 space-y-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-stone-700 hover:text-amber-700 transition-colors cursor-pointer"
                      >
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
          
          {/* Breadcrumbs */}
          <div className="fixed top-16 left-0 right-0 z-40 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200/50">
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

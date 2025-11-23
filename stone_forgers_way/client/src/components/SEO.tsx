import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export default function SEO({
  title = "The Stone Forger's Way",
  description = "A temporal technology for conscious creation :: Explore archetypes, practices, and concepts for forging your path with trust and intention.",
  image = "/trust-stepping.png",
  url,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? "name" : "property";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description, true);

    // Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image.startsWith("http") ? image : `${window.location.origin}${image}`);
    updateMetaTag("og:url", url || window.location.href);
    updateMetaTag("og:type", type);
    updateMetaTag("og:site_name", "The Stone Forger's Way");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", image.startsWith("http") ? image : `${window.location.origin}${image}`, true);
  }, [title, description, image, url, type]);

  return null;
}

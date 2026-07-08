import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'https://wayof.vercel.app';
const DIST_PATH = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_PATH, 'index.html');
const PAGES_DIR = path.resolve(__dirname, '../client/src/pages');

// Simple logger helper
function log(msg: string) {
  console.log(`[SEO-GEN] ${msg}`);
}

interface PageMeta {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  getContent?: () => string;
}

// 1. Load data from libraries dynamically using standard node imports (relative to scripts)
import { expandedArchetypes } from '../client/src/lib/expandedArchetypes.js';

// Define the static page metadata mapping
const pagesRegistry: Record<string, PageMeta> = {
  '/': {
    title: "The Stone Forger's Way :: Move from Chaos to Coherence",
    description: "Are we carrying our burdens in exhausted circles, or are we ready to forge them into cohesive alignment? Walk the dynamic path of self-discovery through somatic exercises, interactive archetype diagnosis, and integrated daily checks designed to anchor creative power and build radical trust.",
    image: "/The-Forger.png"
  },
  '/journey': {
    title: "The Journey :: The Stone Forger's Way",
    description: "Walk through the progressive stages of consciousness: from the burden of the Carrier to the creation of the Forger.",
    image: "/TSFW-Journey.png"
  },
  '/archetypes': {
    title: "The Archetypes :: Core & Frictional States :: The Stone Forger's Way",
    description: "Understand the 4 Core Archetypes (Carrier, Thrower, Conscious Forger, Stone Forger) and the 6 Frictional Reality Archetypes.",
    image: "/TSWF-Stone.png"
  },
  '/archetype-quiz': {
    title: "Archetype Quiz :: Discover Your Pattern :: The Stone Forger's Way",
    description: "A 10-question diagnostic to identify your primary relation to creative blockages and alignment.",
    image: "/trust-stepping.png"
  },
  '/expanded-quiz': {
    title: "Expanded Quiz :: The Frictional Lens :: The Stone Forger's Way",
    description: "Deepen your self-knowledge with the second stage of the quiz and uncover your specific frictional state.",
    image: "/active-patience.png"
  },
  '/my-archetype': {
    title: "My Archetype :: The Stone Forger's Way",
    description: "Review your saved quiz results, analysis, and customized somatic practices.",
    image: "/stone-forger.png"
  },
  '/todays-practice': {
    title: "Today's Practice :: Somatic Alignment :: The Stone Forger's Way",
    description: "Receive a single, daily somatic alignment check or reflective practice for your day.",
    image: "/active-patience.png"
  },
  '/concepts': {
    title: "Concepts :: Core Philosophy :: The Stone Forger's Way",
    description: "Explore the core structural models and principles: Active Patience, the Shield, the Trellis, and Toroidal Binding.",
    image: "/TSFW-Pillars.png"
  },
  '/practices': {
    title: "Practices :: Somatic Integration :: The Stone Forger's Way",
    description: "Daily practices and somatic exercises to move from carry to forge, sorted by archetype focus.",
    image: "/active-patience.png"
  },
  '/glossary': {
    title: "Glossary :: Terms of the Way :: The Stone Forger's Way",
    description: "Browse the precise definitions, terms, and lenses that form the language of the Stone Forger's path.",
    image: "/TSWF-Stone.png"
  },
  '/works': {
    title: "Complete Works :: Samuel R. Harris :: The Stone Forger's Way",
    description: "Read the collected manuscripts, letters, and research notes of chemist and thinker Samuel R. Harris.",
    image: "/samuel-newspaper.jpeg"
  },
  '/about': {
    title: "About :: Legacy & Story :: The Stone Forger's Way",
    description: "Discover the origins, team, and legacy behind the preservation of Samuel R. Harris's work.",
    image: "/family-photos.jpeg"
  },
  '/social': {
    title: "Social :: Community & Cohort :: The Stone Forger's Way",
    description: "Connect with the Forgers Cohort, share reflections, and join the community of intentional creation.",
    image: "/TSFW-Stages.png"
  },
  '/voices': {
    title: "Voices :: Shared Journeys :: The Stone Forger's Way",
    description: "Stories, validations, and shared experiences from the community walking the Stone Forger's Way.",
    image: "/kamau-with-speech.jpeg"
  },
  '/forgers-cohort': {
    title: "The Forgers Cohort :: Group Practice :: The Stone Forger's Way",
    description: "Join the next cohort of practice. Group accountability, deep-dive sessions, and shared somatic integration.",
    image: "/TSFW-Stages.png"
  },
  '/creative-context': {
    title: "Creative Context :: The Backdrop :: The Stone Forger's Way",
    description: "The historical, spiritual, and philosophical context surrounding the discovery and forging of the stones.",
    image: "/TSFW-Why.png"
  },
  '/samuel-r-harris': {
    title: "Samuel R. Harris :: Legacy & Life :: The Stone Forger's Way",
    description: "A biography and retrospective of the life, ministry, and ultimate disappearance of Samuel R. Harris.",
    image: "/samuel-newspaper.jpeg"
  },
  '/the-container': {
    title: "The Container :: Sacred Residency :: The Stone Forger's Way",
    description: "Learn about 1000 Ways to Sit, the residency space dedicated to multifaceted meditation.",
    image: "/active-patience.png"
  },
  '/reflections': {
    title: "Reflections :: Essays & Insights :: The Stone Forger's Way",
    description: "Deep essays, journals, and reflections on the integration of Stone Forging into everyday modern life.",
    image: "/trust-stepping.png"
  },
  '/thank-you': {
    title: "Thank You :: The Stone Forger's Way",
    description: "Thank you for your conscious contribution and supporting the legacy of Stone Forging.",
    image: "/trust-stepping.png"
  },
  '/privacy-policy': {
    title: "Privacy Policy :: The Stone Forger's Way",
    description: "Our privacy policy details how we handle payment processing details and local storage records.",
  },
  '/disclaimer': {
    title: "Disclaimer :: The Stone Forger's Way",
    description: "Disclaimer regarding the educational, somatic, and philosophical nature of practices.",
  },
  '/404': {
    title: "404 - Page Not Found :: The Stone Forger's Way",
    description: "The page you are looking for does not exist on the Stone Forger's path.",
  }
};

// 2. Add the dynamic expanded archetypes to the registry
for (const [id, arch] of Object.entries(expandedArchetypes)) {
  pagesRegistry[`/archetype/${id}`] = {
    title: `${arch.name} :: Archetype Portal :: The Stone Forger's Way`,
    description: `${arch.name} (${arch.subtitle}): ${arch.simpleDefinition}. Experience: ${arch.experience.substring(0, 150)}...`,
    image: arch.imagePath,
    getContent: () => `
      <article style="max-width: 800px; margin: 0 auto; padding: 2rem; font-family: serif; line-height: 1.6; color: #1c1917;">
        <span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">Archetype Portal</span>
        <h1 style="font-size: 2.5rem; margin-top: 0; margin-bottom: 0.5rem;">${arch.name}</h1>
        <p style="font-size: 1.5rem; color: #b45309; margin-bottom: 1rem;">${arch.subtitle}</p>
        <p style="font-size: 1.25rem; font-style: italic; color: #57534e; border-left: 4px solid #d97706; padding-left: 1rem; margin-bottom: 2rem;">${arch.simpleDefinition}</p>
        
        <h2>The Experience</h2>
        <p>${arch.experience}</p>
        
        <h2>The Gift / Power</h2>
        <p><strong>${arch.gift}</strong> :: ${arch.insight}</p>
        
        <h2>The Shadow</h2>
        <p>${arch.shadow}</p>
        
        <h2>Core Practice</h2>
        <div style="background-color: #fdfbf7; padding: 1.5rem; border-radius: 8px; border: 1px solid #fef3c7;">
          <h3>${arch.corePractice.name}</h3>
          <p>${arch.corePractice.description}</p>
        </div>
      </article>
    `
  };
}

// 3. Add dynamic reflections metadata and extract contents from TSX files
const reflectionsInfo = [
  { slug: 'the-question-that-started-it-all', title: "The Question That Started It All", desc: '"How is my father not inside of you?" The catalyst question that birthed the Stone Forger’s Way.', filename: 'TheQuestionThatStartedItAll.tsx' },
  { slug: 'trust-is-the-cheat-code', title: "Trust Is The Cheat Code", desc: 'Moving from anxious control to radical trust. Why trust is the core mechanism of the Stone Forger.', filename: 'TrustIsTheCheatCode.tsx' },
  { slug: 'money-as-teacher', title: "Money As Teacher", desc: 'A somatic exploration of financial anxiety, wealth hoarding, and money as a mirror of our inner state.', filename: 'MoneyAsTeacher.tsx' },
  { slug: 'the-whales-song', title: "The Whale's Song", desc: 'When intention sinks deep enough, it doesn\'t drown — it echoes forever in the Field.', filename: 'TheWhalesSong.tsx' },
  { slug: 'the-physics-of-thought', title: "The Physics of Thought", desc: 'Understanding the mechanical and energetic properties of thought vectors and their impact on physical reality.', filename: 'ThePhysicsOfThought.tsx' },
  { slug: 'stone-throwing-vs-stone-forging', title: "Stone Throwing vs. Stone Forging", desc: 'Distinguishing between the defensive discharge of anger and the creative channel of purposeful execution.', filename: 'StoneThrowingVsStoneForging.tsx' },
  { slug: 'the-gift-of-grace', title: "The Gift of Grace", desc: 'On receiving the unearned, recognizing the invisible bridge, and the relief of letting go.', filename: 'TheGiftOfGrace.tsx' },
  { slug: 'terma-in-action', title: "Terma In Action", desc: 'The discovery of hidden treasures of wisdom and their practical integration into daily creative practice.', filename: 'TermaInAction.tsx' },
  { slug: 'the-creative-fortress', title: "The Creative Fortress", desc: 'On protecting the vision until it\'s ready to illuminate. Where Chadwick Boseman\'s creative philosophy meets The Stone Forger\'s Way.', filename: 'TheCreativeFortress.tsx' },
  { slug: 'the-path-to-1000-ways-to-sit', title: "The Path to 1000 Ways to Sit", desc: 'The origin and expansion of the physical meditation container and its intersection with Stone Forging.', filename: 'ThePathTo1000WaysToSit.tsx' },
  { slug: 'welcome-to-multifaceted-meditation', title: "Welcome to Multifaceted Meditation", desc: 'An introductory guide to integrating breath, somatic awareness, and intellectual inquiry in practice.', filename: 'WelcomeToMultifacetedMeditation.tsx' }
];

for (const ref of reflectionsInfo) {
  const route = `/reflections/${ref.slug}`;
  
  pagesRegistry[route] = {
    title: `${ref.title} :: Reflections :: The Stone Forger's Way`,
    description: ref.desc,
    type: 'article',
    image: '/trust-stepping.png',
    getContent: () => {
      try {
        const filePath = path.join(PAGES_DIR, 'reflections', ref.filename);
        if (fs.existsSync(filePath)) {
          const code = fs.readFileSync(filePath, 'utf8');
          // Parse out paragraphs from the TSX file
          // Simple regex to grab text lines or paragraphs
          const paragraphs: string[] = [];
          const regex = /<p[^>]*>([\s\S]*?)<\/p>/g;
          let match;
          while ((match = regex.exec(code)) !== null) {
            let pText = match[1]
              .replace(/\{.*?\}/g, '') // remove code variables
              .replace(/<.*?>/g, '') // strip HTML tags
              .replace(/\n\s*/g, ' ') // join split lines
              .trim();
            if (pText && pText.length > 10 && !pText.includes('Sponsored partnerships') && !pText.includes('Stripe')) {
              paragraphs.push(pText);
            }
          }
          
          return `
            <article style="max-width: 800px; margin: 0 auto; padding: 2rem; font-family: serif; line-height: 1.6; color: #1c1917;">
              <span style="display: inline-block; background-color: #fef3c7; color: #92400e; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">Reflection</span>
              <h1 style="font-size: 2.75rem; margin-top: 0; margin-bottom: 0.5rem;">${ref.title}</h1>
              <p style="font-size: 1.25rem; font-style: italic; color: #78716c; margin-bottom: 2rem;">${ref.desc}</p>
              <div style="font-size: 1.125rem; color: #292524; space-y: 1.5rem;">
                ${paragraphs.map(p => `<p style="margin-bottom: 1.5rem;">${p}</p>`).join('\n')}
              </div>
            </article>
          `;
        }
      } catch (err) {
        log(`Failed to read content for ${ref.filename}: ${err}`);
      }
      return `<article><h1>${ref.title}</h1><p>${ref.desc}</p></article>`;
    }
  };
}

// 4. Execution logic to build pages
function buildPages() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error(`[SEO-GEN] Error: Base index.html not found at ${INDEX_HTML_PATH}. Run vite build first!`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
  log(`Loaded base HTML template, length: ${baseHtml.length} bytes`);

  for (const [route, meta] of Object.entries(pagesRegistry)) {
    log(`Generating page for route: ${route}`);

    let html = baseHtml;

    // A. Replace Title
    const titleRegex = /<title>([\s\S]*?)<\/title>/i;
    const newTitle = `<title>${meta.title}</title>`;
    if (titleRegex.test(html)) {
      html = html.replace(titleRegex, newTitle);
    } else {
      html = html.replace('</head>', `${newTitle}\n</head>`);
    }

    // B. Build Meta Tags block
    const defaultImage = `${SITE_URL}/trust-stepping.png`;
    const imagePath = meta.image ? (meta.image.startsWith('http') ? meta.image : `${SITE_URL}${meta.image}`) : defaultImage;
    const type = meta.type || 'website';
    const author = "Kamau Zuberi Akabueze";
    const publishDate = "2025-12-19";

    const seoBlock = `
    <!-- Pre-rendered SEO Tags -->
    <link rel="canonical" href="${SITE_URL}${route === '/' ? '' : route}" />
    <meta name="description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <meta name="author" content="${author}" />
    <meta property="article:author" content="${author}" />
    <meta property="article:published_time" content="${publishDate}" />
    <meta property="og:title" content="${meta.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <meta property="og:image" content="${imagePath}" />
    <meta property="og:url" content="${SITE_URL}${route}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="The Stone Forger's Way" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${meta.description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${imagePath}" />
    `;

    // C. Inject Meta Tags before </head>
    html = html.replace('</head>', `${seoBlock}\n</head>`);

    // D. Pre-render body content inside <div id="root"></div>
    if (meta.getContent) {
      const pageContent = meta.getContent();
      html = html.replace('<div id="root"></div>', `<div id="root">${pageContent}</div>`);
    }

    // E. Save File
    if (route === '/') {
      // Root index.html gets updated directly
      fs.writeFileSync(INDEX_HTML_PATH, html, 'utf8');
      log(`Updated root index.html`);
    } else {
      // Subpage gets written in static subfolder (e.g. /journey/index.html)
      const folderPath = path.join(DIST_PATH, route);
      fs.mkdirSync(folderPath, { recursive: true });
      fs.writeFileSync(path.join(folderPath, 'index.html'), html, 'utf8');
      log(`Created static file: ${folderPath}/index.html`);
    }
  }

  // F. Generate sitemap.xml
  generateSitemap();

  // G. Generate robots.txt
  generateRobotsTxt();

  log(`Successfully completed all SEO pre-generation steps.`);
}

function generateSitemap() {
  log(`Generating sitemap.xml...`);
  const dateStr = new Date().toISOString().split('T')[0];

  const urls = Object.keys(pagesRegistry).map(route => {
    const priority = route === '/' ? '1.0' : (route.startsWith('/reflections/') || route.startsWith('/archetype/') ? '0.7' : '0.8');
    const changefreq = 'monthly';
    const loc = `${SITE_URL}${route === '/' ? '' : route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(DIST_PATH, 'sitemap.xml'), sitemapXml, 'utf8');
  log(`Sitemap generated successfully in dist/sitemap.xml`);
}

function generateRobotsTxt() {
  log(`Generating robots.txt...`);
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST_PATH, 'robots.txt'), robotsTxt, 'utf8');
  log(`Robots.txt generated successfully in dist/robots.txt`);
}

// Run the script
buildPages();

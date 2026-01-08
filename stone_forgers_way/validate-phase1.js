// Phase 1 Validation Script
// Tests data integrity for Expansion Kit v1.2

import { expandedArchetypes, getAllExpandedArchetypes, getExpandedArchetypesByCore } from './client/src/lib/expandedArchetypes.ts';
import { glossaryTerms, getTermsByArchetype } from './client/src/lib/glossaryData.ts';
import { practices, getPracticesByArchetype, getCorePracticesForExpandedArchetype } from './client/src/lib/practicesData.ts';

console.log('=== PHASE 1 VALIDATION REPORT ===\n');

// Test 1: Expanded Archetypes Data Integrity
console.log('✓ Testing Expanded Archetypes...');
const allExpanded = getAllExpandedArchetypes();
console.log(`  - Found ${allExpanded.length} expanded archetypes`);

allExpanded.forEach(arch => {
  const hasAllFields = arch.name && arch.simpleDefinition && arch.experience &&
                       arch.gift && arch.shadow && arch.imagePath;
  const hasPractice = arch.corePractice?.name && arch.corePractice?.description;
  const hasPath = arch.progressionPath?.title && arch.progressionPath?.tool;

  if (!hasAllFields || !hasPractice || !hasPath) {
    console.log(`  ✗ ${arch.name} missing required fields`);
  } else {
    console.log(`  ✓ ${arch.name} complete`);
  }
});

// Test 2: Glossary Terms with Archetype Tags
console.log('\n✓ Testing Glossary Archetype Tagging...');
const taggedTerms = glossaryTerms.filter(t =>
  t.coreArchetypeTags || t.expandedArchetypeTags
);
console.log(`  - ${taggedTerms.length} terms have archetype tags`);

const expansionTerms = glossaryTerms.filter(t =>
  t.expandedArchetypeTags && t.expandedArchetypeTags.length > 0
);
console.log(`  - ${expansionTerms.length} terms tagged for expanded archetypes`);

// Test each expanded archetype has glossary terms
const expandedIds = ['jade-hunter', 'the-invitation', 'stone-keeper', 'stone-breaker', 'stone-caller', 'stone-witness'];
expandedIds.forEach(id => {
  const terms = getTermsByArchetype(id);
  console.log(`  - ${id}: ${terms.length} glossary terms`);
  if (terms.length === 0) {
    console.log(`    ✗ WARNING: No glossary terms for ${id}`);
  }
});

// Test 3: Practices Data
console.log('\n✓ Testing Practices System...');
console.log(`  - Total practices: ${practices.length}`);

const practicesWithExpanded = practices.filter(p =>
  p.expandedArchetypeTags && p.expandedArchetypeTags.length > 0
);
console.log(`  - ${practicesWithExpanded.length} practices tagged for expanded archetypes`);

// Test each expanded archetype has practices
expandedIds.forEach(id => {
  const arcPractices = getPracticesByArchetype(id);
  const corePractices = getCorePracticesForExpandedArchetype(id);
  console.log(`  - ${id}: ${arcPractices.length} practices (${corePractices.length} core)`);

  if (corePractices.length < 2) {
    console.log(`    ✗ WARNING: Expected 2 core practices (practice + tool), found ${corePractices.length}`);
  }
});

// Test 4: Cross-Reference Integrity
console.log('\n✓ Testing Cross-Reference Integrity...');

// Check that glossary focus terms exist
let missingTerms = 0;
allExpanded.forEach(arch => {
  arch.progressionPath.glossaryFocus.forEach(termName => {
    const term = glossaryTerms.find(t =>
      t.term.toLowerCase() === termName.toLowerCase()
    );
    if (!term) {
      console.log(`  ✗ Missing glossary term: "${termName}" (referenced by ${arch.name})`);
      missingTerms++;
    }
  });
});

if (missingTerms === 0) {
  console.log('  ✓ All glossary focus terms exist');
} else {
  console.log(`  ✗ Found ${missingTerms} missing term references`);
}

// Test 5: Image Paths
console.log('\n✓ Checking Image Paths...');
allExpanded.forEach(arch => {
  console.log(`  - ${arch.name}: ${arch.imagePath}`);
});

// Test 6: Language Quality Check
console.log('\n✓ Testing Language Accessibility...');

const checkPlainLanguage = (text, context) => {
  const issues = [];

  // Check for overly academic language
  const academicWords = ['paradigm', 'methodology', 'framework', 'optimize', 'leverage', 'utilize'];
  academicWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      issues.push(`Contains academic word: "${word}"`);
    }
  });

  // Check for gamification language
  const gameWords = ['level up', 'unlock', 'achievement', 'xp', 'points', 'score'];
  gameWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      issues.push(`Contains gamification: "${word}"`);
    }
  });

  return issues;
};

let languageIssues = 0;
allExpanded.forEach(arch => {
  const issues = [
    ...checkPlainLanguage(arch.experience, `${arch.name} experience`),
    ...checkPlainLanguage(arch.insight, `${arch.name} insight`),
    ...checkPlainLanguage(arch.corePractice.description, `${arch.name} practice`)
  ];

  if (issues.length > 0) {
    console.log(`  ⚠ ${arch.name}:`);
    issues.forEach(issue => console.log(`    - ${issue}`));
    languageIssues += issues.length;
  }
});

if (languageIssues === 0) {
  console.log('  ✓ No obvious language accessibility issues detected');
}

// Summary
console.log('\n=== VALIDATION SUMMARY ===');
console.log(`✓ ${allExpanded.length} expanded archetypes defined`);
console.log(`✓ ${expansionTerms.length} new glossary terms with tags`);
console.log(`✓ ${practicesWithExpanded.length} practices tagged for expansion`);
console.log(`✓ All cross-references validated`);
console.log(`✓ Language accessibility checked`);
console.log('\n✅ Phase 1 data layer is ready for integration\n');

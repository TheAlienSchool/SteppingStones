# QA Speed Run - Motion Suite & Homepage Updates
## December 7, 2025

### Status: IN PROGRESS

---

## Phase 1: Critical Functionality Tests

### ✅ Motion Animations (All 6 Pages)

#### /glossary
- [ ] Hero header fades in with pause animation (1.2s)
- [ ] Introduction section blends with gradient (merge, 1.4s)
- [ ] Terms container reveals on scroll
- [ ] Scroll through 3+ terms to verify staggered reveals
- [ ] Disable motion accessibility (prefers-reduced-motion) → all elements instantly visible

#### /practices
- [ ] Header pauses on entry (1.2s fade-in)
- [ ] Introduction pivots inward (1s, subtle 3D rotation)
- [ ] Scroll down to practice cards → verify no animation delay issues
- [ ] Responsive test: mobile view shows same motion timing

#### /concepts
- [ ] Header pauses with contemplate feeling (1.2s)
- [ ] Concept sections merge together as you scroll
- [ ] All 4 sections (Trellis/Vine, Trust, Shield, Active Patience) visible with merge effect
- [ ] Gradient blend effect visible during reveal

#### /journey
- [ ] Header pauses (1.2s)
- [ ] Journey phases pivot inward as you scroll
- [ ] Expand 2+ phases to verify pivot doesn't re-trigger
- [ ] Mobile: verify phases expand cleanly without motion conflicts

#### /archetypes
- [ ] Header pauses on entry
- [ ] All 4 archetype cards pivot with perspective rotation
- [ ] Cards should subtly rotate into view (perspective(1000px) rotateX effect)
- [ ] No animation interference with card content

#### /research-forge.html
- [ ] Research category sections reveal with gradient blend (mergeBend)
- [ ] 1.4s timing feels aligned with other merge effects
- [ ] Standalone HTML file doesn't conflict with React app

### ✅ Homepage Enhancements

#### Priming Section (NEW)
- [ ] "How This Experience Unfolds" section visible between hero and benefits
- [ ] 3 columns (Pause, Pivot, Merge) explain the motion philosophy
- [ ] Section is visually distinct (stone-50 background)
- [ ] Mobile: 3 columns stack to 1 column responsively

#### Hero Animation
- [ ] Hero section has pause animation applied
- [ ] Text/image reveal together with fade-in
- [ ] 1.2s duration feels contemplative (not rushed)

#### Visual Hierarchy
- [ ] Priming section prepares visitor for motion experience
- [ ] Hero doesn't feel disconnected from what comes next
- [ ] Scroll feels guided (pause → pivot → merge journey)

---

## Phase 2: Accessibility Validation

### Motion Preferences
- [ ] Desktop with `prefers-reduced-motion: reduce` enabled
  - Open DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion: reduce
  - Navigate /glossary, /practices, /concepts, /journey, /archetypes
  - Verify: All animations disabled, content immediately visible
  - Verify: No flashing or animation artifacts

- [ ] iOS: Settings → Accessibility → Motion → Reduce Motion enabled
  - Test on iOS device (if available)
  - Verify: animations don't play

- [ ] Android: Settings → Developer Options → Animation scale: Off
  - Test on Android device (if available)
  - Verify: animations don't play

### Screen Reader Compatibility
- [ ] NVDA (Windows) or JAWS test
  - Navigate to /glossary
  - Verify: Screen reader reads title, subtitle, search field
  - Verify: Animation classes don't interfere with reading order
  
- [ ] VoiceOver (Mac/iOS)
  - Open /practices on Mac
  - Verify: All content readable without animation blocking

### Keyboard Navigation
- [ ] Tab through /archetypes
  - Verify: Can tab through all buttons without animation blocking focus
  - Verify: Visible focus indicator works through animations

---

## Phase 3: Performance Testing

### Bundle Size Impact
- [ ] Build the project
  - [ ] Check main.js bundle size
  - [ ] CSS animations add ~2KB (acceptable)
  - [ ] useScrollReveal hook is tree-shaken if not used

### Rendering Performance
- [ ] Scroll through /concepts (most animations)
  - [ ] Monitor performance in DevTools (Frames/sec)
  - [ ] Target: 60fps on scroll (smooth motion)
  - [ ] No jank or stuttering observed

- [ ] Mobile scroll performance
  - [ ] Same 60fps target on slower devices
  - [ ] Animations should feel smooth, not jerky

### Network/Loading
- [ ] Slow 3G simulation (DevTools → Network → Slow 3G)
  - [ ] Navigate to /glossary
  - [ ] Animations should start once content loads
  - [ ] No blocking of page render

---

## Phase 4: Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome 121+ (latest)
  - [ ] /glossary: Pause reveals working
  - [ ] /journey: Pivot reveals working
  - [ ] CSS animations smooth
  
- [ ] Firefox 121+ (latest)
  - [ ] All animations render identically
  - [ ] Intersection Observer works

- [ ] Safari 17+ (latest)
  - [ ] Perspective 3D transforms work (pivot)
  - [ ] Merge gradient animations work
  - [ ] No performance degradation

### Mobile Browsers
- [ ] Chrome Mobile (Android)
  - [ ] Tap archetype quiz link from /home
  - [ ] Motion should still work after navigation
  
- [ ] Safari Mobile (iOS)
  - [ ] Scroll /practices smoothly
  - [ ] Animations don't stutter

---

## Phase 5: Content & UX Flow

### Navigation Path: Home → Quiz → Archetype Page
- [ ] Click "Discover Your Archetype" from hero
- [ ] Quiz loads and displays correctly
- [ ] Complete quiz → navigate to results
- [ ] Results page shows personalized practices
- [ ] Click "Learn These Practices" → /practices page with motion

### Navigation Path: Home → Glossary
- [ ] Click "Learn more about The Field" (glossary tooltip)
- [ ] /glossary loads with pause animation
- [ ] Search field works with motion applied
- [ ] Clicking term expands definition
- [ ] Motion doesn't interfere with expand/collapse

### Social Cards Download
- [ ] Go to /social
- [ ] Click "Download" on quote card (check that previous fixes still work)
- [ ] PNG downloads with correct dimensions
- [ ] Mobile long-press gesture works (500ms detection)

---

## Phase 6: Contemplative Physics Validation

### Pause Animation Quality
- [ ] Feel: Does 1.2s duration feel contemplative (not rushed)?
- [ ] Visual: Does fade-in + translateY feel like gentle revealing?
- [ ] Emotion: Does it make you want to pause before reading?

### Pivot Animation Quality
- [ ] Feel: Does 3D rotation feel like inward turning?
- [ ] Visual: Is the perspective transform subtle (not disorienting)?
- [ ] Emotion: Does it create moment of recognition/perspective shift?

### Merge Animation Quality
- [ ] Feel: Does 1.4s duration feel integrative?
- [ ] Visual: Does gradient blend suggest unity/connection?
- [ ] Emotion: Does it feel like things coming together vs. sliding apart?

### Overall Coherence
- [ ] Does motion feel like part of the contemplative philosophy (not gratuitous)?
- [ ] Does it feel like the site is "breathing" with the visitor's scroll?
- [ ] Does motion prime visitor for the message (pause, pivot, merge)?

---

## Phase 7: Build & Deployment Verification

### Build Status
- [ ] `npm run build` completes without errors
- [ ] dist folder created with all assets
- [ ] CSS animations included in final CSS bundle
- [ ] TypeScript compilation successful

### Dev Server
- [ ] `npm run dev` starts without warnings
- [ ] All 6 motion pages load correctly
- [ ] Homepage priming section visible
- [ ] Hot module reload works (edit CSS, see instant update)

### Pre-Deployment Checklist
- [ ] All motion pages tested locally
- [ ] Accessibility tests passed
- [ ] Performance acceptable (60fps target)
- [ ] Cross-browser compatibility verified
- [ ] Build process clean (no warnings)

---

## Issues Found & Fixes

### Issue #1: [None yet - First pass testing]
- Status: 
- Resolution:
- Testing: 

---

## Sign-Off Checklist

- [ ] All 6 motion pages tested (/glossary, /practices, /concepts, /journey, /archetypes, /research-forge)
- [ ] Homepage priming section validated
- [ ] Motion animations feel contemplative (not game-like)
- [ ] Accessibility: prefers-reduced-motion tested
- [ ] Performance: 60fps target achieved
- [ ] Cross-browser: At least 2 browsers verified
- [ ] Build: `npm run build` successful
- [ ] Ready for staging/preview deployment

---

## Notes for Session

- Motion suite uses CSS @keyframes (no JavaScript overhead)
- Intersection Observer for efficient scroll detection
- All animations respect accessibility preferences
- Total ~2KB additional CSS
- No build errors; TypeScript validation clean
- Homepage priming section context-sets motion experience

**Next:** Begin Phase 1 testing with /glossary page

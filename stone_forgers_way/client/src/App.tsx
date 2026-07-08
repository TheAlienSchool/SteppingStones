import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation, Router as WouterRouter } from "wouter";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { SoundProvider, useSound } from "./contexts/SoundContext";

// Code splitting for secondary pages (lazy load on route navigation)
const TheJourney = lazy(() => import("./pages/TheJourney"));
const Archetypes = lazy(() => import("./pages/Archetypes"));
const Concepts = lazy(() => import("./pages/Concepts"));
const Practices = lazy(() => import("./pages/Practices"));
const Glossary = lazy(() => import("./pages/Glossary"));
const About = lazy(() => import("./pages/About"));
const Voices = lazy(() => import("./pages/Voices"));
const ForgersCohort = lazy(() => import("./pages/ForgersCohort"));
const SamuelRHarris = lazy(() => import("./pages/SamuelRHarris"));
const TheContainer = lazy(() => import("./pages/TheContainer"));
const Reflections = lazy(() => import("./pages/Reflections"));

// Reflections
const TheQuestionThatStartedItAll = lazy(() => import("./pages/reflections/TheQuestionThatStartedItAll"));
const TrustIsTheCheatCode = lazy(() => import("./pages/reflections/TrustIsTheCheatCode"));
const MoneyAsTeacher = lazy(() => import("./pages/reflections/MoneyAsTeacher"));
const TheWhalesSong = lazy(() => import("./pages/reflections/TheWhalesSong"));
const ThePhysicsOfThought = lazy(() => import("./pages/reflections/ThePhysicsOfThought"));
const StoneThrowingVsStoneForging = lazy(() => import("./pages/reflections/StoneThrowingVsStoneForging"));
const TheGiftOfGrace = lazy(() => import("./pages/reflections/TheGiftOfGrace"));
const TermaInAction = lazy(() => import("./pages/reflections/TermaInAction"));
const TheCreativeFortress = lazy(() => import("./pages/reflections/TheCreativeFortress"));
const ThePathTo1000WaysToSit = lazy(() => import("./pages/reflections/ThePathTo1000WaysToSit"));
const WelcomeToMultifacetedMeditation = lazy(() => import("./pages/reflections/WelcomeToMultifacetedMeditation"));

const ThankYou = lazy(() => import("./pages/ThankYou"));
const ArchetypeQuiz = lazy(() => import("./pages/ArchetypeQuiz"));
const MyArchetype = lazy(() => import("./pages/MyArchetype"));
const TodaysPracticePage = lazy(() => import("./pages/TodaysPracticePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const ArchetypePortal = lazy(() => import("./pages/ArchetypePortal"));
const ExpandedQuiz = lazy(() => import("./pages/ExpandedQuiz"));

const Social = lazy(() => import("./pages/Social"));
const CompleteWorks = lazy(() => import("./pages/CompleteWorks"));
const CreativeContext = lazy(() => import("./pages/CreativeContext"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-amber-200 border-t-amber-600 animate-spin mx-auto"></div>
        <p className="text-stone-600 font-serif">Loading page...</p>
      </div>
    </div>
  );
}

function useSomaticLocation() {
  const { visibleLocation, setLocation } = useSound();
  return [visibleLocation, setLocation] as [string, typeof setLocation];
}

function Router() {
  useScrollToTop();
  
  return (
    <WouterRouter hook={useSomaticLocation}>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/journey"} component={TheJourney} />
          <Route path={"/archetypes"} component={Archetypes} />
          <Route path={"/archetype/:id"} component={ArchetypePortal} />
          <Route path={"/archetype-quiz"} component={ArchetypeQuiz} />
          <Route path={"/expanded-quiz"} component={ExpandedQuiz} />
          <Route path={"/my-archetype"} component={MyArchetype} />
          <Route path={"/todays-practice"} component={TodaysPracticePage} />
          <Route path={"/concepts"} component={Concepts} />
          <Route path={"/practices"} component={Practices} />
          <Route path={"/glossary"} component={Glossary} />
          <Route path={"/works"} component={CompleteWorks} />
          <Route path="/about" component={About} />
          <Route path="/social" component={Social} />
          <Route path="/voices" component={Voices} />
          <Route path="/forgers-cohort" component={ForgersCohort} />
          <Route path="/creative-context" component={CreativeContext} />
          <Route path="/samuel-r-harris" component={SamuelRHarris} />
          <Route path="/the-container" component={TheContainer} />
        <Route path="/reflections" component={Reflections} />
        <Route path="/reflections/the-question-that-started-it-all" component={TheQuestionThatStartedItAll} />
        <Route path="/reflections/trust-is-the-cheat-code" component={TrustIsTheCheatCode} />
        <Route path="/reflections/money-as-teacher" component={MoneyAsTeacher} />
        <Route path="/reflections/the-whales-song" component={TheWhalesSong} />
        <Route path="/reflections/the-physics-of-thought" component={ThePhysicsOfThought} />
        <Route path="/reflections/stone-throwing-vs-stone-forging" component={StoneThrowingVsStoneForging} />
        <Route path="/reflections/the-gift-of-grace" component={TheGiftOfGrace} />
        <Route path="/reflections/terma-in-action" component={TermaInAction} />
        <Route path="/reflections/the-creative-fortress" component={TheCreativeFortress} />
        <Route path="/reflections/the-path-to-1000-ways-to-sit" component={ThePathTo1000WaysToSit} />
        <Route path="/reflections/welcome-to-multifaceted-meditation" component={WelcomeToMultifacetedMeditation} />
        <Route path={"/thank-you"} component={ThankYou} />
        <Route path={"/privacy-policy"} component={PrivacyPolicy} />
        <Route path={"/disclaimer"} component={Disclaimer} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <SoundProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </SoundProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;


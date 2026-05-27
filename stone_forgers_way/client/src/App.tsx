import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense, useEffect, useRef } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TheJourney from "./pages/TheJourney";
import Archetypes from "./pages/Archetypes";
import Concepts from "./pages/Concepts";
import Practices from "./pages/Practices";
import Glossary from "./pages/Glossary";
import About from "./pages/About";
import Voices from "./pages/Voices";
import ForgersCohort from "./pages/ForgersCohort";
import SamuelRHarris from "./pages/SamuelRHarris";
import TheContainer from "./pages/TheContainer";
import Reflections from "./pages/Reflections";
import TheQuestionThatStartedItAll from "./pages/reflections/TheQuestionThatStartedItAll";
import TrustIsTheCheatCode from "./pages/reflections/TrustIsTheCheatCode";
import MoneyAsTeacher from "./pages/reflections/MoneyAsTeacher";
import TheWhalesSong from "./pages/reflections/TheWhalesSong";
import ThePhysicsOfThought from "./pages/reflections/ThePhysicsOfThought";
import StoneThrowingVsStoneForging from "./pages/reflections/StoneThrowingVsStoneForging";
import TheGiftOfGrace from "./pages/reflections/TheGiftOfGrace";
import TermaInAction from "./pages/reflections/TermaInAction";
import TheCreativeFortress from "./pages/reflections/TheCreativeFortress";
import ThePathTo1000WaysToSit from "./pages/reflections/ThePathTo1000WaysToSit";
import WelcomeToMultifacetedMeditation from "./pages/reflections/WelcomeToMultifacetedMeditation";
import ThankYou from "./pages/ThankYou";
import ArchetypeQuiz from "./pages/ArchetypeQuiz";
import MyArchetype from "./pages/MyArchetype";
import TodaysPracticePage from "./pages/TodaysPracticePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import ArchetypePortal from "./pages/ArchetypePortal";
import ExpandedQuiz from "./pages/ExpandedQuiz";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { SoundProvider, useSound } from "./contexts/SoundContext";

// Code splitting for heavy pages (lazy load on route navigation)
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

function Router() {
  useScrollToTop();
  const [location] = useLocation();
  const { triggerTransition } = useSound();
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location !== prevLocation.current) {
      triggerTransition();
      prevLocation.current = location;
    }
  }, [location, triggerTransition]);
  
  return (
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
      <Route path={"/works"} component={(props) => (
        <Suspense fallback={<PageLoader />}>
          <CompleteWorks {...props} />
        </Suspense>
      )} />
      <Route path="/about" component={About} />
      <Route path="/social" component={(props) => (
        <Suspense fallback={<PageLoader />}>
          <Social {...props} />
        </Suspense>
      )} />
      <Route path="/voices" component={Voices} />
      <Route path="/forgers-cohort" component={ForgersCohort} />
      <Route path="/creative-context" component={(props) => (
        <Suspense fallback={<PageLoader />}>
          <CreativeContext {...props} />
        </Suspense>
      )} />
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


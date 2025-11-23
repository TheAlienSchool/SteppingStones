import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useSearch } from "wouter";
import { Heart, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export default function ThankYou() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const tier = params.get("tier");
  const sessionId = params.get("session_id");

  // Track successful contribution
  useEffect(() => {
    if (sessionId || tier) {
      analytics.contributionComplete(tier || "contribution", sessionId || "direct");
    }
  }, [tier, sessionId]);

  return (
    <Layout>
      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            {/* Gratitude Icon */}
            <div>
              <div className="inline-flex items-center justify-center w-24 h-24 bg-amber-100 rounded-full">
                <Heart className="w-12 h-12 text-amber-700 fill-amber-700" />
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-5xl font-serif text-stone-800">
                Thank You
              </h1>

              <p className="text-2xl text-amber-700 italic">
                Your contribution honors the sacred cycle of value exchange
              </p>
            </div>

            {/* Gratitude Message */}
            <div className="bg-amber-50 p-8 rounded-lg space-y-8 text-left">
              <p className="text-lg leading-relaxed text-stone-700">
                You have just participated in something rare: conscious value exchange. Not a transaction,
                but a recognition. Not payment, but resonance. Not obligation, but choice.
              </p>

              <p className="text-lg leading-relaxed text-stone-700">
                This work exists because people like you see it, value it, and choose to support its
                continued existence. You are not a customer. You are a co-creator in the Field.
              </p>

              <p className="text-lg leading-relaxed text-stone-700">
                Your contribution allows this work to continue flowing :: into newsletters, experiential
                gatherings, connective experiences, guidebooks, and workshops. You are helping forge
                the path for others to walk.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-amber-600 pl-6 text-left">
              <p className="text-xl text-stone-700 italic mb-4">
                "It is better to light a candle than to curse the darkness."
              </p>
              <p className="text-sm text-stone-500">
                — William L. Watkinson (1907), remixed by Samuel R. Harris as<br />
                "the irresistible nature of one solitary life, lit up by love"
              </p>
            </div>

            {/* Next Steps */}
            <div className="space-y-6">
              <p className="text-lg text-stone-600">
                Continue exploring The Stone Forger's Way:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/reflections">
                  <Button
                    size="lg"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Read More Reflections
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link href="/journey">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-50"
                  >
                    Explore The Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <Link href="/">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full text-stone-600 hover:text-stone-800"
                >
                  Return to Homepage
                </Button>
              </Link>
            </div>

            {/* Final Blessing */}
            <div className="pt-8 border-t border-stone-200 space-y-4">
              <p className="text-lg text-stone-600 italic">
                May you forge your path with trust, place your stones with intention,<br />
                and walk forward knowing the Field supports each step.
              </p>
              <p className="text-sm text-stone-500">
                — Kamau Zuberi Akabueze
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { analytics } from "@/lib/analytics";
import { Heart, X } from "lucide-react";

interface ContributionTier {
  name: string;
  amount: number;
  description: string;
  stripeUrl: string;
}

const tiers: ContributionTier[] = [
  {
    name: "Stone Carrier's Gratitude",
    amount: 11,
    description: "I recognize the value and want to honor it",
    stripeUrl: "https://buy.stripe.com/3cI8wP7Us2ST9ZM2RB14400"
  },
  {
    name: "Conscious Forger's Support",
    amount: 33,
    description: "This work is helping me forge my own path",
    stripeUrl: "https://buy.stripe.com/14A5kD6Qodxxeg23VF14401"
  },
  {
    name: "Stone Forger's Partnership",
    amount: 108,
    description: "I want to support the continued creation of this work",
    stripeUrl: "https://buy.stripe.com/8x23cvfmUfFFc7UeAj14402"
  }
];

const gratitudeGrantUrl = "https://buy.stripe.com/3cI28reiQ655goadwf14403";

export default function ContributionInvitation() {
  const [showGratitude, setShowGratitude] = useState(false);
  const [selectedTier, setSelectedTier] = useState<{ name: string; amount: number; url: string } | null>(null);

  const handleContribution = (tier: string, amount: number, stripeUrl: string) => {
    setSelectedTier({ name: tier, amount, url: stripeUrl });
    setShowGratitude(true);
  };

  const proceedToPayment = () => {
    if (selectedTier) {
      analytics.contributionClick(selectedTier.name, selectedTier.amount, 'contribution_invitation');
      window.open(selectedTier.url, '_blank');
      setShowGratitude(false);
      setSelectedTier(null);
    }
  };

  return (
    <Card className="bg-amber-50/50 border-amber-200">
      <CardHeader>
        <CardTitle className="text-2xl font-serif text-stone-800">
          Conscious Value Exchange
        </CardTitle>
        <CardDescription className="text-stone-600">
          All content is freely accessible. If this work has created value in your life, 
          you can participate in the energetic exchange by offering what resonates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="p-4 bg-white rounded-lg border border-amber-200 space-y-3">
              <div className="text-center">
                <p className="font-semibold text-stone-800">{tier.name}</p>
                <p className="text-3xl font-bold text-amber-700">${tier.amount}</p>
                <p className="text-sm text-stone-600 mt-2">{tier.description}</p>
              </div>
              <Button 
                onClick={() => handleContribution(tier.name, tier.amount, tier.stripeUrl)}
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                Contribute
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-4 border-t border-amber-200 mt-6">
          <p className="text-sm font-semibold text-stone-700 mb-2">Gratitude Grant</p>
          <p className="text-sm text-stone-600 mb-3">
            A direct grant to Kamau Zuberi Akabueze for the continued stewardship and maintenance 
            of The Stone Forger's Way into newsletter, experiential gatherings, connective experiences, 
            merchandise, guidebooks, and workshops.
          </p>
          <Button 
            onClick={() => handleContribution('Gratitude Grant', 0, gratitudeGrantUrl)}
            variant="outline" 
            className="border-amber-600 text-amber-700 hover:bg-amber-50"
          >
            Offer a Gratitude Grant
          </Button>
        </div>
        
        <p className="text-xs text-stone-500 text-center pt-4">
          This honors the sacred cycle of value exchange while keeping all wisdom freely accessible.
        </p>
      </CardContent>

      {/* Pre-Transaction Gratitude Modal */}
      {showGratitude && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowGratitude(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
                <Heart className="w-8 h-8 text-amber-700 fill-amber-700" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-stone-800">
                  Thank You
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Your intention to contribute is itself a gift. You are participating in conscious value exchange—not obligation, but resonance.
                </p>
              </div>

              {selectedTier && selectedTier.amount > 0 && (
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-sm text-stone-600">{selectedTier.name}</p>
                  <p className="text-2xl font-bold text-amber-700">${selectedTier.amount}</p>
                </div>
              )}

              <p className="text-sm text-stone-500 italic">
                "It is better to light a candle than to curse the darkness."
              </p>

              <div className="space-y-3 pt-2">
                <Button
                  onClick={proceedToPayment}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  Continue to Secure Payment
                </Button>
                <button
                  onClick={() => setShowGratitude(false)}
                  className="text-sm text-stone-500 hover:text-stone-700"
                >
                  Return to reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

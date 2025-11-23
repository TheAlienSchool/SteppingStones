import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";
import { analytics } from "@/lib/analytics";

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "inline";
  title?: string;
  description?: string;
}

export default function NewsletterSignup({ 
  variant = "default",
  title = "The Listener's Path",
  description = "A newsletter exploring the intersection of conscious creation, sound, and embodied wisdom"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Track newsletter signup
    analytics.newsletterSignup(email, variant);
    
    // Beehiiv magic link - opens in new tab
    const beehiivUrl = `https://magic.beehiiv.com/v1/0a473377-52f0-44c5-8f29-e5d9c3203ece?email=${encodeURIComponent(email)}`;
    window.open(beehiivUrl, '_blank');
    
    // Reset form
    setEmail("");
    setIsSubmitting(false);
  };

  if (variant === "compact") {
    return (
      <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
        <div className="flex items-start gap-3 mb-4">
          <Mail className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-stone-800 mb-1">{title}</h3>
            <p className="text-sm text-stone-600">{description}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Subscribe
          </Button>
        </form>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="border-t border-b border-stone-200 py-8 my-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
            <Mail className="w-6 h-6 text-amber-700" />
          </div>
          <h3 className="text-2xl font-serif text-stone-800 mb-2">{title}</h3>
          <p className="text-stone-600 mb-6">{description}</p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-stone-50 border-amber-200">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
            <Mail className="w-6 h-6 text-amber-700" />
          </div>
          <CardTitle className="text-2xl font-serif text-stone-800">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-stone-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-stone-500">
            Exploring conscious creation, sound, embodied wisdom, and the practice of listening deeply.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-stone-50 to-amber-50">
      <SEO
        title="404 - Page Not Found :: The Stone Forger's Way"
        description="The page you are looking for does not exist on the Stone Forger's path."
      />
      <Card className="w-full max-w-lg mx-4 shadow-lg border-2 border-amber-200 bg-white">
        <CardContent className="pt-8 pb-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-amber-700" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-serif font-bold text-amber-700 mb-1">404</h1>

            <h2 className="text-2xl font-serif text-stone-800">
              Page Not Found
            </h2>
          </div>

          <p className="text-stone-600 text-lg leading-relaxed">
            The page you're looking for has moved beyond the stones we've forged.
            <br />
            Let's return you to the path.
          </p>

          <Button
            onClick={handleGoHome}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-base font-medium w-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Share2, Twitter, Linkedin, Facebook, Mail, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";
import { analytics } from "@/lib/analytics";

interface SocialShareProps {
  title: string;
  url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const shareText = `${title} - The Stone Forger's Way`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      analytics.copyLink(title, shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook' | 'email', url: string) => {
    switch (platform) {
      case 'twitter':
        analytics.shareOnTwitter(title, shareUrl);
        break;
      case 'linkedin':
        analytics.shareOnLinkedIn(title, shareUrl);
        break;
      case 'facebook':
        analytics.shareOnFacebook(title, shareUrl);
        break;
      case 'email':
        analytics.shareViaEmail(title, shareUrl);
        break;
    }
    window.open(url, '_blank');
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(`I thought you might find this interesting:\n\n${shareUrl}`)}`
  };

  return (
    <div className="border-t border-b border-stone-200 py-6 my-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 text-stone-600">
          <Share2 className="w-5 h-5" />
          <span className="font-semibold">Share this reflection</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('twitter', shareLinks.twitter)}
            className="border-stone-300 hover:bg-stone-50"
          >
            <Twitter className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('linkedin', shareLinks.linkedin)}
            className="border-stone-300 hover:bg-stone-50"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('facebook', shareLinks.facebook)}
            className="border-stone-300 hover:bg-stone-50"
          >
            <Facebook className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleShare('email', shareLinks.email)}
            className="border-stone-300 hover:bg-stone-50"
          >
            <Mail className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="border-stone-300 hover:bg-stone-50"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

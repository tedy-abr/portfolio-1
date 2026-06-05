import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg text-sm font-medium transition-colors border border-zinc-700"
      aria-label="Copy page link"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <LinkIcon className="w-4 h-4" />
          Share Link
        </>
      )}
    </button>
  );
}

export default CopyLinkButton;

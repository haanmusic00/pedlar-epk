import { Play, Square, Pause, Instagram, Youtube, Mail } from "lucide-react";
import { useState, useRef } from "react";

// TikTok icon SVG component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function MusicPlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/file/mp3s/Love and Patience_full.mp3"
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Mobile Header - Blue bar at top */}
      <div className="sm:hidden w-full bg-[var(--cookie-monster-blue)] rounded-t-[20px] h-16 flex-shrink-0" />
      
      {/* Main Content Card */}
      <div className="w-full sm:max-w-[600px] bg-[var(--cream-background)] flex flex-col items-center px-4 sm:px-8 py-6 sm:py-8 sm:rounded-[20px]">
        {/* Image */}
        <div className="w-full mb-6">
          <img
            src="/file/imgs/love_and_patience.webp"
            alt="Love and Patience"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Song Information */}
        <div className="w-full text-center mb-6">
          <h1 className="text-[48px] sm:text-[64px] font-bold text-black mb-2 leading-tight">
            Earth
          </h1>
          <p className="text-[20px] sm:text-[24px] font-medium text-black">
            pedlar
          </p>
        </div>

        {/* Player Controls */}
        <div className="flex flex-row items-center justify-center gap-6 mb-6">
          <button
            onClick={handlePlay}
            className="p-3 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Play"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="black" />
          </button>
          <button
            onClick={handleStop}
            className="p-3 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Stop"
          >
            <Square className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="black" />
          </button>
          <button
            onClick={handlePause}
            className="p-3 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Pause"
          >
            <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="black" />
          </button>
        </div>
      </div>

      {/* Footer - Social Media Icons */}
      {/* Mobile: Blue footer with white icons, Web: Transparent with black icons */}
      <div className="w-full sm:w-auto flex flex-col items-center gap-4 mt-6 sm:mt-8 pb-6 sm:pb-0 sm:px-0">
        {/* Mobile: Blue footer background */}
        <div className="sm:hidden w-full bg-[var(--cookie-monster-blue)] rounded-b-[20px] pt-6 pb-6 flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex flex-row items-center justify-center gap-6">
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Attribution Text */}
          <p className="text-[10px] text-white">
            loremipsum
          </p>
        </div>

        {/* Web: Footer without blue background */}
        <div className="hidden sm:flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex flex-row items-center justify-center gap-6">
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-white" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Attribution Text */}
          <p className="text-[10px] text-white">
            loremipsum
          </p>
        </div>
      </div>
    </>
  );
}


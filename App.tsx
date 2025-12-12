import { EyeCard } from "./components/EyeCard";
import { Instagram, Youtube, Mail } from "lucide-react";

function Attribution() {
  return (
    <div className="w-full flex justify-center mt-2 mb-4">
      <p className="text-[10px] text-white">loremipsum</p>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 pt-3 pb-4 sm:px-8 sm:pt-4 sm:pb-8"
      style={{ backgroundColor: "var(--cookie-monster-blue)" }}
    >
      {/* Main Card Container */}
      <div className="flex flex-col items-center justify-center w-full max-w-2xl pb-4 sm:pb-8">
        <EyeCard />
        
        {/* Social Icons - centered below the card */}
        <div className="flex flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full">
          <a
            href="https://open.spotify.com/artist/4m6KrIdAr9FFI4oJHuvZ3o?si=pBWE0A9HRPutLpsuKk3_0Q"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Spotify"
          >
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@pedlarmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="TikTok"
          >
            <svg
              className="w-7 h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/pedlarmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7 text-white" />
          </a>
          <a
            href="https://www.youtube.com/@pedlarmusic"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-7 h-7 text-white" />
          </a>
          <a
            href="mailto:haanmusic00@gmail.com"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>
      <Attribution />
    </div>
  );
}

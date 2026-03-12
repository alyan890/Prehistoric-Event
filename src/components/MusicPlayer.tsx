'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

type YouTubePlayer = {
  destroy: () => void;
  pauseVideo: () => void;
  playVideo: () => void;
  setVolume: (volume: number) => void;
};

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          events?: {
            onReady?: () => void;
          };
          height?: string;
          playerVars?: Record<string, number | string>;
          videoId: string;
          width?: string;
        }
      ) => YouTubePlayer;
    };
  }
}

const YOUTUBE_VIDEO_ID = 'AA_jatsA8JA';
const YOUTUBE_START_TIME = 82;

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [playerReady, setPlayerReady] = useState(false);
  const playerHostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    const createPlayer = () => {
      if (!playerHostRef.current || playerRef.current || !window.YT?.Player) {
        return;
      }

      playerRef.current = new window.YT.Player(playerHostRef.current, {
        videoId: YOUTUBE_VIDEO_ID,
        width: '0',
        height: '0',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          playlist: YOUTUBE_VIDEO_ID,
          rel: 0,
          start: YOUTUBE_START_TIME,
        },
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
        },
      });
    };

    const playerHost = document.createElement('div');
    playerHost.style.display = 'none';
    playerHost.setAttribute('aria-hidden', 'true');
    document.body.appendChild(playerHost);
    playerHostRef.current = playerHost;

    if (window.YT?.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;

      if (!document.querySelector('script[data-youtube-iframe-api="true"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        script.dataset.youtubeIframeApi = 'true';
        document.body.appendChild(script);
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      if (playerHostRef.current) {
        playerHostRef.current.remove();
        playerHostRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!playerRef.current || !playerReady) {
      return;
    }

    if (isPlaying) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying, playerReady]);

  useEffect(() => {
    if (playerRef.current && playerReady) {
      playerRef.current.setVolume(Math.round(volume * 100));
    }
  }, [playerReady, volume]);

  return (
    <div className="fixed bottom-8 right-8 z-40 flex items-center gap-2">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-dino-orange text-white p-3 rounded-full hover:bg-orange-700 transition shadow-lg"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {isPlaying && (
        <div className="bg-dino-dark border border-white/20 rounded-full px-3 py-2 flex items-center gap-2">
          <label htmlFor="volume" className="text-dino-tan text-xs">
            Vol:
          </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
          />
        </div>
      )}

    </div>
  );
}

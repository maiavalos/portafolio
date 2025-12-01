import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, Volume2Icon, VolumeXIcon } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Reemplaza esta URL con la de tu archivo de música
  const musicFile = '/music/background-music.mp3';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/20">
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
      <button
        onClick={togglePlay}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5 text-white" />
        ) : (
          <PlayIcon className="w-5 h-5 text-white" />
        )}
      </button>
      
      <div className="flex items-center gap-2">
        <button onClick={toggleMute} aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}>
          {isMuted || volume === 0 ? (
            <VolumeXIcon className="w-5 h-5 text-white" />
          ) : (
            <Volume2Icon className="w-5 h-5 text-white" />
          )}
        </button>
        
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 accent-blue-400"
          aria-label="Control de volumen"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;

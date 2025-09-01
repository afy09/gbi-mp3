import { useEffect, useRef, useState } from "react";
const FaVolumeUp = require("react-icons/fa").FaVolumeUp;
const FaVolumeMute = require("react-icons/fa").FaVolumeMute;

const SoundPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          console.log("Autoplay diblokir browser. Menunggu interaksi user.");
          setIsPlaying(false);
        });
    }
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || isMuted) {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => console.log("Gagal play audio"));
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Elemen audio */}
      <audio ref={audioRef} src="/sound/audiogereja.mp3" loop />

      {/* Tombol ikon sound */}
      <div className="fixed bottom-[88px] right-6 z-50 flex items-center gap-2">
        <button onClick={toggleSound} className="p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary transition">
          {isMuted || !isPlaying ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
        </button>
      </div>
    </>
  );
};

export default SoundPlayer;

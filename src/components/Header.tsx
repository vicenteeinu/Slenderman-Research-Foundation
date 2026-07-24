import { useRef, useState } from "react";
import songFile from "../assets/sounds/bgsound.mp3";

export default function Header() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <header className="bg-linear-to-b from-gray-600 to-gray-800 border border-gray-800 px-6 py-4 flex items-center justify-between">
      <h1 className="text-white text-5xl font-bold">Slenderman Research Foundation</h1>

      <button
        onClick={toggleMusic}
        className="bg-gray-300 text-gray-900 border border-gray-500 px-4 py-2 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] text-sm font-semibold shrink-0"
      >
        {playing ? "⏸ Pause" : "▶ Play music"}
      </button>

      <audio ref={audioRef} src={songFile} loop />
    </header>
  );
}
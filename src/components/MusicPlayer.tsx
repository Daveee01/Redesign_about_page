// src/components/MusicPlayer.tsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🔹 1. Impor motion
import mySong from "../assets/audio/Bintang 5 Plat KT.mp3";

// --- Ikon SVG (PlayIcon & PauseIcon) ---
// (Tidak ada perubahan pada kode ikon SVG, tetap sama)
const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);
const PauseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="4" height="16"></rect>
    <rect x="14" y="4" width="4" height="16"></rect>
  </svg>
);
// ------------------------------------

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songTitle = "Bintang 5 - Tenxi (PLAT KT REMIX)"

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center space-x-3">
      
      {/* Elemen audio (tidak terlihat) */}
      <audio ref={audioRef} src={mySong} loop />

      {/* 🔹 4. Tombol Play/Pause (tidak banyak berubah) */}
      <button
        onClick={togglePlayPause}
        className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-black/50 border border-blue-500/30 text-white backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-blue-500/50 hover:scale-110 z-10" // Tambah z-10
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <PauseIcon className="w-5 h-5" />
        ) : (
          <PlayIcon className="w-5 h-5 ml-0.5" />
        )}
      </button>

      {/* 🔹 5. Animasi Judul Lagu 🔹 */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            // 'motion.div' adalah div yang bisa dianimasikan
            
            // Definisikan animasi
            initial={{ width: 0, opacity: 0, x: -20 }} // Mulai dari lebar 0, transparan, dan sedikit di kiri
            animate={{ width: "auto", opacity: 1, x: 0 }} // Animasi ke lebar otomatis & terlihat
            exit={{ width: 0, opacity: 0, x: -20 }} // Animasi keluar (saat di-pause)
            transition={{ duration: 0.5, ease: "easeInOut" }} // Durasi dan tipe animasi

            className="flex items-center h-10 px-4 -ml-6 pl-10 pr-5 rounded-full bg-black/50 border border-blue-500/30 text-white backdrop-blur-sm overflow-hidden"
          >
            {/* 'overflow-hidden' menyembunyikan teks saat div mengecil
              '-ml-6 pl-10' trik agar div muncul "dari dalam" tombol
            */}
            
            <span className="whitespace-nowrap text-sm font-medium">
              {songTitle}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
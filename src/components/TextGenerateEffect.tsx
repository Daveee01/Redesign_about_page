// src/components/TextGenerateEffect.tsx
import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";

// Helper function `cn` (classnames) untuk menggabungkan class Tailwind
// Kita masukkan di sini agar tidak perlu instalasi tambahan
const cn = (...inputs: any[]) => {
  return inputs
    .flat() // Mengatasi array di dalam array
    .filter(Boolean) // Menghapus nilai false/null/undefined
    .join(" "); // Menggabungkan semua jadi satu string
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  // Hook untuk animasi
  const [scope, animate] = useAnimate();
  // Pisahkan kata-kata berdasarkan spasi
  const wordsArray = words.split(" ");

  React.useEffect(() => {
    // Jalankan animasi saat komponen dimuat
    animate(
      "span", // Targetkan semua elemen <span> di dalam scope
      {
        opacity: 1, // Animasikan opacity dari 0 (di className) ke 1
      },
      {
        duration: 2, // Durasi total
        delay: stagger(0.15), // Jeda antar setiap kata
      }
    );
  }, [scope.current]); // Bergantung pada 'scope'

  return (
    // 'scope' adalah container untuk animasi kita
    // 'className' dari props akan diterapkan di sini (penting untuk gradient Anda)
    <motion.div ref={scope} className={cn(className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0" // Mulai dengan transparan
        >
          {word}{" "} {/* Tampilkan kata + spasi */}
        </motion.span>
      ))}
    </motion.div>
  );
};
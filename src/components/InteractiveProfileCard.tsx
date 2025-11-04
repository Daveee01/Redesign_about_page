// components/InteractiveProfileCard.tsx

import React, { useRef, useEffect } from "react";

import SocialLinks from "./SocialLinks";


import myBannerVideo from "../assets/video/banner-video.mp4";

interface Profile {
  name: string;

  nim: string;

  title: string;

  bio: string;

  imageUrl: string;

  stack: string[];
}

interface ProfileCardProps {
  profile: Profile;
}

const InteractiveProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef({
    animationId: null as number | null,

    target: { x: 0, y: 0, scale: 1 },

    current: { x: 0, y: 0, scale: 1 },

    damping: 0.1,
  });

  const tiltStrength = 4;

  useEffect(() => {
    const loop = () => {
      const { target, current, damping } = animationRef.current;

      current.x += (target.x - current.x) * damping;

      current.y += (target.y - current.y) * damping;

      current.scale += (target.scale - current.scale) * damping;

      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${current.x}deg) rotateY(${current.y}deg) scale3d(${current.scale}, ${current.scale}, ${current.scale})`;
      }

      animationRef.current.animationId = requestAnimationFrame(loop);
    };

    animationRef.current.animationId = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current.animationId) {
        cancelAnimationFrame(animationRef.current.animationId);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { width, height, left, top } =
      cardRef.current.getBoundingClientRect();

    const mouseX = (e.clientX - left - width / 2) / (width / 2);

    const mouseY = (e.clientY - top - height / 2) / (height / 2);

    animationRef.current.target = {
      x: -mouseY * tiltStrength,

      y: mouseX * tiltStrength,

      scale: 1.02,
    };
  };

  const handleMouseLeave = () => {
    animationRef.current.target = {
      x: 0,

      y: 0,

      scale: 1,
    };
  };

  // ... (akhir dari logika hook) ...

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-md w-full bg-black/70 border border-blue-500/30 rounded-3xl shadow-lg overflow-hidden transition-shadow duration-500 ease-in-out hover:shadow-[0_0_30px_#3b82f6]"
      style={{
        transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",

        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative">

        <video
          src={myBannerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-32 w-full object-cover" // Style yang sama dengan banner
        >
          Browser Anda tidak mendukung tag video.
        </video>

        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 transform">
          <img
            src={profile.imageUrl} // Ini mengambil dari props (About.tsx)
            alt="Profile Picture"
            className="w-32 h-32 rounded-full border-8 border-black shadow-lg"
          />
        </div>
      </div>

      <div className="pt-20 pb-8 px-6 text-center text-white">
        {/* ... (Nama, Judul, Bio) ... */}

        <div>
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-500 mb-1">
            {profile.name}
          </h2>

          <p className="text-blue-400 font-semibold mb-1">{profile.title}</p>

          <p className="text-blue-400 mb-0.1">{profile.nim}</p>

          <p className="text-gray-300 leading-relaxed mb-8">{profile.bio}</p>
        </div>

        {/* ... (Stack) ... */}

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            My Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {profile.stack.map((skill) => (
              <span
                key={skill}
                className="bg-blue-900/40 text-blue-300 font-semibold px-4 py-2 rounded-full text-sm shadow-sm transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-blue-500/50 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default InteractiveProfileCard;

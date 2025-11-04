import React from "react";
import PixelBlast from "../components/PixelBlast"; // 🔹 Impor tetap terpisah
import InteractiveProfileCard from "../components/InteractiveProfileCard"; // 🔹 Impor tetap terpisah
import CardSwap, { Card } from "../components/CardSwap"; // 🔹 Impor tetap terpisah
import gestureVideo from "../assets/video/monkeygesture.mp4"; // 🔹 Impor video
import MusicPlayer from "../components/MusicPlayer"; // 🔹 Impor pemutar musik
import myProfilePic from "../assets/images/profil.jpg"; 
import igPostImage from "../assets/images/gyj.png"; //

// Definisikan tipe Profile
interface Profile {
  name: string;
  nim: string;
  title: string;
  bio: string;
  imageUrl: string;
  stack: string[];
}

const About: React.FC = () => {
  // Data profil Anda
  const profile: Profile = {
    name: "David Kapal",
    nim: "105022310139",
    title: "INFORMATICS",
    bio: "Saya bukan programmer, saya prompt-grammer.",
    imageUrl: myProfilePic, 
    stack: ["React", "TailwindCSS", "Python", "Figma", "JavaScript"],
  };

  return (
    // 🔹 Pastikan div utama ini memiliki 'relative'
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-['Inter',_sans-serif] bg-black p-4">
      
      {/* 🔹 Pemutar Musik ditambahkan di sini 🔹 */}
      <div className="absolute top-6 right-6 z-50">
        <MusicPlayer />
      </div>

      {/* Layer Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <PixelBlast
          variant="circle"
          color="#3b82f6"
          pixelSize={4}
          liquid
          liquidStrength={0.08}
          enableRipples
          className="w-full h-full"
        />
      </div>

      {/* Wrapper Konten Utama */}
      <div className="relative z-10 flex w-full flex-col lg:flex-row items-center lg:justify-between gap-12 max-w-6xl mx-auto">
        
        {/* Kolom 1: Kartu Profil */}
        <div style={{ perspective: "1000px" }}>
          <InteractiveProfileCard profile={profile} />
        </div>

        {/* Kolom 2: CardSwap */}
        <div
          className="w-full max-w-sm lg:-translate-y-20"
          style={{ height: '600px', position: 'relative' }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            
            {/* 🔹 KARTU 1: Gesture Recognition & Video 🔹 */}
            <Card>
              <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6 h-full text-white flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex-shrink-0">
                  Latest_Project : Gesture Recognition
                </h3>
                <div className="flex-grow w-full h-0 min-h-0 rounded-lg overflow-hidden"> 
                  <video 
                    src={gestureVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    Browser Anda tidak mendukung tag video.
                  </video>
                </div>
              </div>
            </Card>

            {/* 🔹 KARTU 2 (DIUBAH) - GOOGLE MAPS 🔹 */}
            <Card>
              <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6 h-full text-white flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex-shrink-0">
                  Brojol in:
                </h3>
                <div className="flex-grow w-full h-0 min-h-0 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127628.02230012971!2d124.78448649999999!3d1.54081555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32879ef9ffb30fd3%3A0x3030bfbcaf77280!2sKota%20Manado%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1762186221995!5m2!1sid!2sid" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Card>

            {/* 🔹 KARTU 3 (DIUBAH) - INSTAGRAM POST 🔹 */}
            <Card>
              <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-6 h-full text-white flex flex-col">
                <h3 className="text-xl font-bold mb-4 flex-shrink-0">
                  Current Activity: In love with Go Youn-jung
                </h3>
                {/* 2. Buat link ke postingan IG */}
                <a 
                  href="https://www.instagram.com/p/DPJCWBLD0ZB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/" // ⬅️ Ganti dengan link postingan
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-grow w-full h-0 min-h-0 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:opacity-80"
                >
                  {/* 3. Tampilkan screenshot di sini */}
                  <img 
                    src={igPostImage} 
                    alt="Postingan Instagram Go Youn-jung"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </Card>
          </CardSwap>
        </div>

      </div>
    </div>
  );
};

export default About;
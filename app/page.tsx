"use client";

import { useState, useEffect } from "react";
import { Instagram, Music2, Play, Pause } from "lucide-react";

export default function Home() {
  const heroes = [
    { src: "/1.jpg", caption: "Soft heart 💗" },
    { src: "/2.jpg", caption: "Main character ✨" },
    { src: "/3.jpg", caption: "Lowkey but sweet" },
    { src: "/4.jpg", caption: "Cute but chaos 😆" },
    { src: "/5.jpg", caption: "Sweet & shy" },
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel ganti foto tiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroes.length]);

  const currentHero = heroes[index];

  // Musik auto-play
  useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.7;
      audio.play().catch(() => { });
    }
  }, []);

  return (
    // LAYER PARALLAX BACKGROUND
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-[url('/bg.jpg')]">
      {/* OVERLAY + KONTEN */}
      <div className="min-h-screen px-4 py-6 md:px-10 md:py-8 flex flex-col gap-4 bg-black/20 text-white">

        {/* ROW ATAS */}
        <div className="flex flex-col font-mono md:flex-row items-start justify-between gap-4 md:gap-8">

          {/* Nickname */}
          <div className="w-full md:w-1/3 md:p-5 bg-white/5 backdrop-blur-md rounded-xl p-4 flex gap-4">
            <img
              src="/pp.jpg"
              alt="Profile"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
            />

            <div>
              <h2 className="text-lg font-bold mt-2 md:mt-4">Lisa Ramadhini</h2>
              <p className="text-sm text-gray-300 mt-1">
                A.K.A diniii
              </p>
            </div>
          </div>
        </div>

        {/* MY PROFIL + CAROUSEL */}
        <div className="flex flex-row font-mono justify-between items-start gap-3 md:gap-8 md:-mt-4">

          {/* MY PROFIL */}
          <div className="w-1/2 md:w-6/12 mt-0 p-2 md:p-6 text-left">
            <div className="w-full flex justify-start mt-2 md:mt-10">
              <div>
                <div className="h-[2px] bg-white mb-1" />
                <h1 className="text-base md:text-3xl font-bold inline-block">
                  MY PROFIL
                </h1>
                <div className="h-[2px] bg-white mt-1" />
              </div>
            </div>

            <div className="text-[10px] bg-transparent font-bold md:text-sm mt-3 text-gray-300 text-start md:ml-2 space-y-1 leading-tight">
              <h2>= Lisa Ramadhini</h2>
              <h2>= Bandung</h2>
              <h2>= 13-01-2005</h2>
              <h2>= UIN Bandung</h2>
            </div>

            {/* MUSIC PLAYER */}
            <div className="flex justify-start mt-5 ">
              <button
                onClick={() => {
                  const audio = document.getElementById("bg-music") as HTMLAudioElement;
                  if (audio.paused) {
                    audio.play();
                    setIsPlaying(true);
                  } else {
                    audio.pause();
                    setIsPlaying(false);
                  }
                }}
                className="p-2 md:p-3 bg-white/30 border border-white rounded-full hover:bg-white/40 transition flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause size={20} className="text-white" />
                ) : (
                  <Play size={20} className="text-white" />
                )}
              </button>

              <audio id="bg-music" src="/music.mp3" autoPlay loop />
              <h1 className="text-lg font-mono ml-3 mt-2">Music</h1>
            </div>
          </div>

          {/* CAROUSEL / FAV FOTO */}
          <div className="w-1/2 md:w-6/12 mt-0 font-mono p-2 md:p-6 bg-black/30 rounded-xl p-4 text-center">
            <div className="flex justify-center mb-2 md:mb-5">
              <h1 className="text-sm md:text-xl font-semibold">FAV FOTO</h1>
            </div>

            <img
              src={currentHero.src}
              alt="Favorite"
              className="w-24 h-24 md:w-64 md:h-64 mx-auto rounded-xl object-cover transition-all duration-500"
            />

            <h2 className="text-xs md:text-lg font-bold mt-2 md:mt-3">
              {currentHero.caption}
            </h2>
          </div>
        </div>

        {/* ROLE / ZODIAK */}
        <div className="w-full p-4 md:p-5 flex flex-col gap-3">

          {/* FOTO + TITLE (TENGAH) */}
          <div className="flex items-center justify-center gap-4">
            <img
              src="/logo.jpg"
              alt="Virgo Icon"
              className="w-8 h-8 md:w-24 md:h-24 object-cover rounded-full"
            />

            <h2 className="text-lg font-mono font-bold">Virgo</h2>
          </div>

          {/* TEKS DI BAWAH */}
          <p className="text-sm text-gray-300 font-mono bg-black/30 rounded-xl p-4 text-justify leading-relaxed">
            Virgo tapi versi lembut, detail, tapi tetep gemes. Kelihatan cool,
            tapi aslinya gampang kepikiran dan overthinking dikit, classic soft
            Virgo vibes ✨
          </p>
        </div>

        {/* GARIS PEMISAH + FOOTER */}
        {/* FOOTER */}
        <div className="w-full border-t border-white/30 mt-4 pt-3">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4">

            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:scale-105 transition"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center
        bg-black "
              >
                <Music2 size={18} color="white" />
              </div>
              <span className="text-xs font-medium">Saarhmdn</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:scale-105 transition"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center
        bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
              >
                <Instagram size={18} color="white" />
              </div>
              <span className="text-xs font-medium">saa_rhmdn</span>
            </a>

          </div>
        </div>



      </div>
    </div>
  );
}

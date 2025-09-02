import React, { useState, useRef } from "react";
import HeroUdin from "../Components/HeroUdin";
import Fitur from "../Components/About";
import About from "../Components/Fitur";
import Footer from "../Components/Footer";
import CamingSon from "./ComingSon";
import Navbar from "../Components/Navbar";
import MerchantBisnis from "../Components/merchantBisnis";
import Regulasi from "../Components/Regulasi";
import Satuan from "../Components/About/Satuan";
import JenisGerai from "../Components/JenisGerai";
import ProgramKerja from "../Components/Program/program";
import Gallery from "../Components/galeri/galeri";
import ChatWidget from "../Components/ChatWidget/chatwidget";
import SoundPlayer from "../Components/sound/sound";

const HEADER_HEIGHT = 96;
const LandingPageUdin: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showComingSon, setShowComingSon] = useState(false);

  const berandaRef = useRef<HTMLDivElement>(null);
  const fiturRef = useRef<HTMLDivElement>(null);
  const visimisiRef = useRef<HTMLDivElement>(null);
  const tentangKamiRef = useRef<HTMLDivElement>(null);
  const regulasiRef = useRef<HTMLDivElement>(null);
  const jenisGeraiRef = useRef<HTMLDivElement>(null);
  const bantuanRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const MerchantBisnisRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = (page: string) => {
    if (page === "Merchant Bisnis") {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setCurrentPage(page);
    setShowComingSon(page === "Download");

    setTimeout(() => {
      const targetRef = {
        Beranda: berandaRef,
        "Tentang Kami": fiturRef,
        Issue: jenisGeraiRef,
        Kegiatan: tentangKamiRef,
        "Jadwal Ibadah": regulasiRef,
        Bantuan: bantuanRef,
        Galeri: galleryRef,
        Persembahan: programRef,
        Kontak: kontakRef,
      }[page];

      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop - HEADER_HEIGHT,
          behavior: "smooth",
        });
      }
    }, 100);

    setIsMenuOpen(false);
  };

  return (
    <>
      <section className="font-signika max-w-[1440px] mx-auto ">
        <div className="fixed top-0 left-0 w-full z-40 bg-white">
          <Navbar currentPage={currentPage} isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} setIsMenuOpen={setIsMenuOpen} />
        </div>

        <section className="pt-[80px] grid grid-cols-1">
          {showComingSon ? (
            <CamingSon />
          ) : currentPage === "Merchant Bisnis" ? (
            <div ref={MerchantBisnisRef}>
              <MerchantBisnis />
            </div>
          ) : (
            <>
              <div ref={berandaRef}>
                <HeroUdin handleMenuClick={handleMenuClick} />
              </div>
              <div ref={fiturRef}>
                <Fitur />
              </div>
              <div ref={visimisiRef}>
                <Satuan />
              </div>
              <div ref={jenisGeraiRef}>
                <JenisGerai />
              </div>

              <div className="mt-8" ref={regulasiRef}>
                <Regulasi />
              </div>

              {/* <div ref={tentangKamiRef}>
                <About />
              </div> */}
              <div ref={galleryRef}>
                <Gallery />
              </div>
              <div ref={programRef}>
                <ProgramKerja />
              </div>
              <div ref={kontakRef}>
                <Footer handleMenuClick={handleMenuClick} />
              </div>
            </>
          )}
        </section>
      </section>

      <div className="-mt-10">
        <SoundPlayer />
      </div>

      <ChatWidget />
    </>
  );
};

export default LandingPageUdin;

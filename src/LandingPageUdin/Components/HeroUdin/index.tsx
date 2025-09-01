import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleMenuClick: (page: string) => void;
}

const HeroUdin: React.FC<NavbarProps> = ({ handleMenuClick }) => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white -mt-20">
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        alt="Video Background"
        src="/images/hero.jpg" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center mt-6">
        <div className="flex justify-center mb-7 mt-2">
          <img src="/images/logo-gereja.svg" className="w-48 h-44 " alt="" />
        </div>
        <h1 className="text-[29px] md:text-5xl  font-bold max-w-4xl font-edu ">
          GBI <span className="text-[#FFB4B4]">MP3</span>
        </h1>

        <p className=" max-w-4xl mt-4 font-edu">
          "Dimana dua atau tiga orang berkumpul dalam nama-Ku, Aku hadir di tengah-tengah mereka" <br /> - Matius 18:20
        </p>

        <div className="relative inline-flex items-center justify-center mt-10">
          {/* Pulse Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#cfa84d] opacity-75 animate-pulseRing"></span>

          {/* Actual Button */}
          <Link to="/jadwalibadah">
            <button className="relative bg-[#cfa84d] hover:bg-opacity-90 text-white hover:text-white font-semibold text-lg py-3 px-8 rounded-full z-10 font-roboto">Jadwal Ibadah</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroUdin;

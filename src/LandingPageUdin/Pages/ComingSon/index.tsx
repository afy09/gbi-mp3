import React from "react";
// import { BgCamingson } from "../../Assets/Images";
// import Footer from "../../Components/Footer";

const CamingSon: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white">
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        alt="Video Background"
        src="/images/sawahbgatas.jpg" // taruh video di public/videos/
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <div className="bg-black bg-opacity-50 rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <img src="/images/logo.png" className="w-16 h-16 " alt="" />
          </div>
          <h1 className="text-2xl md:text-2xl  font-semibold max-w-4xl block md:hidden">
            Masuk Ke Akun <br /> Koperasi Desa/Kelurahan <br /> Merah Putih
          </h1>

          <h1 className="text-2xl md:text-2xl  font-semibold max-w-4xl hidden md:block">
            Masuk Ke Akun Koperasi <br /> Desa/Kelurahan Merah Putih
          </h1>

          <div className="mt-8 text-start ">
            <div className="flex flex-col gap-1">
              <label className="">Alamat Email</label>
              <input type="text" placeholder="Masukan Alamat Email Anda" className="p-3 rounded-lg text-black outline-none" />
            </div>

            <div className="flex flex-col gap-1 mt-3">
              <label className="">Password</label>
              <input type="password" placeholder="Masukan Password Anda" className="p-3 rounded-lg text-black outline-none" />
            </div>
          </div>

          <button onClick={() => alert("Masuk")} className="mt-10 bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg py-3 px-8 rounded-lg">
            Masuk
          </button>
        </div>
      </div>
    </section>
  );
};

export default CamingSon;

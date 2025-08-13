import React from "react";
import "./style.css";

const Desainantarmuka = () => {
  return (
    <div className=" rounded-3xl bg-desain mx-16 mb-24 mt-24 flex items-center justify-center gap-7 px-11 py-14 text-start">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-[#FFFDFD] text-[45px] w-[450px]">
          Tansformasi Bisnis <br /> Anda Dimulai di Sini!
        </div>
        <div className="text-[20px] font-light text-[#FFFDFD] w-[420px]">Raih kemudahan dalam pengelolaan keuangan dengan dashboard e-wallet kami. Daftar sekarang dan bawa bisnis Anda ke level berikutnya</div>
        <div className="text-white border border-white bg-transparent rounded-full px-7 py-2 w-[170px] cursor-pointer">Uji Coba Gratis</div>
      </div>

      <div>
        <img className="" src="/images/all-dasbords.png" alt="" />
      </div>
    </div>
  );
};

export default Desainantarmuka;

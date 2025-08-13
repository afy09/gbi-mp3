import React from "react";
import "./style.css";

const Desainantarmuka = () => {
  return (
    <div className=" rounded-3xl bg-desain mx-16 mb-24 flex items-center justify-center gap-7 px-16 py-20 text-start">
      <div className="flex flex-col gap-8">
        <div className="font-bold text-[#FFFDFD] text-[45px]">
          Desain antarmuka <br /> yang Intuitif
        </div>
        <div className="text-[20px] font-light text-[#FFFDFD] w-[400px] text-center">
          Fitur transaksi real-time memungkinkan memantau setiap transaksi secara langsung.Pengalaman ini sangat meningkatkan produktivitas dan memungkinkan bisnis Anda untuk berfokus pada pertumbuhan
        </div>
      </div>

      <div>
        <img className="" src="/images/img-laptop.png" alt="" />
      </div>
    </div>
  );
};

export default Desainantarmuka;

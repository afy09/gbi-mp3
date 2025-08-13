import React from "react";
import { list } from "../../image/icon";

const HeroPage = () => {
  return (
    <div className="mt-10">
      <div className="text-center md:text-[55px] xl:text-[65px]">
        Kelola Bisnis dengan <span className="text-[#f03524] font-bold">mudah,</span>
      </div>
      <div className="text-center md:text-[55px] xl:text-[65px] -mt-7">
        <span className="text-[#F03524] font-bold">aman,</span> dan <span className="text-[#F03524] font-bold">terintegrasi</span>
      </div>
      <div className="md:text-[20px] xl:text-[30px] font-thin text-[#181818] text-center">
        Mulai kelola transaksi, pantau pengeluaran, dan tingkatkan <br /> efisiensi bisnis Anda dalam satu platform
      </div>
      <div className="flex justify-center mt-6">{list()}</div>
    </div>
  );
};

export default HeroPage;

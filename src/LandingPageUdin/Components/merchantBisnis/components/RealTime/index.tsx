import React from "react";

const RealTime = () => {
  return (
    <div className="flex gap-14 justify-center mx-16">
      <div className="flex flex-col gap-7">
        <div>
          <img src="/images/img-grafik.png" alt="" />
        </div>
        <div className="text-start">
          <h1 className="text-[#181818] text-[48px] mb-2 font-bold">Laporan Keuangan Detail</h1>
          <p className="text-[#646464] text-[24px]">
            Fitur transaksi real-time memungkinkan memantau setiap transaksi secara langsung. Pengalaman ini sangat meningkatkan produktivitas dan memungkinkan bisnis Anda untuk berfokus pada pertumbuhan
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-7">
        <div className="text-start">
          <h1 className="text-[#181818] text-[48px] mb-2 font-bold">Transaksi Real-Time</h1>
          <p className="text-[#646464] text-[24px]">
            Fitur transaksi real-time memungkinkan memantau setiap transaksi secara langsung. Pengalaman ini sangat meningkatkan produktivitas dan memungkinkan bisnis Anda untuk berfokus pada pertumbuhan
          </p>
        </div>

        <div className="flex justify-center">
          <img src="/images/img-donatcard.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RealTime;

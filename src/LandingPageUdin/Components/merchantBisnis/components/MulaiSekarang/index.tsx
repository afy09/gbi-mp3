import React from "react";

import { list3 } from "../../image/icon";
import "./style.css";
import { Link } from "react-router-dom";

const MulaiSekarang = () => {
  return (
    <>
      <div className="mx-16 my-14">
        <div>
          <div className="text-[#464646] text-[48px] text-center">
            Bergabunglah dengan <span className="text-[#F03524] font-bold">Ratusan Bisnis</span> yang <br />
            Sudah Menggunakan Kami
          </div>
          <div className="flex justify-center ms-60">{list3()}</div>
        </div>

        <div className="mt-10 mb-14 flex gap-4 justify-center font-medium">
          <Link to="https://bisnis.superdigitalapps.my.id/" target="_blank">
            <div className="bg-[#F03524] px-11 py-3 italic cursor-pointer text-white rounded-full text-[19px]">Mulai Sekarang</div>
          </Link>

          <Link to="https://bisnis.superdigitalapps.my.id/" target="_blank">
            <div className="text-[#F03524] border border-[#F03524] px-11 py-3 italic cursor-pointer rounded-full text-[19px] ">Uji Coba Gratis</div>
          </Link>
        </div>
      </div>

      <div className="mx-16 mb-16 bg-patters flex gap-10 items-center  pb-40">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-[#181818] text-xl mb-2 font-semibold">Pengelolaan Transaksi</h2>
            <p className="text-[#959595] text-xl">"Transaksi cepat dan mudah"</p>
          </div>

          <div className="text-center">
            <h2 className="text-[#181818] text-xl mb-2 font-semibold">Interasi Fleksibel</h2>
            <p className="text-[#959595] text-xl">"Sambungkan dengan berbagai platform"</p>
          </div>
        </div>

        <div>
          <img src="/images/img-laptop.png" alt="" />
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-[#181818] text-xl mb-2 font-semibold">Pengelolaan Transaksi</h2>
            <p className="text-[#959595] text-xl">"Transaksi cepat dan mudah"</p>
          </div>

          <div className="text-center">
            <h2 className="text-[#181818] text-xl mb-2 font-semibold">Interasi Fleksibel</h2>
            <p className="text-[#959595] text-xl">"Sambungkan dengan berbagai platform"</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MulaiSekarang;

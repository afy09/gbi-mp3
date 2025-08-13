import React from "react";
import HeroPage from "./components/HeroPage";
import KebutuhanBisnis from "./components/kebutuhanBisnis";
import Desainantarmuka from "./components/Desainantarmuka";
import RealTime from "./components/RealTime";
import MulaiSekarang from "./components/MulaiSekarang";
import Trans from "./components/Transformasi";
import Footer from "../Footer";

const MerchantBisnis = () => {
  return (
    <section className="font-sans">
      <div>
        <HeroPage />
      </div>
      <div>
        <KebutuhanBisnis />
      </div>
      <div>
        <Desainantarmuka />
      </div>

      <div>
        <RealTime />
      </div>

      <div>
        <MulaiSekarang />
      </div>

      <div>
        <Trans />
      </div>

      <div>
        <Footer className="bg-white" />
      </div>
    </section>
  );
};

export default MerchantBisnis;

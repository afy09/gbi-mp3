import React from "react";
import { list2 } from "../../image/icon";

const KebutuhanBisnis = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <img src="/images/img-dashbord.png" alt="" />
      </div>
      <div className="mt-20 mb-20">
        <div className="text-[45px] font-light text-center">Dashboard e-wallet yang aman dan efisien,</div>
        <div className="text-[45px] font-light -mt-3 text-center">
          dirancang untuk <span className="text-[#f03524] font-bold">kebutuhan bisnis Anda</span>
        </div>
        <div className="flex justify-center ms-56 -mt-2">{list2()}</div>
      </div>
    </div>
  );
};

export default KebutuhanBisnis;

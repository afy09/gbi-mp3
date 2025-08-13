import React from "react";

const Regulasi = () => {
  return (
    <div className="w-full mx-2 px-4 sm:px-6 lg:px-8 pb-8 ">
      <div className="border rounded-lg overflow-hidden shadow-lg me-4 lg:me-5">
        {/* Title Section */}
        <div className="bg-black2 text-white font-semibold p-4 md:p-6">
          <h2 className="text-lg md:text-xl lg:text-2xl text-center md:text-left">JADWAL IBADAH</h2>
        </div>

        {/* Regulations List */}
        <div className="bg-white p-4 md:p-6 space-y-3">
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah Umum :</span> Minggu, pukul <span className="font-bold">08.00</span>
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Sekolah Minggu : </span> Minggu, pukul <strong>10.00</strong>
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah Doa :</span> Rabu, pukul <span className="font-bold">18.00</span>
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            {" "}
            <span className="font-bold text-primary2">Pemuda Remaja :</span> Jumat, pukul <strong>19.00</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulasi;

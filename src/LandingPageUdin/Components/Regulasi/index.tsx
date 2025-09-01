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
            <span className="font-bold text-primary2">Ibadah Raya I :</span> Jam <span className="font-bold">08.00 sd 10.00</span>
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah Raya II :</span> Jam <span className="font-bold">10.30 sd 12.30 </span> (Disertai sekolah minggu dan Perjamuan Kasih makan siang)
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah III :</span> Jam <span className="font-bold">16.00 sd 18.00</span> (Disertai sekolah minggu)
          </div>

          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah WBI :</span> Jam <span className="font-bold">16.00 sd 18.00</span> setiap Sabtu minggu ke 3 (1 bulan sekali)
          </div>
          <div className="text-sm md:text-base border-b pb-4 hover:text-primary2 cursor-pointer text-justify">
            <span className="font-bold text-primary2">Ibadah Youth :</span> Jam <span className="font-bold">17.00 sd 19.00</span> setiap Sabtu minggu ke 2 (1  bulan sekali)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulasi;

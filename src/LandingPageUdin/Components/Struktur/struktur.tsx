import React from "react";

const StrukturOrganisasi = () => {
  return (
    <section className="relative flex flex-col items-center p-4 md:p-8 lg:p-12">
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Dewan Pendiri & Pembina */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-700 text-white p-4 rounded-md">
            <h3 className="font-bold mb-2">DEWAN PENDIRI</h3>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Eko Setiobudi</li>
              <li>Ahmad Nur Kholid</li>
              <li>Yudi Cahya Prawira</li>
              <li>Indra Lesmana</li>
              <li>Wawan</li>
            </ol>
          </div>
          <div className="bg-blue-700 text-white p-4 rounded-md">
            <h3 className="font-bold mb-2">DEWAN PEMBINA</h3>
            <ol className="list-decimal pl-4 space-y-1">
              <li>H. Idy Muzayyad, SH.I, M.Si</li>
              <li>Rodly Kaelani</li>
            </ol>
          </div>
        </div>

        {/* Koordinator */}
        <div className="relative flex flex-col items-center mb-8">
          <div className="bg-blue-700 text-white p-4 rounded-md">
            <h3 className="font-bold">KOORDINATOR</h3>
            <p>Eko Setiobudi</p>
          </div>
          {/* Garis ke bawah */}
          <div className="h-6 w-0.5 bg-gray-400" />
        </div>

        {/* Bendahara & Sekretaris */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white p-4 rounded-md">
              <h3 className="font-bold">BENDAHARA</h3>
              <p>Wawan</p>
            </div>
            <div className="h-6 w-0.5 bg-gray-400" />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white p-4 rounded-md text-center">
              <h3 className="font-bold">SEKRETARIS</h3>
              <p>Ahmad Nur Kholid</p>
              <h3 className="font-bold mt-2">KESEKRETARIATAN</h3>
              <p>IIS SUKARSIH</p>
            </div>
            <div className="h-6 w-0.5 bg-gray-400" />
          </div>
        </div>

        {/* Divisi */}
        <div className="relative w-full">
          {/* Horizontal Line atas Divisi */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 w-full max-w-4xl bg-gray-400" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[
              {
                title: "PUBLIKASI & PENERBITAN",
                koord: "Yudi Cahya Prawira",
                anggota: ["Wildan ST"],
              },
              {
                title: "RISET & KAJIAN",
                koord: "Indra Lesmana",
                anggota: ["Syukron Jamal"],
              },
              {
                title: "INVESTIGASI & KERJASAMA ANTAR LEMBAGA",
                koord: "Ahmad Tosari",
                anggota: ["Gilang Bayu Nugraha, SH"],
              },
              {
                title: "ADVOKASI & KONSULTASI",
                koord: "M Alfarisi, SH, M.HUM",
                anggota: ["M. Sulaeman, SH, MH", "Dan Muhammad Yudi"],
              },
            ].map((divisi, i) => (
              <div key={i} className="bg-blue-700 text-white p-4 rounded-md">
                <h3 className="font-bold mb-2">{divisi.title}</h3>
                <p>
                  <span className="font-semibold">Koord :</span> {divisi.koord}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Angg :</span> {divisi.anggota.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;

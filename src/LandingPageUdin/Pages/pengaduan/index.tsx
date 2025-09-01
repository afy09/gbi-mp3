import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { ChevronDown } from "lucide-react";

const kategoriOptions = ["Baptis", "Permohonan Doa", "Pemberkatan Nikah", "Penyerahan anak", "Ibadah Kedukaan"];

const Pengaduan = () => {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [kategori, setKategori] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [aduan, setAduan] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    return nama && noHp && email && kategori && provinsi && kota && kecamatan && kelurahan && alamat && aduan;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      nama,
      no_hp: noHp,
      email,
      kategori,
      provinsi,
      kota,
      kecamatan,
      kelurahan,
      alamat,
      aduan,
    };

    try {
      const res = await fetch("http://localhost:8000/api/pengaduan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ...` (jika perlu token)
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Pengaduan berhasil dikirim!");
        // Optional: reset form
        setNama("");
        setNoHp("");
        setEmail("");
        setKategori("");
        setProvinsi("");
        setKota("");
        setKecamatan("");
        setKelurahan("");
        setAlamat("");
        setAduan("");
      } else {
        alert("Gagal mengirim: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Mohon Maaf ,Server sedang dalam pemeliharaan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-black2 mx-auto flex justify-center min-h-screen">
        <div className="px-7 py-5 rounded-lg w-full md:mx-8 lg:mx-20">
          <Link to="/">
            <div className="flex justify-start">
              <div className="bg-white opacity-50 text-black px-3 py-3 rounded-full">
                <img src="/logo/back.png" alt="" className="w-5 h-5" />
              </div>
            </div>
          </Link>
          <h1 className="text-3xl md:text-4xl mt-8 text-center font-bold text-[#cfa84d]">
            Formulir <span className="text-white"> Pelayanan</span>
          </h1>
          <div className="text-white mb-8 text-center mt-2 text-sm">Bagi yang membutuhkan pelayanan diatas harap menghubungi sekertariat gereja Mp3 dengan mengisi formulir di bawah ini </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] font-semibold">Nama Lengkap</label>
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3" placeholder="Masukan Nama Lengkap" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] font-semibold">Nomor HP (WhatsApp)</label>
                <input type="text" value={noHp} onChange={(e) => setNoHp(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3" placeholder="Masukan Nomor" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] font-semibold">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3" placeholder="Masukan email" />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-[#cfa84d] font-semibold">Ya Saya Ingin</label>
                <div className="border border-[#cfa84d] bg-white rounded-lg text-[#cfa84d] p-3 cursor-pointer flex justify-between items-center" onClick={() => setOpen(!open)}>
                  {kategori || "Pilih Yang Ingin Dilakukan"}
                  <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
                {open && (
                  <ul className="absolute z-10 mt-24 w-full bg-white border border-[#cfa84d] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {kategoriOptions.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setKategori(item);
                          setOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-[#cfa84d] hover:text-white cursor-pointer text-[#333]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] font-semibold">Usia</label>
                <input type="text" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3" placeholder="Masukan Usia" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#cfa84d] font-semibold">Jenis Kelamin</label>
                <select value={kota} onChange={(e) => setKota(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3">
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[#cfa84d] font-semibold">Alamat</label>
                <textarea rows={3} value={alamat} onChange={(e) => setAlamat(e.target.value)} className="outline-none border border-[#cfa84d] rounded-lg text-[#cfa84d] p-3" placeholder="Masukan Alamat" />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={!isFormValid() || loading}
                className={`py-2 px-8 mt-4 rounded-lg text-white text-center transition-all ${!isFormValid() || loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#cfa84d] hover:bg-white hover:text-[#cfa84d]"}`}>
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pengaduan;

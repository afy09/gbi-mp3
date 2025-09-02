import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
const FaRegCreditCard = require("react-icons/fa").FaRegCreditCard;
const FaRegCopy = require("react-icons/fa").FaRegCopy;

const data = [
  {
    title: "Persepuluhan",
    desc: "Bentuk ketaatan yang alkitabiah, di mana kita mengembalikan 10% dari pendapatan kita kepada Tuhan sebagai tanda pengakuan atas berkat-Nya yang melimpah.",
    icon: "/logo/news.png",
    image: "/images/program3.jpeg",
  },
  {
    title: "Syukur",
    desc: "Persembahan sukarela yang diberikan sebagai ungkapan terima kasih atas berkat dan penyertaan Tuhan dalam hidup kita, baik dalam momen sukacita maupun tantangan.",
    icon: "/logo/news.png",
    image: "/images/program2.jpeg",
  },
  {
    title: "Khusus",
    desc: "Sumbangan yang diberikan untuk tujuan spesifik, seperti pembangunan gereja, kegiatan sosial, atau misi penginjilan, yang bertujuan untuk mendukung pekerjaan Tuhan secara lebih luas.",
    icon: "/logo/news.png",
    image: "/images/program1.jpeg",
  },
];

const ProgramKerja = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const norek = "7305023981";
  const norek2 = "7305023990";

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const truncateText = (text: string, index: number) => {
    if (expanded === index) return text;
    return text.length > 60 ? text.substring(0, 60) + "..." : text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(norek).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const handleCopyTwo = () => {
    navigator.clipboard.writeText(norek2).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-black2 py-10 px-10">
      <div className="text-[#cfa84d] text-xl md:text-3xl text-center font-semibold mt-0 md:mt-4 mb-6">Persembahan</div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-md overflow-hidden">
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover -z-50" />
                <div className="absolute -bottom-6 left-5 bg-white w-14 h-14  border-2 border-black2 flex items-center justify-center rounded-full shadow-lg">
                  <img src={item.icon} alt="icon" className="w-6 h-8" />
                </div>
              </div>
              <div className="bg-[#cfa84d] text-white p-5 rounded-b-md w-[95%] -mt-10 z-10">
                <h3 className="font-bold text-xl mb-3 mt-14">{item.title}</h3>
                <p className="text-sm mb-4">{truncateText(item.desc, index)}</p>
                <button onClick={() => toggleExpand(index)} className="font-semibold text-sm underline underline-offset-2">
                  {expanded === index ? "Tutup" : "Selengkapnya →"}
                </button>
                <div className="flex justify-center mt-6">
                  <button onClick={() => setShowPopup(true)} className="px-6 py-2 bg-black2 rounded-lg">
                    Persembahan
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center mt-6" />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-5 w-96 max-sm:w-[330px] text-center relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <FaRegCreditCard className="text-5xl mx-auto mb-4 text-[#144470]" />
            <div className="mb-1 flex justify-start text-sm">GBI EMPANG TIGA PERPULUHAN - BCA</div>
            <div className="flex items-center justify-between border rounded-lg px-4 py-3 mb-3">
              <span className="font-mono text-lg">{norek}</span>
              <button onClick={handleCopy} className="text-[#144470] hover:text-black">
                <FaRegCopy size={20} />
              </button>
            </div>

            <div className="mb-1 flex justify-start text-sm">GBI EMPANG TIGA DIAKONIA - BCA</div>
            <div className="flex items-center justify-between border rounded-lg px-4 py-3 mb-3">
              <span className="font-mono text-lg">{norek2}</span>
              <button onClick={handleCopyTwo} className="text-[#144470] hover:text-black">
                <FaRegCopy size={20} />
              </button>
            </div>

            {copied && <p className="text-green-600 text-sm font-medium mb-2">Berhasil disalin!</p>}
            <p className="text-gray-700 text-sm ">
              Mohon diperhatikan no rekening atas nama <br />
              <span
                className="font-bold
            ">
                GBI EMPANG TIGA PERPULUHAN /
              </span>{" "}
              <br />
              <span
                className="font-bold
            ">
                GBI EMPANG TIGA DIAKONIA
              </span>{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramKerja;

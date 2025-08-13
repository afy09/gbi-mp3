import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const fiturData = [
  {
    title: "Sekolah Minggu",
    description: "Pembinaan iman anak-anak melalui pengajaran Alkitab, nyanyian rohani, dan aktivitas kreatif yang membangun karakter Kristus sejak dini.",
    image: "/images/sekolahminggu1.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Komsel Pemuda",
    description: "Persekutuan dan pembinaan rohani bagi pemuda untuk bertumbuh dalam iman, saling menguatkan, dan melayani bersama.",
    image: "/images/gereja2.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Kelas Pemuridan",
    description: "Pengajaran Alkitab yang lebih mendalam untuk menolong jemaat menjadi murid Kristus yang berakar, bertumbuh, dan berbuah.",
    image: "/images/kelas.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Pelayanan Sosial",
    description: "Kegiatan pelayanan yang menjangkau dan membantu masyarakat yang membutuhkan melalui aksi nyata kasih Kristus.",
    image: "/images/pelayanansosial.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Baptisan & Kelas Katekisasi",
    description: "Persiapan rohani dan pengajaran dasar iman bagi jemaat yang akan dibaptis dan mengaku percaya kepada Kristus.",
    image: "/images/baptis.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
];

const Fitur = () => {
  return (
    <section className="bg-white mt-16 mb-10">
      <div className="relative px-5 xl:px-10">
        {/* Title */}
        <div className="flex gap-5 items-center mb-10">
          <h1 className="lg:text-[28px]  font-semibold text-[18px]  text-[#cfa84d] w-96">KEGIATAN GEREJA</h1>
          <div className="w-full h-[4px] bg-black2 text-black2"></div>
        </div>

        {/* Swiper Content */}
        <Swiper modules={[Navigation, Autoplay]} autoplay={{ delay: 3000, disableOnInteraction: false }}>
          {fiturData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-80 rounded-2xl object-cover shadow-lg" />
                </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black2 mb-4">{item.title}</h3>

                  <p className="text-gray-500 text-base leading-relaxed mb-8 text-justify">{item.description}</p>

                  <div className="flex  gap-2 lg:gap-5">
                    {item.cards.map((card, idx) => (
                      <div key={idx} className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group flex-1">
                        <img src={card.image} alt="tujuan" className="w-full h-28 lg:h-40 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-200 to-transparent transition-opacity group-hover:opacity-80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fitur;

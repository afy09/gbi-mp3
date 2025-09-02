import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const fiturData = [
  {
    title: "Baptis",
    description: "Baptisan Kristen Protestan adalah sakramen inisiasi yang melambangkan pembersihan dosa, kematian terhadap kehidupan lama, dan kebangkitan ke kehidupan baru bersama Kristus, serta penyambutan ke dalam persekutuan gereja.",
    description2: "Bagi yang membutuhkan pelayanan harap menghubungi sekertariat gereja Mp3. Klik disini!",
    image: "/images/baptis.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Permohonan Doa",
    description: "Permohonan doa dalam Kristen Protestan bertujuan memohon berkat, pertolongan, dan bimbingan Tuhan dalam berbagai aspek kehidupan, mulai dari masalah pribadi hingga kebutuhan jemaat dan bangsa.",
    description2: "Bagi yang membutuhkan pelayanan harap menghubungi sekertariat gereja Mp3. Klik disini!",
    image: "/images/kelas.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Pemberkatan Nikah",
    description: "Pemberkatan nikah Kristen Protestan adalah upacara sakral di gereja yang memformalkan janji pernikahan di hadapan Tuhan dan jemaat, dipimpin oleh pendeta atau gembala jemaat.",
    description2: "Bagi yang membutuhkan pelayanan harap menghubungi sekertariat gereja Mp3. Klik disini!",
    image: "/images/nikah.jpeg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Penyerahan Anak",
    description: "Penyerahan Anak Kristen Protestan adalah sebuah ibadah atau seremoni di gereja di mana orang tua menyerahkan anak mereka kepada Tuhan sebagai pengakuan bahwa anak adalah milik Tuhan.",
    description2: "Bagi yang membutuhkan pelayanan harap menghubungi sekertariat gereja Mp3. Klik disini!",
    image: "/images/anak.jpeg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
  {
    title: "Ibadah Kedukaan",
    description: "Ibadah kedukaan Kristen Protestan adalah kebaktian yang bertujuan memberikan penghiburan, dukungan, dan kekuatan rohani kepada keluarga dan pelayat yang berduka atas kehilangan orang terkasih",
    description2: "Bagi yang membutuhkan pelayanan harap menghubungi sekertariat gereja Mp3. Klik disini!",
    image: "/images/duka.jpg",
    cards: [{ image: "/images/foto1.jpg" }, { image: "/images/foto2.jpg" }, { image: "/images/foto3.jpg" }],
  },
];

const Fitur = () => {
  return (
    <section className="bg-white mt-16 mb-10">
      <div className="relative px-5 xl:px-10">
        {/* Title */}
        <div className="flex gap-5 items-center mb-10">
          <h1 className="lg:text-[24px]  font-semibold text-[18px]  text-[#cfa84d] w-96">PELAYANAN GEREJA</h1>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-black2 ">{item.title}</h3>

                  <p className="text-gray-500 text-base leading-relaxed mb-1 text-justify">{item.description}</p>
                  <Link to="/Pengaduan">
                    <p className="text-blue-600 text-sm leading-relaxed mb-4 text-justify">{item.description2}</p>
                  </Link>

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

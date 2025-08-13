import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "MOTO MP3",
    content: `Respon : Menjadi jemaat yang selalu siap menjawab panggilan Tuhan dengan tindakan nyata, serta peka terhadap kebutuhan rohani maupun jasmani orang lain. Respon yang cepat dan tulus menjadi wujud ketaatan dan kasih kita kepada Tuhan dan sesama.`,
  },
  {
    title: "MOTO MP3",
    content: `Rendah hati : Menjalani kehidupan pelayanan dengan hati yang tidak sombong, mengutamakan sikap mengasihi dan menghargai orang lain. Rendah hati berarti bersedia belajar, menerima masukan, dan menempatkan kepentingan bersama di atas kepentingan pribadi.`,
  },
  {
    title: "MOTO MP3",
    content: `Ramah : Membangun suasana hangat, bersahabat, dan terbuka terhadap siapa saja. Ramah berarti menyambut setiap orang dengan senyuman, tutur kata yang baik, dan hati yang mengasihi, sehingga kehadiran kita menjadi berkat bagi lingkungan sekitar.`,
  },
];

const GeraiSection = () => {
  return (
    <section className="relative w-full text-white">
      {/* Background */}
      <img className="absolute top-0 left-0 w-full h-full object-cover" src="/images/bg-profile.jpg" alt="" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-32 px-4 md:px-12 max-w-7xl mx-auto">
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 3000, disableOnInteraction: false }} className="w-full custom-swiper">
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/30 backdrop-blur-md text-gray-800 rounded-2xl p-8 max-w-4xl mx-auto relative">
                <h2 className="text-2xl md:text-3xl font-bold text-primary2 mb-4 text-center font-edu">{item.title}</h2>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-line font-roboto">{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GeraiSection;

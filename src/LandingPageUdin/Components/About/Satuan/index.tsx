import { useEffect, useState, useRef } from "react";

const VisiMisi = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setImageVisible(true);
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="bg-white py-6  md:mt-24 mx-4 md:mx-12 ">
      <div className="flex gap-5 items-center">
        <div className="w-full h-[4px] bg-black2 text-black2"></div>

        <h1 className="lg:text-[25px]  font-semibold text-[18px]  text-[#cfa84d] w-28">Visi Misi</h1>
      </div>

      <div className=" lg:flex gap-4 justify-center mt-8">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} bg-black2 text-white px-8 lg:px-12 py-8 rounded-lg w-full`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d] font-edu">Visi</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-left  lg:text-justify mt-5 font-roboto">
            Visi ini mencerminkan sebuah aspirasi besar dan idealisme yang ingin dicapai oleh GBI MP3 di masa depan. Konsep "Gereja Tanpa Tembok" mengisyaratkan GBI MP3 bukan sekadar sebuah bangunan fisik atau institusi yang tertutup,
            melainkan sebuah komunitas rohani yang melampaui batasan-batasan konvensional. Tembok di sini dapat diinterpretasikan sebagai batasan sosial, ekonomi, budaya, maupun batasan rohani yang menghalangi orang untuk datang kepada
            Tuhan. Dengan visi ini, GBI MP3 berupaya menjadi gereja yang inklusif, terbuka, dan relevan di tengah masyarakat, aktif menjangkau setiap individu di manapun mereka berada.
          </p>
        </div>

        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"} bg-black2 text-white px-8 lg:px-12 py-8 rounded-lg w-full mt-4 lg:mt-0`}>
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold text-[#cfa84d] font-edu">Misi</h2>
            <img src="/images/seru.png" alt="" className="w-12 h-12" />
          </div>

          <p className="text-white text-left  lg:text-justify mt-5 font-roboto">
            - PENGGERAK: Misi ini berfokus pada transformasi internal jemaat. GBI MP3 berkomitmen untuk secara aktif menggerakkan setiap anak Tuhan agar mengalami pertumbuhan rohani yang benar. <br />
            - PENDOBRAK: Misi ini berfokus pada penghapusan hambatan. GBI MP3 bertekad untuk mendobrak setiap kendala dan rintangan yang menghambat pertumbuhan rohani anak-anak Tuhan. Kendala ini bisa datang dari berbagai sumber, baik dari
            dalam diri individu (seperti keraguan dan ketakutan) maupun dari luar (seperti tekanan sosial atau masalah hidup).
            <br />- PENEROBOS: Misi ini berfokus pada jangkauan eksternal. Sebagai "Gereja Tanpa Tembok," GBI MP3 memiliki panggilan untuk menjadi "Penerobos" dengan menjangkau jiwa-jiwa yang belum mengenal Tuhan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;

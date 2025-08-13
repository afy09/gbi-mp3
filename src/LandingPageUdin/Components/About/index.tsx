import { useRef, useEffect, useState } from "react";

const About: React.FC = () => {
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
    <section className="max-w-[1440px] mx-auto  h-auto bg-white mt-[40px]  md:mt-[100px] z-50">
      <div className="grid mb-[50px] rounded-[16px] bg-white lg:rounded-[32px] md:rounded-[10px] opacity-100 md:grid-cols-2 grid-cols-1 gap-14 items-center lg:mx-[56px] mx-[16px] md:mx-[32px]">
        <div ref={imageRef} className={`transition-all duration-1000 ease-out transform ${imageVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} lg:w-[588px] md:w-[300px] h-full`}>
          <div className="">
            <img src="/images/profile.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>
        <div ref={textRef} className={`transition-all duration-1000 ease-out transform ${textVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"} font-poppins md:text-left -pt-[20px] md:pt-0`}>
          {/* <div className="flex justify-center">
            <img src="/images/koptentang.png" alt="" className="object-contain w-40 h-40" />
          </div> */}
          <div className="flex gap-5 items-center">
            <h1 className="lg:text-[30px] font-poppins font-semibold text-[18px]  text-[#cfa84d] ">Sejarah Singkat</h1>

            <div className="w-[58%] h-[4px] bg-black2 text-primary"></div>
          </div>

          <div className="flex gap-2 items-start mt-4">
            {/* <div className="rounded-full  bg-[#144470] text-[#cfa84d] px-3 py-1">1</div> */}

            <p className="lg:text-[18px]  text-[14px] text-left  lg:text-justify ">
              <span className="rounded-full  bg-black2 text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">#</span>
              Pada tanggal 9 November 2009, sebuah babak baru dalam pelayanan dimulai dengan berdirinya GBI MP3. Di awal perjalanannya, jemaat yang hadir berjumlah sekitar 23 orang, sebuah jumlah yang sederhana namun penuh dengan semangat
              kebersamaan dan harapan. Momen bersejarah ini menandai awal dari ibadah rutin yang diadakan satu kali setiap minggu, tepatnya pada pukul 16:00 sore, di mana setiap jemaat berkumpul untuk memuji dan menyembah Tuhan.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify">
              <span className="rounded-full  bg-black2 text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">#</span>
              Struktur kepengurusan GBI MP3 saat pertama kali dibentuk mencerminkan komitmen dan kolaborasi dari para pelayan Tuhan. Kepemimpinan dipegang oleh Bapak Daniel sebagai Gembala Sidang yang menjadi nahkoda utama. Beliau
              didampingi oleh dua sosok Wakil Gembala, yaitu Bapak Eko (alm.) dan Bapak Andy, yang bersama-sama membantu mengarahkan pelayanan.
            </p>
          </div>

          <div className="flex gap-2 items-start mt-4">
            <p className="lg:text-[18px]  text-[14px]  text-left  lg:text-justify ">
              <span className="rounded-full  bg-black2 text-[#cfa84d] px-3 py-1 lg:text-[18px]  text-[18px] me-3 mb-3">#</span>
              Untuk urusan administrasi, peran vital Sekertaris dipercayakan kepada Bapak Darwin (alm.), sementara bendahara ditangani oleh Ibu Phina sebagai Bendahara. Terakhir, Bapak Jefri mengemban tugas sebagai Koordinator Ibadah,
              Susunan kepengurusan ini menjadi fondasi yang kokoh bagi GBI MP3 untuk memulai dan mengembangkan pelayanannya di tengah-tengah masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { useState } from "react";
const FaTimes = require("react-icons/fa").FaTimes;
const FaChevronLeft = require("react-icons/fa").FaChevronLeft;
const FaChevronRight = require("react-icons/fa").FaChevronRight;

const Gallery = () => {
  const allImages = [
    { src: "/images/gereja2.jpg", category: "Ibadah" },
    { src: "/images/gereja3.jpg", category: "Ibadah" },
    { src: "/images/gereja4.jpg", category: "Outing" },
    { src: "/images/gereja5.jpg", category: "Outing" },
    { src: "/images/gereja2.jpg", category: "Natal" },
    { src: "/images/gereja3.jpg", category: "Natal" },
  ];

  const categories = ["All", "Ibadah", "Outing", "Natal"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === "All" ? allImages : allImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-8 px-4 md:px-12">
      <div className="flex gap-5 items-center mb-6">
        <div className="w-full h-[4px] bg-black2 text-black2"></div>

        <h1 className="lg:text-[25px]  font-semibold text-[18px]  text-[#cfa84d] w-28">Galeri</h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border transition ${selectedCategory === cat ? "bg-[#cfa84d] text-white border-[#cfa84d]" : "bg-white text-[#cfa84d] border-[#cfa84d] hover:bg-[#cfa84d] hover:text-white"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredImages.map((img, index) => (
          <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => openLightbox(index)}>
            <img src={img.src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Tombol Close */}
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>

          {/* Tombol Prev */}
          <button onClick={showPrev} className="absolute left-4 text-white text-4xl">
            <FaChevronLeft />
          </button>

          {/* Gambar */}
          <img src={filteredImages[currentIndex]?.src} alt={`Gallery ${currentIndex + 1}`} className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg" />

          {/* Tombol Next */}
          <button onClick={showNext} className="absolute right-4 text-white text-4xl">
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

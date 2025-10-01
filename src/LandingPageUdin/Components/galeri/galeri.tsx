import { useEffect, useState } from "react";
import axios from "axios";
const FaTimes = require("react-icons/fa").FaTimes;
const FaChevronLeft = require("react-icons/fa").FaChevronLeft;
const FaChevronRight = require("react-icons/fa").FaChevronRight;

const Gallery = () => {
  const categories = ["All", "Ibadah", "Outing", "Natal"];

  const [images, setImages] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;

  // Fetch data dari BE dengan Auth
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/galeri`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            Accept: "application/json",
          },
        });

        const mapped = res.data.map((item: any) => ({
          src: item.gambar_url || "/images/no-image.png", // fallback
          category: item.kategori?.nama || "Uncategorized",
        }));

        setImages(mapped);
      } catch (err) {
        console.error("Error fetching galeri:", err);
      }
    };
    fetchData();
  }, [API_BASE_URL, API_TOKEN]);

  const filteredImages = selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

  const visibleImages = showAll ? filteredImages : filteredImages.slice(0, 6);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

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
        <h1 className="lg:text-[25px] font-semibold text-[18px] text-[#cfa84d] w-28">Galeri</h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-lg border transition ${selectedCategory === cat ? "bg-[#cfa84d] text-white border-[#cfa84d]" : "bg-white text-[#cfa84d] border-[#cfa84d] hover:bg-[#cfa84d] hover:text-white"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Galeri */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {visibleImages.map((img, index) => (
          <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg" onClick={() => openLightbox(index)}>
            <img src={img.src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Tombol Lihat Lainnya */}
      {!showAll && filteredImages.length > 6 && (
        <div className="flex justify-center mt-6">
          <button onClick={() => setShowAll(true)} className="px-6 py-2 bg-[#cfa84d] text-white rounded-lg hover:bg-[#a58239] transition">
            Lihat Lainnya
          </button>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>

          <button onClick={showPrev} className="absolute left-4 text-white text-4xl">
            <FaChevronLeft />
          </button>

          <img src={filteredImages[currentIndex]?.src} alt={`Gallery ${currentIndex + 1}`} className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg" />

          <button onClick={showNext} className="absolute right-4 text-white text-4xl">
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

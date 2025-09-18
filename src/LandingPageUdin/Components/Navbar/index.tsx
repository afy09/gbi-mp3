import { useEffect, useState } from "react";
import { IconClose, IconHamberger } from "../../Assets/Icons";

interface NavbarProps {
  currentPage: string;
  isMenuOpen: boolean;
  handleMenuClick: (page: string) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MENU_ITEMS = ["Beranda", "Tentang Kami", "Jadwal Ibadah", "Pelayanan", "Galeri", "Persembahan", "Kontak"];

const Navbar: React.FC<NavbarProps> = ({ currentPage, isMenuOpen, handleMenuClick, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMenuItems = () =>
    MENU_ITEMS.map((item) => (
      <div
        key={item}
        className={`cursor-pointer text-base px-3 py-1 rounded-full transition-all duration-300 font-ubuntu ${currentPage === item ? "text-primary font-bold text-lg" : "text-black hover:text-primary "}`}
        onClick={() => handleMenuClick(item)}>
        {item}
      </div>
    ));

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] max-w-6xl rounded-3xl px-3 py-2 lg:px-5 bg-white shadow-md flex justify-between items-center transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-transparent" : "bg-white"
      }`}>
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src="/images/logo-gereja.svg" alt="Logo" className="w-16 h-14" />
        <h1 className="text-xl font-bold font-edu text-[#FFB4B4] ">
          GBI <span className="text-black2">MP3</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-6 items-center">{renderMenuItems()}</nav>

      {/* Mobile Toggle */}
      <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
        {isMenuOpen ? <IconClose /> : <IconHamberger />}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white z-40 rounded-b-3xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="pt-24 pb-8 px-6 space-y-6 text-lg font-medium text-black">
          {MENU_ITEMS.map((item) => (
            <div key={item} onClick={() => handleMenuClick(item)} className="cursor-pointer hover:text-primary font-ubuntu">
              {item}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

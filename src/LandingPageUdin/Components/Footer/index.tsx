import React from "react";

const FaWhatsapp = require("react-icons/fa").FaWhatsapp;
const FaFacebookF = require("react-icons/fa").FaFacebookF;
const FaInstagram = require("react-icons/fa").FaInstagram;

interface FooterProps {
  className?: string;
  handleMenuClick?: (page: string) => void; // opsional kalau belum digunakan
}

const Footer: React.FC<FooterProps> = ({ className, handleMenuClick }) => {
  return (
    <>
      <footer>
        <div className="flex flex-col items-center gap-3 py-5 text-black font-poppins border-[#cfa84d] border-t-4">
          {/* Ikon Sosial Media */}
          <div className="flex gap-4">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="text-black2 hover:scale-110 transition-transform">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black2 hover:scale-110 transition-transform">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black2 hover:scale-110 transition-transform">
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Teks Copyright */}
          <p className="font-medium text-[9px] md:text-base text-center">
            © 2025 <span className="text-primary2 font-semibold">GBI MP3</span> | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

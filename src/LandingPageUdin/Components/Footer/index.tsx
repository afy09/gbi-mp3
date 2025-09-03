import React from "react";

const FaWhatsapp = require("react-icons/fa").FaWhatsapp;
const FaFacebookF = require("react-icons/fa").FaFacebookF;
const FaInstagram = require("react-icons/fa").FaInstagram;
const FaTiktok = require("react-icons/fa").FaTiktok;

interface FooterProps {
  className?: string;
  handleMenuClick?: (page: string) => void; // opsional kalau belum digunakan
}

const Footer: React.FC<FooterProps> = ({ className, handleMenuClick }) => {
  return (
    <>
      <footer className="border-[#cfa84d] border-t-4">
        <div className="md:flex justify-center gap-16 p-6">
          {/* Alamat + Sosmed */}
          <div className="w-full md:w-1/2 items-center md:items-start text-center md:text-left gap-4 block md:hidden mb-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Kontak Kami</h3>
              <a href="https://wa.me/628111016781" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base mt-2">
                08111016781
              </a>
              <p className="text-sm md:text-base mt-1">
                Gedung Tranka Lt.1, Jl. Raya Pasar Minggu <br />
                Jakarta Selatan
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.3094830923337!2d106.84381549999999!3d-6.2628873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2498660dbf3%3A0x5f43cfab982f621d!2sGedung%20Tranka!5e1!3m2!1sid!2sid!4v1756697767922!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 1 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Alamat + Sosmed */}
          <div className="w-full md:w-1/2 items-center md:items-start text-center md:text-left gap-4 hidden md:block">
            <div>
              <h3 className="font-semibold text-lg mb-1">Kontak Kami</h3>
              <a href="https://wa.me/628111016781" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base mt-2">
                08111016781
              </a>
              <p className="text-sm md:text-base mt-1">
                Gedung Tranka Lt.1, Jl. Raya Pasar Minggu <br />
                Jakarta Selatan
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 py-5 text-black font-poppins border border-t">
          {/* Ikon Sosial Media */}
          <div className="flex gap-4">
            <a href="https://wa.me/628111016781" target="_blank" rel="noopener noreferrer" className="text-black2 hover:scale-110 transition-transform">
              <FaWhatsapp size={20} />
            </a>
            <a
              href="
https://www.facebook.com/share/1UaFFVCNXC/
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black2 hover:scale-110 transition-transform">
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/gbi.mp3?igsh=ZWhqNGdkcXJka3Nv&utm_source=qr
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black2 hover:scale-110 transition-transform">
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@gbimp3?_t=ZS-8yvbb5i2Ivi&_r=1
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black2 hover:scale-110 transition-transform">
              <FaTiktok size={20} />
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

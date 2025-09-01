import React, { useState } from "react";
import { Link } from "react-router-dom";
const FaHeadset = require("react-icons/fa").FaHeadset;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div onClick={() => setIsOpen(!isOpen)} className="fixed bottom-5 right-5 bg-primary  text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50 ">
        <FaHeadset size={28} />
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden ">
          <div className="bg-primary2 text-white p-4 font-semibold">Telusuri Pusat Bantuan </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            <ul className="space-y-2 text-sm">
              <Link
                to={"/pengaduan"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <li className="p-2 border rounded cursor-pointer hover:bg-gray-100 mt-2">Baptis </li>
              </Link>
              <Link
                to={"/pengaduan"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <li className="p-2 border rounded cursor-pointer hover:bg-gray-100 mt-2">Permohonan Doa</li>
              </Link>

              <Link
                to={"/pengaduan"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <li className="p-2 border rounded cursor-pointer hover:bg-gray-100 mt-2">Pemberkatan Nikah</li>
              </Link>
              <Link
                to={"/pengaduan"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <li className="p-2 border rounded cursor-pointer hover:bg-gray-100 mt-2">Penyerahan anak</li>
              </Link>
              <Link
                to={"/pengaduan"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                <li className="p-2 border rounded cursor-pointer hover:bg-gray-100 mt-2">Ibadah Kedukaan</li>
              </Link>
            </ul>

            <h4 className="text-sm mb-2 mt-2 font-semibold">Bagi yang membutuhkan pelayanan diatas harap menghubungi sekertariat gereja Mp3</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;

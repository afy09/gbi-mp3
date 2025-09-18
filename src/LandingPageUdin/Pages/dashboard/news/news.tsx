import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token"); // ambil token dari cookie
    if (!token) {
      console.error("Token tidak ditemukan di cookie");
      return;
    }

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/galeri`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setNewsList(res.data);
      })
      .catch((err) => {
        console.error("Gagal ambil data galeri:", err.response?.data || err.message);
      });
  }, []);

  function truncateHTML(html: string, maxLength: number): string {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="overflow-x-auto mt-7">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold ">Galeri</h2>

        <div className="flex items-center gap-3">
          <Link to="/dashboard/news/tambah-kategori">
            <div className="border border-primary2 rounded-lg px-3 py-1 text-primary2">Tambah Kategori</div>
          </Link>
          <Link to="/dashboard/news/tambah">
            <div className="border border-primary2 rounded-lg px-3 py-1 text-primary2">Tambah Galeri</div>
          </Link>
        </div>
      </div>
      <table className="min-w-full border border-gray-300 text-sm md:text-base rounded-lg">
        <thead className="bg-primary2 text-white">
          <tr>
            <th className="p-2 text-left">No</th>
            <th className="p-2 text-left">Gambar</th>
            <th className="p-2 text-left">Kategori</th>
            <th className="p-2 text-left">Tanggal</th>
            <th className="p-2 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((item: any, index: any) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">
                <img src={item.gambar_url} alt={item.title} className="w-20 h-16 object-cover rounded" />
              </td>
              <td className="p-2">{item.kategori?.nama ?? "-"}</td>
              <td className="p-2">{new Date(item.created_at).toLocaleDateString()}</td>
              <td className="p-2 text-blue-600">
                <Link to={`/dashboard/news-detail/${item.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default News;

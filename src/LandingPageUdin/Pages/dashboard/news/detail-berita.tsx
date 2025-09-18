import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const IoArrowBack = require("react-icons/io5").IoArrowBack;

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState<any>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/galeri/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("RESPON DETAIL BERITA:", res.data);

        const data = res.data;
        if (!data) {
          alert("Berita tidak ditemukan.");
          return;
        }

        setNews(data);
        setCategoryId(Number(data.category_id));
      } catch (err) {
        console.error("Gagal fetch detail:", err);
        alert("Gagal memuat data berita.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/kategori`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(res.data);
      } catch (err) {
        console.error("Gagal fetch kategori:", err);
      }
    };

    fetchNews();
    fetchCategories();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("kategori_id", String(categoryId));
    if (image) formData.append("gambar", image);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/galeri/${id}?_method=PUT`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Berita berhasil diperbarui!");
      navigate("/dashboard/news");
    } catch (err) {
      alert("Gagal memperbarui berita.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Yakin ingin menghapus berita ini?")) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/galeri/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Berita berhasil dihapus.");
      navigate("/dashboard/news");
    } catch (err) {
      alert("Gagal menghapus berita.");
      console.error(err);
    }
  };

  if (loading) return <div className="p-4">Memuat detail berita...</div>;
  if (!news) return <div className="p-4 text-red-500">Berita tidak ditemukan.</div>;

  return (
    <div className="p-4 mx-3 ">
      <Link to="/dashboard/news">
        <div className="flex items-center gap-3 mb-4">
          <IoArrowBack />
          <h1 className="text-xl font-bold">Edit Galeri</h1>
        </div>
      </Link>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="flex gap-4 items-center">
          <div className="w-full">
            <label className="block font-semibold">Kategori</label>
            <select value={categoryId ?? ""} onChange={(e) => setCategoryId(Number(e.target.value))} className="w-full border px-3 py-2 rounded">
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nama}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold">Gambar (Opsional)</label>
          <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className="w-full border px-3 py-2 rounded bg-white" />
        </div>

        {news.image_url && (
          <div className="my-3">
            <p className="font-medium mb-1">Gambar Saat Ini:</p>
            <img src={news.image_url} alt={news.title} className="w-48 h-auto rounded" />
          </div>
        )}

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>

          <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Hapus Galeri
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsDetail;

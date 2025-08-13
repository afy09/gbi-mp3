import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
const IoArrowBack = require("react-icons/io5").IoArrowBack;

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modules, setModules] = useState<any>(null);

  const quillRef = useRef<ReactQuill | null>(null);

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}`);
        console.log("RESPON DETAIL BERITA:", res.data);

        const data = res.data;
        if (!data) {
          alert("Berita tidak ditemukan.");
          return;
        }

        setNews(data);
        setTitle(data.title);
        setDescription(data.description);
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
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, {
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
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category_id", String(categoryId));
    if (image) formData.append("image", image);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}?_method=PUT`, formData, {
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
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Berita berhasil dihapus.");
      navigate("/dashboard/news");
    } catch (err) {
      alert("Gagal menghapus berita.");
      console.error(err);
    }
  };

  useEffect(() => {
    const imageHandler = () => {
      const editor = quillRef.current?.getEditor();
      if (!editor) {
        console.warn("Editor belum siap!");
        return;
      }

      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("token="))
          ?.split("=")[1];

        try {
          const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/upload-description-image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });

          const range = editor.getSelection();
          if (range) {
            editor.insertEmbed(range.index, "image", res.data.url);
          }
        } catch (err) {
          console.error("Upload gagal:", err);
        }
      };
    };

    // Set modules setelah komponen mount
    setModules({
      toolbar: {
        container: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "strike"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"], ["clean"]],
        handlers: {
          image: imageHandler,
        },
      },
    });
  }, []);

  const formats = ["header", "bold", "italic", "underline", "strike", "list", "bullet", "link", "image"];

  const isFormValid = title && description && image && categoryId;

  if (loading) return <div className="p-4">Memuat detail berita...</div>;
  if (!news) return <div className="p-4 text-red-500">Berita tidak ditemukan.</div>;

  return (
    <div className="p-4 mx-3 ">
      <Link to="/dashboard/news">
        <div className="flex items-center gap-3 mb-4">
          <IoArrowBack />
          <h1 className="text-xl font-bold">Detail Berita</h1>
        </div>
      </Link>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="flex gap-4 items-center">
          <div className="w-full">
            <label className="block font-semibold">Judul</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
          </div>

          <div className="w-full">
            <label className="block font-semibold">Kategori</label>
            <select value={categoryId ?? ""} onChange={(e) => setCategoryId(Number(e.target.value))} className="w-full border px-3 py-2 rounded">
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold">Deskripsi</label>
          {modules && <ReactQuill ref={quillRef} theme="snow" value={description} onChange={setDescription} modules={modules} formats={formats} />}
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
            Hapus Berita
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsDetail;

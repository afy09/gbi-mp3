import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
const IoArrowBack = require("react-icons/io5").IoArrowBack;

type Category = {
  id: number;
  name: string;
};

const TambahNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modules, setModules] = useState<any>(null);

  const quillRef = useRef<ReactQuill | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Gagal ambil kategori:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category_id", String(categoryId));
    if (image) formData.append("image", image);

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Berita berhasil ditambahkan!");
      navigate("/dashboard/news");
    } catch (error) {
      console.error("Gagal submit:", error);
      alert("Gagal menambahkan berita.");
    } finally {
      setLoading(false);
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const isFormValid = title && description && image && categoryId;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 border rounded shadow-sm bg-white">
      <Link to="/dashboard/news">
        <div className="flex items-center gap-3 mb-4">
          <IoArrowBack />
          <h1 className="text-xl font-bold">Tambah Berita</h1>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Judul</label>
          <input type="text" className="w-full border px-3 py-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Kategori</label>
          <div className="relative">
            <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full border px-3 py-2 rounded text-left bg-white">
              {categoryId ? categories.find((cat) => cat.id === categoryId)?.name : "Pilih kategori"}
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-1 w-full bg-white border rounded shadow">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => {
                      setCategoryId(cat.id);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {cat.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Deskripsi</label>
          {modules && <ReactQuill ref={quillRef} theme="snow" value={description} onChange={setDescription} modules={modules} formats={formats} />}
        </div>

        <div className="mt-4">
          <label className="block mb-1 font-semibold">Gambar</label>
          <input type="file" className="w-full border px-3 py-2 rounded bg-white" onChange={handleImageChange} />
        </div>

        <button type="submit" disabled={!isFormValid || loading} className={`w-full py-2 rounded text-white mt-4 ${isFormValid && !loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
          {loading ? "Mengirim..." : "Tambah Berita"}
        </button>
      </form>
    </div>
  );
};

export default TambahNews;

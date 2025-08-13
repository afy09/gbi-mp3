import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const IoArrowBack = require("react-icons/io5").IoArrowBack;

type Category = {
  id: number;
  name: string;
  created_at: string;
};

const TambahKategori = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState<Category | null>(null);
  const [editName, setEditName] = useState("");

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(res.data);
    } catch (err) {
      console.error("Gagal ambil kategori:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, { name }, { headers: { Authorization: `Bearer ${token}` } });
      alert("Kategori berhasil ditambahkan!");
      setName("");
      fetchCategories();
    } catch (err) {
      console.error("Gagal menambahkan kategori:", err);
      alert("Gagal menambahkan kategori.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Yakin ingin menghapus kategori ini?")) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCategories();
    } catch (err) {
      console.error("Gagal menghapus kategori:", err);
    }
  };

  const openEditModal = (category: Category) => {
    setEditCategory(category);
    setEditName(category.name);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!editCategory) return;
    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${editCategory.id}`, { name: editName }, { headers: { Authorization: `Bearer ${token}` } });
      setEditModalOpen(false);
      setEditCategory(null);
      fetchCategories();
    } catch (err) {
      console.error("Gagal mengedit kategori:", err);
    }
  };

  return (
    <div className="mt-4 p-4">
      <Link to="/dashboard/news">
        <div className="flex items-center gap-3 mb-4">
          <IoArrowBack />
          <h1 className="text-xl font-bold">Tambah Kategori</h1>
        </div>
      </Link>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block mb-1 font-semibold">Nama Kategori</label>
          <input type="text" className="w-full border px-3 py-2 rounded" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="flex justify-end">
          <button type="submit" disabled={!name || loading} className={`py-2 px-7 rounded text-white ${name && !loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}>
            {loading ? "Mengirim..." : "Tambah Kategori"}
          </button>
        </div>
      </form>

      {/* TABEL */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">No</th>
              <th className="p-2 border">Nama Kategori</th>
              <th className="p-2 border">Tanggal Dibuat</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id} className="text-center">
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{cat.name}</td>
                <td className="border p-2">{new Date(cat.created_at).toLocaleDateString()}</td>
                <td className="border p-2 space-x-2">
                  <button onClick={() => openEditModal(cat)} className="bg-yellow-400 px-3 py-1 rounded text-white">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(cat.id)} className="bg-red-500 px-3 py-1 rounded text-white">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL EDIT */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit Kategori</h2>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="w-full border px-3 py-2 rounded mb-4" />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setEditModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">
                Batal
              </button>
              <button onClick={handleEditSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TambahKategori;

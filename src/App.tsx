import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageUdin from "./LandingPageUdin/Pages";
import Pengaduan from "./LandingPageUdin/Pages/pengaduan";
import Login from "./LandingPageUdin/Pages/auth/login";
import News from "./LandingPageUdin/Pages/dashboard/news/news";
import NewsDetail from "./LandingPageUdin/Pages/dashboard/news/detail-berita";
import RouteGuard from "./utils/RouteGuard";
import DashboardLayout from "./LandingPageUdin/Pages/dashboard/page-dashboard";
import TambahNews from "./LandingPageUdin/Pages/dashboard/news/tambah-news";
import TambahKategori from "./LandingPageUdin/Pages/dashboard/news/tambahkategori";
import DetailEditorial from "./LandingPageUdin/Components/Editorial/detaileditorial";
import JadwalPages from "./LandingPageUdin/Pages/jadwalibadah/jadwalpages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageUdin />} />
        <Route path="/jadwalibadah" element={<JadwalPages />} />
        <Route path="/pengaduan" element={<Pengaduan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail-editorial/:id" element={<DetailEditorial />} />

        {/* ✅ Protected dashboard with layout and nested routes */}
        <Route
          path="/dashboard"
          element={
            <RouteGuard>
              <DashboardLayout />
            </RouteGuard>
          }>
          <Route path="news" element={<News />} />
          <Route path="news-detail/:id" element={<NewsDetail />} />
          <Route path="news/tambah" element={<TambahNews />} />
          <Route path="news/tambah-kategori" element={<TambahKategori />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

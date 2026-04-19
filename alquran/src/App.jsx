// Import hook useState dari React
import { useState } from "react";

// Import komponen SurahList
import SurahList from "./components/SurahList";

// Import komponen DetailSurah
import DetailSurah from "./components/DetailSurah";

// Import komponen Tafsir
import Tafsir from "./components/Tafsir";

// Import CSS untuk styling
import "./App.css";

// Komponen utama aplikasi
export default function App() {
  // State untuk ID surah yang dipilih
  const [selectedSurah, setSelectedSurah] = useState(null);

  // State untuk halaman aktif ("list", "detail", "tafsir")
  const [page, setPage] = useState("list");

  // Return JSX
  return (
    // Container utama
    <div className="container">
      <h1>My Quran</h1>
      {page === "list" && (
        <SurahList
          // Fungsi saat surah dipilih: set surah dan pindah ke detail
          onSelect={(id) => {
            setSelectedSurah(id);
            setPage("detail");
          }}
        />
      )}

      {page === "detail" && (
        <DetailSurah
          // ID surah yang dipilih
          surah={selectedSurah}
          // Fungsi kembali ke list
          goBack={() => setPage("list")}
          // Fungsi buka tafsir
          openTafsir={() => setPage("tafsir")}
        />
      )}

      {page === "tafsir" && (
        <Tafsir
          // ID surah yang dipilih
          surah={selectedSurah}
          // Fungsi kembali ke detail
          goBack={() => setPage("detail")}
        />
      )}
    </div>
  );
}
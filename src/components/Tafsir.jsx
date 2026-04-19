// Import React hooks
import { useEffect, useState } from "react";

// Komponen untuk halaman tafsir
export default function Tafsir({ surah, goBack }) {
  const [data, setData] = useState(null);

  // Fetch data tafsir
  useEffect(() => {
    fetch(`https://equran.id/api/v2/tafsir/${surah}`)
      .then(res => res.json())
      .then(result => setData(result.data));
  }, [surah]);

  // Loading state
  if (!data) return <p className="loading">Loading tafsir...</p>;

  return (
    <div>
      {/* Container untuk tombol center */}
      <div className="button-container">
        <button className="back" onClick={goBack}>Back</button>
      </div>

      {/* Header tafsir */}
      <div className="tafsir-header">
        <h2>{data.namaLatin}</h2>
        <p>{data.arti}</p>
        <span>{data.jumlahAyat} Ayat</span>
      </div>

      {/* List tafsir */}
      <div className="tafsir-container">
        {data.tafsir.map((t) => (
          <div key={t.ayat} className="tafsir-item">
            <div className="tafsir-number">{t.ayat}</div>
            <div className="tafsir-content">
              <p>{t.teks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
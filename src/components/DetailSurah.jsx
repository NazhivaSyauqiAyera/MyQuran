// Import React hooks
import { useEffect, useState } from "react";

// Komponen untuk halaman detail surah
export default function DetailSurah({ surah, goBack, openTafsir }) {
  const [data, setData] = useState(null);

  // Fetch data surah saat komponen load
  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${surah}`)
      .then(res => res.json())
      .then(result => setData(result.data));
  }, [surah]);

  // Loading state
  if (!data) return <p className="loading">Loading...</p>;

  return (
    <div>
      {/* Container untuk tombol center */}
      <div className="button-container">
        <button className="back" onClick={goBack}>Back</button>
        <button className="tafsir-nav" onClick={openTafsir}>Lihat Tafsir</button>
      </div>

      {/* Header surah */}
      <div className="header">
        <h2>{data.namaLatin}</h2>
        <p>{data.arti}</p>
        
        {/* Deskripsi surah jika ada, strip HTML */}
        {data.deskripsi && <p className="surah-desc">{data.deskripsi.replace(/<[^>]*>/g, '')}</p>}
        
        {/* Audio untuk seluruh surah */}
        <audio controls className="audio">
          <source src={data.audioFull["5"]} type="audio/mpeg" />
        </audio>
      </div>

      {/* List ayat */}
      {data.ayat.map(a => (
        <div key={a.nomorAyat} className="ayah-card">
          <div className="ayah-header">
            <span>Ayat {a.nomorAyat}</span>
          </div>
          <p className="arab">{a.teksArab}</p>
          <p className="latin">{a.teksLatin}</p>
          <p className="indo">{a.teksIndonesia}</p>

          {/* Audio per ayat */}
          <audio controls className="audio">
            <source src={a.audio["05"]} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}
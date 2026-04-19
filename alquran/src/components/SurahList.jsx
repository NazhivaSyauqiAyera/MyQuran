import { useEffect, useState } from "react";

export default function SurahList({ onSelect }) {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then(res => res.json())
      .then(data => setSurahs(data.data))
  }, []);

  const filtered = surahs.filter(s =>
    s.namaLatin.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="search"
        placeholder="🔍 Cari surah..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(s => (
          <div
            key={s.nomor}
            className="card"
            onClick={() => onSelect(s.nomor)}
          >
            <h3>{s.nomor}. {s.namaLatin}</h3>
            <p>{s.arti}</p>
            <span>{s.jumlahAyat} Ayat</span>
          </div>
        ))}
      </div>
    </div>
  );
}
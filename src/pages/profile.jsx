import profile from "../assets/profile.jpg";

export default function Profile({ goProfile }) {
  return (
    <div className="profile-container">
      
      <div className="profile-card">

        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />

        <h3 className="profile-name">
          Nazhiva Syauqi Ayera
        </h3>

        <p className="profile-desc">
          Mahasiswa Teknik Informatika
        </p>

        <button className="profile-btn" onClick={goProfile}>
          Kembali
        </button>

      </div>

    </div>
  );
}
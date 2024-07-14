import React from "react";
import Header from "./Header";
import profil from "../assets/profil.jpeg";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header judul="About" />
      <div className="ml-10 flex justify-start gap-5 border-2 p-4 border-zinc-300 w-fit rounded-lg bg-grey">
        <img src={profil} className="w-[10rem] rounded-lg" />
        <table className="font-serif">
          <tr>
            <td>Aplikasi ini dibuat oleh :</td>
          </tr>
          <tr>
            <td>Nama</td>
            <td>: Syahid Qoim Bil Qisthi</td>
          </tr>
          <tr>
            <td>Prodi</td>
            <td>: D3 TI PSDKU Lumajang</td>
          </tr>
          <tr>
            <td>NIM</td>
            <td>: 2131740050</td>
          </tr>
          <tr>
            <td>Tanggal</td>
            <td>: 14 Juli 2024</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default About;

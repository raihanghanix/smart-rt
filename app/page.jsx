"use client";

import DaftarWarga from "@/components/DaftarWarga";
import Dashboard from "@/components/Dashboard";
import GudangRT from "@/components/GudangRT";
import KasRT from "@/components/KasRT";
import Pengajuan from "@/components/Pengajuan";
import Profile from "@/components/Profile";
import SuratWarga from "@/components/SuratWarga";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [currUser, setCurrUser] = useState("");
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState("Dashboard");
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const userCookie = Cookies.get("user");
      if (!userCookie) return router.replace("/login");
      const res = await fetch("/api", {
        method: "POST",
        body: userCookie,
      });
      const resData = await res.json();
      if (res.status !== 200) return alert(resData.message);
      return setCurrUser(resData?.data);
    }
    getUserData();
  }, [router]);

  return (
    <main className="w-screen h-screen p-4">
      <div className="w-full h-full flex gap-4">
        <div className="bg-primary p-8 text-white rounded-md shadow-md w-[312px] flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-center items-center justify-center">
            <p className="p-4 bg-white rounded-full text-black aspect-square w-32 flex items-center justify-center font-bold text-2xl">
              {currUser?.nama?.split(" ")[0][0]}
              {currUser?.nama?.split(" ")[0][1]}
            </p>
            <p className="line-clamp-1 font-bold text-lg text-center">
              {currUser?.nama}
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-4 flex-1">
            <button
              className={`text-start py-2 hover:text-black hover:font-bold ${
                selected === 0 ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => {
                setSelected(0);
                setTitle("Dashboard");
              }}
            >
              <i className="fa-solid fa-chart-line mr-4 w-4"></i>
              Dashboard
            </button>
            <button
              className={`text-start py-2 hover:text-black hover:font-bold ${
                selected === 1 ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => {
                setSelected(1);
                setTitle("Permohonan Surat");
              }}
            >
              <i className="fa-solid fa-file mr-4 w-4"></i>
              Permohonan Surat
            </button>
            <button
              className={`text-start py-2 hover:text-black hover:font-bold ${
                selected === 2 ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => {
                setSelected(2);
                setTitle("Data Warga");
              }}
            >
              <i className="fa-solid fa-users mr-4 w-4"></i>
              Data Warga
            </button>
            <button
              className={`text-start py-2 hover:text-black hover:font-bold ${
                selected === 6 ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => {
                setSelected(6);
                setTitle("Status Pengajuan");
              }}
            >
              <i className="fa-solid fa-user mr-4 w-4"></i>
              Status Pengajuan
            </button>
            {currUser?.type === "admin" && (
              <>
                <button
                  className={`text-start py-2 hover:text-black hover:font-bold ${
                    selected === 3 ? "text-black font-bold" : "text-white"
                  }`}
                  onClick={() => {
                    setSelected(3);
                    setTitle("Kas RT");
                  }}
                >
                  <i className="fa-solid fa-money-bill-wave mr-4 w-4"></i>
                  Kas RT
                </button>
                <button
                  className={`text-start py-2 hover:text-black hover:font-bold ${
                    selected === 4 ? "text-black font-bold" : "text-white"
                  }`}
                  onClick={() => {
                    setSelected(4);
                    setTitle("Gudang RT");
                  }}
                >
                  <i className="fa-solid fa-warehouse mr-4 w-4"></i>
                  Gudang RT
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <button
              className={`text-start py-2 hover:text-black hover:font-bold ${
                selected === 5 ? "text-black font-bold" : "text-white"
              }`}
              onClick={() => {
                setSelected(5);
                setTitle("Profil");
              }}
            >
              <i className="fa-solid fa-user mr-4 w-4"></i>
              Profil
            </button>
            <button
              className="text-start hover:text-black hover:font-bold"
              onClick={() => {
                Cookies.remove("user");
                router.replace("/login");
              }}
            >
              <i className="fa-solid fa-right-from-bracket mr-4 w-4"></i>
              Keluar
            </button>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-8 rounded-md shadow-md bg-white w-full">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl">{title}</h1>
            <hr className="outline-neutral-500" />
          </div>
          <div className="flex gap-4 flex-wrap">
            {selected === 0 && <Dashboard data={currUser} />}
            {selected === 1 && <Pengajuan data={currUser} />}
            {selected === 2 && <DaftarWarga data={currUser} />}
            {selected === 3 && <KasRT data={currUser} />}
            {selected === 4 && <GudangRT data={currUser} />}
            {selected === 5 && <Profile data={currUser} />}
            {selected === 6 && <SuratWarga data={currUser} />}
          </div>
        </div>
      </div>
    </main>
  );
}

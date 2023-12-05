"use client";

import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ktp, setKtp] = useState("");
  const [kk, setKk] = useState("");
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();

    if (
      (ktp.type !== "image/jpg" &&
        ktp.type !== "image/jpeg" &&
        ktp.type !== "image/png" &&
        ktp.type !== "application/pdf") ||
      (kk.type !== "image/jpg" &&
        kk.type !== "image/jpeg" &&
        kk.type !== "image/png" &&
        kk.type !== "application/pdf")
    ) {
      return alert("KTP dan KK harus berformat PDF / JPG / JPEG / PNG!");
    }
    if (ktp.size >= 300000 || kk.size >= 300000) {
      return alert("KTP dan KK harus kurang dari 300KB!");
    }

    const data = new FormData();
    data.set("nik", nik);
    data.set("email", email);
    data.set("password", password);
    data.set("ktp", ktp);
    data.set("kk", kk);

    const res = await fetch("/api/register", {
      method: "POST",
      body: data,
    });
    const resData = await res.json();

    if (res.status !== 200) return alert(resData.message);

    Cookies.set("user", nik, { expires: 7 });
    return router.replace("/");
  }

  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="p-8 rounded-md shadow-md bg-white flex flex-col gap-8 items-center">
          <Image
            className="w-auto h-auto"
            src="/lambang.png"
            alt="Lambang Kota Jambi"
            width={128}
            height={128}
            priority={true}
          />
          <h1 className="font-bold text-3xl text-center">Daftar</h1>
          <form
            onSubmit={(e) => handleRegister(e)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="nik"
                placeholder="NIK"
                minLength={16}
                maxLength={16}
                required
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="p-4 border border-neutral-500 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 border border-neutral-500 rounded-md"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 border border-neutral-500 rounded-md"
              />
              <div className="flex gap-4 items-center">
                <p className="w-8">KTP</p>
                <input
                  type="file"
                  name="ktp"
                  required
                  onChange={(e) => setKtp(e.target.files[0])}
                  className="p-2 text-sm text-neutral-500 border border-neutral-500 rounded-md"
                />
              </div>
              <div className="flex gap-4 items-center">
                <p className="w-8">KK</p>
                <input
                  type="file"
                  name="kk"
                  required
                  onChange={(e) => setKk(e.target.files[0])}
                  className="p-2 text-sm text-neutral-500 border border-neutral-500 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-primary rounded-md text-white p-4 font-bold hover:scale-105"
              >
                Daftar
              </button>
              <Link
                href="/login"
                className="text-sm text-neutral-500 text-center underline"
              >
                Sudah punya akun? Masuk disini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

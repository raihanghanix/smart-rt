"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("email", email);
    data.set("password", password);

    const res = await fetch("/api/login", {
      method: "POST",
      body: data,
    });
    const resData = await res.json();

    if (res.status !== 200) return alert(resData.message);

    Cookies.set("user", resData?.nik, { expires: 7 });
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
          <h1 className="font-bold text-3xl text-center">Masuk</h1>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
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
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="bg-primary rounded-md text-white p-4 font-bold hover:scale-105"
              >
                Masuk
              </button>
              <Link
                href="/register"
                className="text-sm text-neutral-500 text-center underline"
              >
                Belum punya akun? Daftar disini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

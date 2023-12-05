"use client";

import { useState } from "react";

const KasRT = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [kas, setKas] = useState(0);
  const [pemasukan, setPemasukan] = useState(0);
  const [pengeluaran, setPengeluaran] = useState(0);
  const [nominal, setNominal] = useState(0);

  function handleClick() {
    if (!selectedOption)
      return alert("Mohon pilih antara pemasukan atau pengeluaran!");
    setKas((s) => Number(nominal) + Number(s));
    if (selectedOption === "pemasukan")
      setPemasukan((s) => Number(nominal) + Number(s));
    if (selectedOption === "pengeluaran")
      setPengeluaran((s) => Number(nominal) + Number(s));
    setNominal(0);
  }

  return (
    <div className="w-full h-full grid gap-8 grid-cols-3">
      <div className="flex flex-col gap-4">
        <p className="">Kas</p>
        <p className="font-bold text-lg">Rp. {kas}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="">Pemasukan</p>
        <p className="font-bold text-lg">Rp. {pemasukan}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="">Pengeluaran</p>
        <p className="font-bold text-lg">Rp. {pengeluaran}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="">Tambah Pencatatan (Rp.)</p>
        <input
          type="text"
          name="nominal"
          className="border border-black p-2 rounded-md"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
        <div className="flex gap-4">
          <p>
            <input
              className="mr-2"
              type="radio"
              value="pemasukan"
              checked={selectedOption === "pemasukan"}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            />
            Pemasukan
          </p>
          <p>
            <input
              className="mr-2"
              type="radio"
              value="pengeluaran"
              checked={selectedOption === "pengeluaran"}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            />
            Pengeluaran
          </p>
        </div>
        <button
          className="p-4 text-white font-bold rounded-md bg-primary"
          onClick={handleClick}
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

export default KasRT;

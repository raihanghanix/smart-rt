"use client";

import { useState } from "react";

const GudangRT = ({ data }) => {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [obj, setObj] = useState([
    {
      nama: "Kursi Plastik",
      status: "Bagus",
      jumlah: 20,
      keterangan: "Dipinjam oleh pak udin",
    },
  ]);

  function handleClick() {
    setObj((s) => [...s, { nama, status, jumlah, keterangan }]);
  }

  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="flex justify-start">
        <div className="flex flex-1 gap-4">
          <input
            type="text"
            name=""
            className="border border-black rounded-md p-2"
            placeholder="Nama barang"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="text"
            name=""
            className="border border-black rounded-md p-2"
            placeholder="Status barang"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            type="text"
            name=""
            className="border border-black rounded-md p-2"
            placeholder="Jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
          />
          <input
            type="text"
            name=""
            className="border border-black rounded-md p-2"
            placeholder="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-primary text-white font-bold p-4"
          onClick={handleClick}
        >
          Tambah Barang
        </button>
      </div>
      <table className="border-collapse table-auto w-full">
        <thead className="bg-neutral-500 w-full">
          <tr className="w-full text-white font-bold">
            <th>Nama Barang</th>
            <th>Kondisi</th>
            <th>Jumlah</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody className="">
          {obj.map((i, index) => (
            <tr key={index}>
              <td className="">{i.nama}</td>
              <td>{i.status}</td>
              <td>{i.jumlah}</td>
              <td>{i.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GudangRT;

"use client";

import { useState, useEffect } from "react";

const SuratWarga = ({ data }) => {
  const [pengajuan, setPengajuan] = useState([]);

  async function getData() {
    const res = await fetch("/api/pengajuan/warga", {
      method: "POST",
      body: JSON.stringify({ nama: data?.nama }),
    });
    const resData = await res.json();
    if (res.status !== 200) return alert(resData.message);
    console.log(resData);
    setPengajuan(resData.pengajuan);
  }

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="w-full h-full">
      <table className="border-collapse table-auto w-full">
        <thead className="bg-neutral-500 w-full">
          <tr className="w-full text-white font-bold">
            <th>No.</th>
            <th>Jenis Surat</th>
            <th>Nama Pemohon</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {pengajuan.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.jenis}</td>
              <td>{i.nama}</td>
              <td>
                {new Intl.DateTimeFormat("id", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                }).format(new Date(Date(i.tanggal)))}
              </td>
              <td className="flex gap-4 justify-center">
                {i.aksi === "Menunggu" && (
                  <>
                    <button
                      className="p-2 border border-success rounded-md text-green-500"
                      onClick={() => handleAccept(i.id)}
                    >
                      Terima
                    </button>
                    <button
                      className="p-2 border border-danger rounded-md text-danger"
                      onClick={() => handleReject(i.id)}
                    >
                      Tolak
                    </button>
                  </>
                )}
                {i.aksi === "Diterima" && <p>Diterima</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuratWarga;

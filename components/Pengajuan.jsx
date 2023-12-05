"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Pengajuan = ({ data }) => {
  const [input, setInput] = useState({
    nama: data?.nama,
    ttl: `${data?.tempat_lahir}, ${data?.tanggal_lahir}`,
    jenisKelamin: `${data?.jenis_kelamin}`,
    agama: `${data?.agama}`,
    alamat: `${data?.alamat}`,
    kewarganegaraan: `${data?.kewarganegaraan}`,
  });
  const [pengajuan, setPengajuan] = useState([]);

  function handleChange(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/pengajuan", {
      method: "POST",
      body: JSON.stringify(input),
    });
    const resData = await res.json();
    if (res.status !== 200) return alert(resData.message);
    console.log(resData);
  }

  function handleReset() {
    setInput({});
  }

  async function handleAccept(id) {
    const res = await fetch("/api/pengajuan/update", {
      method: "POST",
      body: JSON.stringify({ id, type: "terima" }),
    });
    return await getData();
  }
  async function handleReject(id) {
    const res = await fetch("/api/pengajuan/update", {
      method: "POST",
      body: JSON.stringify({ id, type: "tolak" }),
    });
    return await getData();
  }

  async function getData() {
    const res = await fetch("/api/pengajuan/admin", {
      method: "GET",
    });
    const resData = await res.json();
    if (res.status !== 200) return alert(resData.message);
    console.log(resData.pengajuan);
    return setPengajuan(resData.pengajuan);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data?.type === "user" && (
        <div className="flex gap-8 w-full h-full">
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/ss.jpg"
              alt="qwe"
              width={512}
              height={512}
              className="shadow-md"
            />
          </div>
          <div className="flex-1 flex justify-center items-center flex-col gap-4">
            <select name="surat" className="font-bold">
              <option value="spd">Surat Pengantar Domisili</option>
              <option value="spd">Surat Pengantar Penelitian</option>
              <option value="spd">Surat Pengantar Kematian</option>
            </select>
            <input
              type="text"
              name="nama"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Nama"
              value={input.nama}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="ttl"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Tempat Tinggal / Tanggal Lahir"
              value={input.ttl}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="jenisKelamin"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Jenis Kelamin"
              value={input.jenisKelamin}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="agama"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Agama"
              value={input.agama}
              onChange={(e) => handleChange(e)}
            />

            <input
              type="text"
              name="alamat"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Alamat Asal"
              value={input.alamat}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="kewarganegaraan"
              className="border border-black p-4 w-[80%] rounded-md"
              placeholder="Kewarganegaraan"
              value={input.kewarganegaraan}
              onChange={(e) => handleChange(e)}
            />
            <div className="flex justify-between gap-4">
              <button
                className="w-32 p-4 text-primary border border-primary font-bold rounded-md"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="w-32 p-4 bg-primary font-bold text-white rounded-md"
                onClick={handleSubmit}
              >
                Ajukan
              </button>
            </div>
          </div>
        </div>
      )}
      {data?.type === "admin" && (
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
      )}
    </>
  );
};

export default Pengajuan;

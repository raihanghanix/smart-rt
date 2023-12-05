"use client";

import { useEffect, useState } from "react";

const DaftarWarga = ({ data }) => {
  const [warga, setWarga] = useState([]);
  const [head, setHead] = useState([]);

  useEffect(() => {
    async function getWarga() {
      const res = await fetch("/api/warga", {
        method: "GET",
      });
      const resData = await res.json();
      if (res.status !== 200) return alert(resData.message);
      setHead(Object.keys(resData.data[0]));
      return setWarga(resData.data);
    }
    getWarga();
  }, []);

  return (
    <div className="w-full h-full grid gap-4 grid-cols-4">
      {warga.map((w) => (
        <div
          key={w.nik}
          className="flex flex-col gap-4 p-4 border border-neutral-500 rounded-md"
        >
          <p>{w.nik}</p>
          <p className="font-bold">{w.nama}</p>
          <div className="flex justify-end items-center gap-4">
            {data?.type === "admin" && (
              <>
                <button className="text-success">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="text-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </>
            )}
          </div>
        </div>
      ))}
      {/* <table className="border-collapse table-fixed text-sm">
        <thead>
          <tr>
            {head.map((i) => (
              <th key={i}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {warga.map((w) => (
            <tr key={w.nik} className="">
              <td>{w.nik}</td>
              <td>{w.nama}</td>
              <td>{w.tempat_lahir}</td>
              <td>{w.tanggal_lahir}</td>
              <td>{w.jenis_kelamin}</td>
              <td>{w.alamat}</td>
              <td>{w.rt}</td>
              <td>{w.rw}</td>
              <td>{w.kel_desa}</td>
              <td>{w.alamat}</td>
              <td>{w.agama}</td>
              <td>{w.status_kawin}</td>
              <td>{w.pekerjaan}</td>
              <td>{w.kewarganegaraan}</td>
              <td>{w.email}</td>
              <td>{w.password}</td>
              <td>{w.ktp}</td>
              <td>{w.kk}</td>
              <td>{w.is_registered}</td>
              <td>{w.type}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default DaftarWarga;

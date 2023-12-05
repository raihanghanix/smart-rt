const Dashboard = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 text-center  text-white bg-secondary rounded-md w-48">
        <p className="">Permohonan Surat</p>
        <p className="font-bold text-lg">0 surat</p>
      </div>
      <div className="flex flex-col gap-4 p-4 text-center  text-white bg-secondary rounded-md w-48">
        <p className="">Data Warga</p>
        <p className="font-bold text-lg">16 warga</p>
      </div>
      <div className="flex flex-col gap-4 p-4 text-center  text-white bg-secondary rounded-md w-48">
        <p className="">Kas RT</p>
        <p className="font-bold text-lg">Rp. 0</p>
      </div>
      <div className="flex flex-col gap-4 p-4 text-center  text-white bg-secondary rounded-md w-48">
        <p className="">Gudang RT</p>
        <p className="font-bold text-lg">0 barang</p>
      </div>
    </>
  );
};

export default Dashboard;

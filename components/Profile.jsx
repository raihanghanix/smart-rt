const Profile = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="p-4 bg-neutral-500 text-white">1</div>
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <p className="">NIK</p>
          <p className="font-bold text-lg">{data?.nik}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Nama</p>
          <p className="font-bold text-lg">{data?.nama}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Tempat Lahir</p>
          <p className="font-bold text-lg">{data?.tempat_lahir}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Tanggal Lahir</p>
          <p className="font-bold text-lg">{data?.tanggal_lahir}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Jenis Kelamin</p>
          <p className="font-bold text-lg">{data?.jenis_kelamin}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Alamat</p>
          <p className="font-bold text-lg">{data?.alamat}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">RT</p>
          <p className="font-bold text-lg">{data?.rt}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">RW</p>
          <p className="font-bold text-lg">{data?.rw}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Kelurhan/Desa</p>
          <p className="font-bold text-lg">{data?.kel_desa}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Kecamatan</p>
          <p className="font-bold text-lg">{data?.kecamatan}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Agama</p>
          <p className="font-bold text-lg">{data?.agama}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Status Kawin</p>
          <p className="font-bold text-lg">{data?.status_kawin}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Pekerjaan</p>
          <p className="font-bold text-lg">{data?.pekerjaan}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Kewarganegaraan</p>
          <p className="font-bold text-lg">{data?.kewarganegaraan}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Email</p>
          <p className="font-bold text-lg">{data?.email}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">Tipe</p>
          <p className="font-bold text-lg">{data?.type}</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="">KTP</p>
          <embed src={data?.ktp} className="h-full" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="">KK</p>
          <embed src={data?.kk} className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;

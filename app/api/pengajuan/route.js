import { createClient } from "@supabase/supabase-js";
export const POST = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const data = await req.json();
    const json = JSON.stringify(data);

    console.log(json);

    const { error } = await supabase
      .from("pengajuan")
      .insert({
        nama: data.nama,
        jenis: "Surat Keterangan Domisili",
        data: json,
        aksi: "Menunggu",
      });

    return new Response(JSON.stringify({ message: "Berhasil!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

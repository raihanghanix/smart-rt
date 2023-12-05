import { createClient } from "@supabase/supabase-js";
export const POST = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
    const data = await req.json();
    console.log(data.id);

    if (data.type === "terima") {
      return await supabase
        .from("pengajuan")
        .update({ aksi: "Diterima" })
        .eq("id", data.id);
    }

    if (data.type === "tolak") {
      return await supabase
        .from("pengajuan")
        .update({ aksi: "Ditolak" })
        .eq("id", data.id);
    }

    return new Response(JSON.stringify({ message: "Berhasil!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

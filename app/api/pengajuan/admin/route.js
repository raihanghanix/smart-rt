import { createClient } from "@supabase/supabase-js";
export const GET = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    let { data: pengajuan, error } = await supabase
      .from("pengajuan")
      .select("");

    console.log(pengajuan);

    return new Response(JSON.stringify({ message: "Berhasil!", pengajuan }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

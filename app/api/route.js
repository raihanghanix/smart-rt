import { createClient } from "@supabase/supabase-js";
export const POST = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const nik = await req.json();

    const { data: query, error: queryError } = await supabase
      .from("warga")
      .select()
      .eq("nik", nik);

    return new Response(
      JSON.stringify({ message: "Berhasil!", data: query[0] }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

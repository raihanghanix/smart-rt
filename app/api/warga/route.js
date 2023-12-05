import { createClient } from "@supabase/supabase-js";
export const GET = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const { data: query, error: queryError } = await supabase
      .from("warga")
      .select();

    return new Response(JSON.stringify({ message: "Berhasil!", data: query }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

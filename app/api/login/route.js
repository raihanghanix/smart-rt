import { createClient } from "@supabase/supabase-js";
export const POST = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const data = await req.formData();
    const email = data.get("email");
    const password = data.get("password");

    const { data: query, error: queryError } = await supabase
      .from("warga")
      .select()
      .eq("email", email);

    const userNik = query[0]?.nik;
    const userEmail = query[0]?.email;
    const userPassword = query[0]?.password;

    if (email !== userEmail || password !== userPassword) {
      return new Response(
        JSON.stringify({ message: "Email atau password salah!" }),
        {
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Berhasil!", nik: userNik }),
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

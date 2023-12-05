import { createClient } from "@supabase/supabase-js";
export const POST = async (req, res) => {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );

    const data = await req.formData();

    const nik = data.get("nik");
    const email = data.get("email");
    const password = data.get("password");
    const ktp = data.get("ktp");
    const kk = data.get("kk");

    const ktpFormat = ktp.type.split("/")[1];
    const kkFormat = kk.type.split("/")[1];

    const ktpUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/ktp/KTP_${nik}.${ktpFormat}`;
    const kkUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/kk/KK_${nik}.${kkFormat}`;

    const { data: query, error: queryError } = await supabase
      .from("warga")
      .select()
      .eq("nik", nik);

    if (query.length === 0) {
      return new Response(
        JSON.stringify({ message: "NIK ini tidak terdaftar pada RT!" }),
        {
          status: 500,
        }
      );
    } else if (query[0].is_registered) {
      return new Response(
        JSON.stringify({ message: "NIK ini sudah mendaftar, silahkan login!" }),
        {
          status: 500,
        }
      );
    }

    const { data: ktpQuery, error: ktpError } = await supabase.storage
      .from("ktp")
      .upload(`KTP_${nik}.${ktpFormat}`, ktp, {
        cacheControl: "3600",
        upsert: true,
      });

    const { data: kkQuery, error: kkError } = await supabase.storage
      .from("kk")
      .upload(`KK_${nik}.${kkFormat}`, kk, {
        cacheControl: "3600",
        upsert: true,
      });

    const { error } = await supabase
      .from("warga")
      .update({ email, password, ktp: ktpUrl, kk: kkUrl, is_registered: true })
      .eq("nik", nik);

    return new Response(JSON.stringify({ message: "Berhasil!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
};

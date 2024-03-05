/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
const API_KEY = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://qqnkeeuttacyfctgebzc.supabase.co";
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getKategori(callback) {
  try {
    const { data: kategori, error } = await supabase
      .from("kategori")
      .select("kategori,web_img");
    callback(kategori);
  } catch (error) {
    console.log(error);
  }
}

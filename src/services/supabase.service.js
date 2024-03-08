/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
import { data } from "autoprefixer";
const API_KEY = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://qqnkeeuttacyfctgebzc.supabase.co";
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getKategori(callback) {
  try {
    const { data: kategori, error } = await supabase
      .from("kategori")
      .select("id_kategori,kategori,web_img");
    callback(kategori);
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailRecipe(callback, id) {
  let data = {};
  try {
    const { data: allfood } = await supabase
      .from("allfood")
      .select("id,food,web_img,description")
      .eq("id", id);
    const { data: bahandetail } = await supabase
      .from("bahandetail")
      .select("angka,bahan,harga")
      .eq("idfood", id);
    const { data: marimasak } = await supabase
      .from("marimasak")
      .select("cara")
      .eq("idfood", id);
    data = { data: allfood[0], recipe: bahandetail, step: marimasak };
    callback(data);
  } catch (error) {
    console.log(error);
  }
}

export async function searchFood(callback, query) {
  try {
    let { data: allfood, error } = await supabase
      .from("allfood")
      .select("id,food,web_img,harga,kategori(kategori)")
      .ilike("food", `%${query}%`);
    callback(allfood);
  } catch (error) {
    console.log(error);
  }
}

export async function getTrending(callback) {
  try {
    let { data: allfood, error } = await supabase
      .from("allfood")
      .select("id,food,web_img,harga,kategori(kategori)")
      .in("id", [2, 3, 18, 13, 6, 17, 10]);
    callback(allfood);
  } catch (error) {
    console.log(error);
  }
}

export async function getRekomendasi(callback) {
  try {
    let { data: allfood, error } = await supabase
      .from("allfood")
      .select("id,food,web_img,harga,kategori(kategori)")
      .range(8, 19);
    callback(allfood);
  } catch (error) {
    console.log(error);
  }
}

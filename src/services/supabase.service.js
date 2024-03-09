/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
import Bookmark from "../components/Bookmark";
const API_KEY = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://qqnkeeuttacyfctgebzc.supabase.co";
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getKategori(callback) {
  try {
    const { data: kategori, error } = await supabase
      .from("kategori")
      .select("id_kategori,kategori,web_img,web_header_img");
    callback(kategori);
  } catch (error) {
    console.log(error);
  }
}

export async function getFoodbyKategori(callback, id) {
  let data = {};
  try {
    const { data: kategori } = await supabase
      .from("kategori")
      .select("kategori,web_header_img")
      .eq("id_kategori", id);
    const { data: allfood } = await supabase
      .from("allfood")
      .select("id,food,web_img,harga")
      .eq("kategori", id);
    data = { kategori: kategori[0], food: allfood };
    callback(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailRecipe(callback, id) {
  let data = {};
  try {
    const { data: allfood } = await supabase
      .from("allfood")
      .select("id,food,web_img,description,harga")
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

export async function insertFavorite(payload) {
  try {
    await supabase.from("Favorite").insert([payload]);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteFavorite(uid, id_food) {
  try {
    await supabase
      .from("Favorite")
      .delete()
      .eq("uid", uid)
      .eq("id_food", id_food);
  } catch (error) {
    console.log(error);
  }
}

export async function getFavorite(callback, uid, id_food) {
  try {
    let { data: Favorite, error } = await supabase
      .from("Favorite")
      .select("*")
      .eq("uid", uid)
      .eq("id_food", id_food);
    callback(Favorite);
  } catch (error) {
    console.log(error);
  }
}
export async function getAllFavorite(callback, uid) {
  try {
    let { data: Favorite, error } = await supabase
      .from("Favorite")
      .select("*")
      .eq("uid", uid);
    callback(Favorite);
  } catch (error) {
    console.log(error);
  }
}

export async function insertTransaction(payload, callback) {
  try {
    await supabase.from("transaction").insert([payload]).then(callback);
  } catch (error) {
    console.log(error);
  }
}
export async function getAllTransaction(callback, uid) {
  try {
    let { data: transaction, error } = await supabase
      .from("transaction")
      .select("*")
      .eq("uid", uid);
    callback(transaction);
  } catch (error) {
    console.log(error);
  }
}
export async function getTransaction(callback, id) {
  try {
    let { data: transaction, error } = await supabase
      .from("transaction")
      .select("*")
      .eq("id", id);
    callback(transaction[0]);
  } catch (error) {
    console.log(error);
  }
}
export async function getRecipe(callback, id) {
  try {
    const { data: bahandetail } = await supabase
      .from("bahandetail")
      .select("angka,bahan,harga")
      .eq("idfood", id);
    callback(bahandetail);
  } catch (error) {
    console.log(error);
  }
}

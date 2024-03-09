import { createClient } from "@supabase/supabase-js";
const API_KEY = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://qqnkeeuttacyfctgebzc.supabase.co";
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function SignIn(callback, credentials) {
  let { data, error } = await supabase.auth.signInWithPassword(credentials);
  callback(data, error?.message);
}

export async function SignOut(callback) {
  await supabase.auth.signOut().then(callback);
}

export async function SignUp(callback, credentials) {
  let { data, error } = await supabase.auth.signUp(credentials);
  callback(data, error?.message);
}

export async function InsertCredentials(id, username, email) {
  await supabase
    .from("akun")
    .insert([{ uid: id, username: `${username}`, email: `${email}` }])
    .select();
}
export async function getUsername(callback, id) {
  let { data: akun } = await supabase
    .from("akun")
    .select("username")
    .eq("uid", id);
  callback(akun[0].username);
}

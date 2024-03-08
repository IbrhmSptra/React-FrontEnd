import { createClient } from "@supabase/supabase-js";
const API_KEY = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://qqnkeeuttacyfctgebzc.supabase.co";
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function SignIn(callback, credentials) {
  let { data, error } = await supabase.auth.signInWithPassword(credentials);
  callback(data, error?.message);
}

export async function SignOut() {
  let { error } = await supabase.auth.signOut();
  console.log(error?.message);
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

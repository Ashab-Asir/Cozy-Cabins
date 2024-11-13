import supabase from "./superbase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("cabins not loaded");
    throw new Error("cabins could not be loaded");
  }
  return data;
}

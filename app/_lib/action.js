"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./superbase";
import { getBookings } from "./data-service";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be login!");
  }
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }
  const updateData = { nationality, countryFlag, nationalID };
  console.log(updateData);
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);
  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be login!");
  }
  const bookings = getBookings(session.user.guestId);
  const bookingsids = bookings.map((booking) => booking.id);
  console.log(bookingsids);
  if (!bookingsids.includes(bookingId)) {
    throw new Error("you are not allowed to delete this booking");
  }
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);
  if (error) {
    throw new Error("Booking could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

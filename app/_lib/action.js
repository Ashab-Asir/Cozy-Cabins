"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./superbase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

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
  const bookings = await getBookings(session.user.guestId);
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

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));
  const session = await auth();
  if (!session) {
    throw new Error("You must be login!");
  }
  const bookings = await getBookings(session.user.guestId);
  const bookingsids = bookings.map((booking) => booking.id);
  if (!bookingsids.includes(bookingId)) {
    throw new Error("you are not allowed to update this booking");
  }
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };
  const { data, error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    console.error("bla bla");
    throw new Error("You must be login!");
  }
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };
  const { error } = await supabase.from("bookings").insert([newBooking]);
  if (error) {
    throw new Error("Booking could not be created");
  }
  revalidatePath(`/cabin/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

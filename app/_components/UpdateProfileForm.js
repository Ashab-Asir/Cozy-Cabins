"use client";
import React, { useState } from "react";
import { updateGuest } from "../_lib/action";
import { useFormStatus } from "react-dom";

export default function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  const [count, setCount] = useState();

  return (
    <form
      action={updateGuest}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-4 md:gap-6 flex-col"
    >
      <div className="space-y-2">
        <label className="md:text-base text-sm">Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-500 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm md:text-base"
        />
      </div>

      <div className="space-y-2">
        <label className="md:text-base text-sm">Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 text-sm md:text-base"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="md:text-base text-sm" htmlFor="nationality">
            Where are you from?
          </label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label className="md:text-base text-sm" htmlFor="nationalID">
          National ID number
        </label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <Button></Button>
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-4 py-2 md:px-8 md:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? "Updatding" : "Update profile"}
    </button>
  );
}

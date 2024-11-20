"use client";
import React from "react";

function ReservationForm({ cabin }) {
  return (
    <div>
      <div className="bg-primary-800 text-primary-300 px-4 py-2 flex justify-between text-sm md:text-base">
        <p>Logged in as</p>
      </div>
      <form className="bg-primary-900 p-4 md:p-8 flex flex-col gap-6 text-sm md:text-base">
        <div>
          <label htmlFor="numGuests" className="block mb-1">
            How many guests?
          </label>
          <select
            id="numGuests"
            className="w-full px-3 py-2 bg-primary-200 text-primary-800 rounded"
            required
          >
            <option value="">Select number of guests...</option>
            {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(
              (x) => (
                <option key={x} value={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <label htmlFor="observations" className="block mb-1">
            Anything we should know?
          </label>
          <textarea
            id="observations"
            className="w-full px-3 py-2 bg-primary-200 text-primary-800 rounded"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center gap-4">
          <p className="text-primary-300 text-xs md:text-sm">
            Start by selecting dates
          </p>
          <button className="bg-accent-500 px-6 py-3 text-primary-800 font-semibold hover:bg-accent-600">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;

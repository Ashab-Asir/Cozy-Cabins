"use client";
import React from "react";
import { DayPicker } from "react-day-picker";
import { useReservation } from "./ReservationContext";
import "react-day-picker/dist/style.css";

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  return (
    <div className="flex flex-col text-sm md:text-base">
      <DayPicker
        mode="range"
        onSelect={setRange}
        selected={range}
        min={settings.minBookingLength + 1}
        max={settings.maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        numberOfMonths={1}
      />
      <div className="flex flex-col md:flex-row items-center justify-between bg-accent-500 p-2 text-primary-800">
        <div className="flex flex-wrap gap-2">
          <p className="text-lg md:text-xl">
            ${regularPrice - discount}
            {discount > 0 && (
              <span className="line-through text-primary-700 pl-2">
                ${regularPrice}
              </span>
            )}
            /night
          </p>
          {numNights && (
            <p className="bg-accent-600 px-3 py-2">
              × {numNights}
              <span className="text-lg md:text-xl ml-2">
                Total: ${cabinPrice}
              </span>
            </p>
          )}
        </div>
        {(range.from || range.to) && (
          <button
            className="mt-4 md:mt-0 border border-primary-800 px-4 py-2 text-sm md:text-base"
            onClick={resetRange}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;

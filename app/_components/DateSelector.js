"use client";
import React from "react";
import { DayPicker } from "react-day-picker";
import { useReservation } from "./ReservationContext";
import "react-day-picker/dist/style.css";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}
function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const { regularPrice, discount } = cabin;
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div className="flex flex-col text-sm md:text-base">
      <DayPicker
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={settings.minBookingLength + 1}
        max={settings.maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        numberOfMonths={1}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
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

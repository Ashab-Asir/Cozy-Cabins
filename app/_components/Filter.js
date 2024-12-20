"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "";
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1-3 guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4-7 guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8 and more... guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <>
      <button
        className={`px-3 py-1 md:px-5 md:py-2 hover:bg-primary-700 text-xs md:text-2xl ${
          filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
        }`}
        onClick={() => handleFilter(filter)}
      >
        {children}
      </button>
    </>
  );
}

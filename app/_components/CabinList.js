import { getCabins } from "../_lib/data-service";
import CabinCard from "../_components/CabinCard";
async function CabinList({ filter }) {
  const cabins = await getCabins();
  if (!cabins.length) return null;
  let displayCabins;
  if (filter === "all") {
    displayCabins = cabins;
  }
  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;

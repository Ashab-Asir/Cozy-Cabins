import { getCabins } from "../_lib/data-service";
import CabinCard from "../_components/CabinCard";
async function CabinList() {
  const cabins = await getCabins();
  if (!cabins.length) return null;
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;

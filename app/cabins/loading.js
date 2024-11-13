import Spinner from "../_components/Spinner";

export default function loading() {
  return (
    <div className="grid justify-center item-center">
      <Spinner></Spinner>
      <p className="text-primary-200">Loading cabin data....</p>
    </div>
  );
}

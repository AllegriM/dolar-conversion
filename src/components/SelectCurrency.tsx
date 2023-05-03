import type {Moneda} from "@/types";

export default function SelectCurrency({
  setMoneda,
  moneda,
}: {
  setMoneda: (moneda: Moneda) => void;
  moneda: Moneda;
}) {
  return (
    <div className="flex justify-around w-[240px] my-auto text-black">
      <button
        className={`${
          moneda === "ARS" ? "bg-gray-200" : ""
        } border px-4 py-2 text-lg rounded-md hover:bg-gray-200`}
        type="button"
        onClick={() => setMoneda("ARS")}
      >
        ARS
      </button>
      <button
        className={`${
          moneda === "USD" ? "bg-gray-200" : ""
        } border px-4 py-2 text-lg rounded-md hover:bg-gray-200`}
        type="button"
        onClick={() => setMoneda("USD")}
      >
        USD
      </button>
    </div>
  );
}

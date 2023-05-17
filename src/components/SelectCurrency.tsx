export default function SelectCurrency({
  setMoneda,
  moneda,
}: {
  setMoneda: (moneda: Moneda) => void;
  moneda: Moneda;
}) {
  return (
    <div className="flex justify-center gap-20 md:w-[240px] my-auto text-black">
      <button
        className={`${
          moneda === "ARS" ? "bg-neutral-700" : ""
        } font-bold text-white border border-gray-500 px-4 py-2 text-lg rounded-md hover:bg-gray-200 hover:text-black`}
        type="button"
        onClick={() => setMoneda("ARS")}
      >
        ARS
      </button>
      <button
        className={`${
          moneda === "USD" ? "bg-neutral-700" : ""
        } font-bold text-white border border-gray-500 px-4 py-2 text-lg rounded-md hover:bg-gray-200 hover:text-black`}
        type="button"
        onClick={() => setMoneda("USD")}
      >
        USD
      </button>
    </div>
  );
}

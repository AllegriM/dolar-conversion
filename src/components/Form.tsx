interface FormProps {
  onChange: (amount: number) => void;
  moneda: string;
  setOperation: (operation: Operation) => void;
}

export default function Form({onChange, moneda, setOperation}: FormProps) {
  const options = [
    {value: "buy", label: "Comprar"},
    {value: "sell", label: "Vender"},
  ];

  return (
    <div className="text-white flex flex-col mx-auto md:mx-0 mb-5">
      <div className="flex gap-3">
        <select
          className="text-2xl capitalize bg-transparent focus:outline-none cursor-pointer"
          onChange={(e) => setOperation(e.target.value as Operation)}
        >
          {options.map((option) => (
            <option key={option.value} className="bg-neutral-600" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="text-2xl"> {moneda}</span>
      </div>
      <div className="relative">
        <input
          className="text-black text-left border-2 rounded-md p-1 pl-4 w-[240px] mt-3 focus:outline-0"
          id="monto"
          min={0}
          type="number"
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <span className="text-black text-lg absolute left-1 top-4">$</span>
      </div>
    </div>
  );
}

interface FormProps {
  onChange: (amount: number) => void;
  moneda: string;
}

export default function Form({onChange, moneda}: FormProps) {
  return (
    <div className="text-white flex flex-col mx-auto md:mx-0 mb-5">
      <label className="text-2xl" htmlFor="monto">
        Monto en {moneda}
      </label>
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

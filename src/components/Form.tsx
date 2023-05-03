interface FormProps {
  amount: number;
  onChange: (amount: number) => void;
  moneda: string;
}

export default function Form({amount, onChange, moneda}: FormProps) {
  return (
    <div className="text-black">
      <label className="text-2xl" htmlFor="monto">
        Monto en {moneda}
        {/* {moneda === "ARS" ? } */}
      </label>
      <input
        className="border-2 rounded-md p-1 text-right w-[240px]"
        id="monto"
        min={0}
        type="number"
        value={amount}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

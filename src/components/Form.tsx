interface FormProps {
  amount: number;
  onChange: (amount: number) => void;
}

export default function Form({amount, onChange}: FormProps) {
  return (
    <div className="text-black">
      <label className="text-2xl" htmlFor="monto">
        Monto
      </label>
      <input
        className="border-2 rounded-md p-1 text-right"
        id="monto"
        min={0}
        type="number"
        value={amount}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

"use client";

import {Roboto_Mono} from "next/font/google";
import {useState} from "react";

import Form from "./Form";
import SelectCurrency from "./SelectCurrency";

// Type moneda as ARS or USD

const formatMoney = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

const font = Roboto_Mono({subsets: ["latin"]});

export default function DollarApp(dolar: DolarData[]) {
  const [amount, setAmount] = useState<number>(0);
  const [moneda, setMoneda] = useState<Moneda>("ARS");
  const [operation, setOperation] = useState<Operation>("buy");

  const cantidadCalculada = (op: Operation, currency: Moneda, buy: number, sell: number) => {
    if (op === "buy" && currency === "ARS") {
      return formatMoney.format(amount / sell);
    } else if (op === "buy" && currency === "USD") {
      return formatMoney.format(amount * buy);
    } else if (op === "sell" && currency === "ARS") {
      return formatMoney.format(amount / buy);
    } else {
      return formatMoney.format(amount * sell);
    }
  };

  return (
    <main className={`${font.className} h-full gap-4`}>
      <section className="flex flex-col items-center">
        <Form
          moneda={moneda}
          setOperation={(op: Operation) => setOperation(op)}
          onChange={(_amount: number) => setAmount(_amount)}
        />
        <SelectCurrency moneda={moneda} setMoneda={(_moneda: Moneda) => setMoneda(_moneda)} />
      </section>
      <section>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {dolar.map((dolarInfo) => {
            return (
              <li
                key={dolarInfo.type}
                className="items-center bg-white justify-between p-2 border-t-4 border-t-green-800"
              >
                <div className={`${amount ? "pb-0" : "pb-[44px]"} flex flex-col gap-3 `}>
                  <h4 className="text-2xl text-center text-emerald-500 font-bold">
                    {dolarInfo.type}
                  </h4>
                  <div className="flex justify-around">
                    <div>
                      <p className="text-center text-gray-500">Compra</p>
                      <span className="text-md font-bold text-green-500">
                        {formatMoney.format(dolarInfo.buy)}
                      </span>
                    </div>
                    {dolarInfo.sell !== 0 ? (
                      <div>
                        <p className="text-center text-gray-500">Venta</p>
                        <span className="text-md font-bold text-green-500">
                          {dolarInfo.sell ? formatMoney.format(dolarInfo.sell) : ""}
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <span className="text-xs text-gray-500">{dolarInfo.updatedAt}</span>
                </div>
                {amount ? (
                  <div className="text-gray-500">
                    <p>Son:</p>
                    <p className="font-bold text-sm text-green-500">
                      {cantidadCalculada(operation, moneda, dolarInfo.buy, dolarInfo.sell)}
                    </p>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

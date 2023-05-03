"use client";

import type {Dolar, Moneda} from "@/types";

import {Inter} from "next/font/google";
import {useState} from "react";

import Form from "./Form";
import SelectCurrency from "./SelectCurrency";

// Type moneda as ARS or USD

const inter = Inter({subsets: ["latin"]});

export default function DollarApp({dolar}: {dolar: Dolar[]}) {
  const [amount, setAmount] = useState<number>(0);
  const [moneda, setMoneda] = useState<Moneda>("ARS");

  return (
    <main className={`${inter.className} flex h-full gap-4`}>
      <section className="flex flex-col flex-1">
        <Form amount={amount} moneda={moneda} onChange={(_amount: number) => setAmount(_amount)} />
        <SelectCurrency moneda={moneda} setMoneda={(_moneda: Moneda) => setMoneda(_moneda)} />
      </section>
      <section className="flex-1 bg-green-800 rounded-md p-2">
        <ul>
          {dolar.map((dolarInfo) => {
            const formatMoney = new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            });

            return (
              <li key={dolarInfo.nombre} className="flex items-center justify-between p-2">
                <div className="w-2/4">
                  <p className="text-md  pr-2 text-emerald-400 font-bold">
                    {dolarInfo.nombre === "Dolar Contado con Liqui" ? "CCL" : dolarInfo.nombre}
                  </p>
                  <p className="text-sm text-emerald-400">
                    {formatMoney.format(parseFloat(dolarInfo.venta))}
                  </p>
                </div>
                {amount ? (
                  <div className="w-2/4 text-right">
                    <p>Son:</p>
                    <p className="font-bold text-sm">
                      {moneda === "ARS"
                        ? formatMoney.format(amount / parseFloat(dolarInfo.compra))
                        : formatMoney.format(amount * parseFloat(dolarInfo.venta))}
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

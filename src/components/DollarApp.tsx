"use client";

import type {Dolar} from "@/types";

import {Inter} from "next/font/google";
import {useState} from "react";

import Form from "./Form";

const inter = Inter({subsets: ["latin"]});

export default function DollarApp({dolar}: {dolar: Dolar[]}) {
  const [amount, setAmount] = useState<number>(0);

  return (
    <main className={`${inter.className} flex h-full gap-4`}>
      <section className="flex-1">
        <Form amount={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="flex-1 bg-green-900 rounded-md p-2">
        <ul className="">
          {dolar.map((dolarInfo) => {
            const formatCurrency = new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            });

            return (
              <li
                key={dolarInfo.nombre}
                className="flex items-center justify-between p-2 font-bold"
              >
                <p className="text-sm w-2/3 pr-2 text-emerald-500">{dolarInfo.nombre}</p>
                <div className="">
                  <p>{formatCurrency.format(amount / parseFloat(dolarInfo.venta))}</p>
                  <p className="text-lg text-emerald-500 font-bold">
                    {formatCurrency.format(parseFloat(dolarInfo.venta))}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

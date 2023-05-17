// types/global.d.ts

interface Dolar {
  compra: number;
  venta: number;
  nombre: string;
}

type DolarType = "Dolar Blue" | "Dolar Oficial" | "Dolar Solidario" | "Dolar Bolsa" | "Dolar CCL";

type Moneda = "ARS" | "USD";

type Operation = "buy" | "sell";

interface DolarData {
  type: DolarType;
  buy: number;
  sell: number;
  updatedAt: string;
}

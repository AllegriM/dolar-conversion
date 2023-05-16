export interface Dolar {
  compra: number;
  venta: number;
  nombre: string;
}

export type DolarType =
  | "Dolar Blue"
  | "Dolar Oficial"
  | "Dolar Solidario"
  | "Dolar Bolsa"
  | "Dolar CCL";

export type Moneda = "ARS" | "USD";

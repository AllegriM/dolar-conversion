import DollarApp from "../components/DollarApp";

export default async function Home() {
  const res = await fetch(String(process.env.DOLAR_URL), {
    next: {
      revalidate: 60,
    },
  });
  const data = (await res.json()) as {
    casa: {nombre: string; compra: string; venta: string};
  }[];
  const dolarData = data
    .filter((cotizacion) =>
      ["Dolar Oficial", "Dolar Blue", "Dolar Contado con Liqui"].includes(cotizacion.casa.nombre),
    )
    .map((dolar) => {
      const {compra, venta, nombre} = dolar.casa;

      return {
        nombre,
        // compra y venta son strings, pero necesitamos que sean numbers y que tengan 2 decimales
        compra: parseFloat(compra.replace(",", ".")),
        venta: parseFloat(venta.replace(",", ".")),
      };
    });

  return <DollarApp dolar={dolarData} />;
}

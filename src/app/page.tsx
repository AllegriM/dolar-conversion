import DollarApp from "../components/DollarApp";

export default async function Home() {
  const res = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
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
        compra,
        venta,
      };
    });

  return <DollarApp dolar={dolarData} />;
}

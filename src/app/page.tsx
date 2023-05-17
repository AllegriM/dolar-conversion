import {dolarScraper} from "@/utils/scraper";

import DollarApp from "../components/DollarApp";

// {
//   dolarBlue: {
//     buy: '$483.00',
//     sell: '$488.00',
//     updatedAt: 'Actualizado el 16/05/23 06:51 PM'
//   },
//   dolarOficial: {
//     buy: '$231.24',
//     sell: '$239.82',
//     updatedAt: 'Actualizado el 16/05/23 06:51 PM'
//   },
//   dolarSolidario: {
//     buy: '$396.82',
//     sell: undefined,
//     updatedAt: 'Actualizado el 16/05/23 06:51 PM'
//   },
//   dolarBolsa: {
//     buy: '$441.69',
//     sell: '$441.92',
//     updatedAt: 'Actualizado el 16/05/23 06:51 PM'
//   },
//   dolarContadoConLiqui: {
//     buy: '$438.47',
//     sell: '$448.49',
//     updatedAt: 'Actualizado el 16/05/23 06:51 PM'
//   }
// }

export default async function Home() {
  // const res = await fetch(String(process.env.DOLAR_URL), {
  //   next: {
  //     revalidate: 60,
  //   },
  // });
  const dolarData: DolarData[] = await dolarScraper();
  // const data: DolarData = (await res.json()) as {
  //   casa: {nombre: string; compra: string; venta: string};
  // }[];
  // const dolarData = data
  //   .filter((cotizacion) =>
  //     ["Dolar Oficial", "Dolar Blue", "Dolar Contado con Liqui"].includes(cotizacion.casa.nombre),
  //   )
  //   .map((dolar) => {
  //     const {compra, venta, nombre} = dolar.casa;

  //     return {
  //       nombre,
  //       // compra y venta son strings, pero necesitamos que sean numbers y que tengan 2 decimales
  //       compra: parseFloat(compra.replace(",", ".")),
  //       venta: parseFloat(venta.replace(",", ".")),
  //     };
  //   });

  return <DollarApp dolar={dolarData} />;
}

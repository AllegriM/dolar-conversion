import {JSDOM} from "jsdom";

type TypeOfDolarsProps = Record<
  string,
  {
    type: DolarType;
    url: string;
  }
>;

const typeOfDolars: TypeOfDolarsProps = {
  dolarBlue: {
    type: "Dolar Blue",
    url: "https://www.dolarhoy.com/cotizaciondolarblue",
  },
  dolarOficial: {
    type: "Dolar Oficial",
    url: "https://www.dolarhoy.com/cotizaciondolaroficial",
  },
  dolarSolidario: {
    type: "Dolar Solidario",
    url: "https://www.dolarhoy.com/cotizaciondolarsolidario",
  },
  dolarBolsa: {
    type: "Dolar Bolsa",
    url: "https://www.dolarhoy.com/cotizaciondolarbolsa",
  },
  dolarContadoConLiqui: {
    type: "Dolar CCL",
    url: "https://www.dolarhoy.com/cotizaciondolarcontadoconliqui",
  },
};

export const dolarScraper = async () => {
  const results: DolarData[] = [];

  for (const [key, value] of Object.entries(typeOfDolars)) {
    const res = await fetch(value.url, {
      cache: "no-cache",
    });
    const html = await res.text();
    const dom = new JSDOM(html);

    const document = dom.window.document;

    const values: HTMLDivElement[] = Array.from(document.querySelectorAll(".value"));
    const spans: HTMLSpanElement[] = Array.from(document.getElementsByTagName("span"));

    const buy = values[0]?.textContent;
    let sell = values[1]?.textContent;
    const updatedAt = spans.find((span) => span.innerHTML.includes("Actualizado"))?.innerHTML;

    if (!sell) sell = "0";

    if (!buy || !sell || !updatedAt) {
      throw new Error(`Error scraping ${key}`);
    }

    results.push({
      type: value.type,
      buy: parseFloat(buy.replace("$", "")),
      sell: parseFloat(sell.replace("$", "")),
      updatedAt,
    });
  }

  return results;
};

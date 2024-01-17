import ApexCharts from "apexcharts";

class Chart extends HTMLElement {
  constructor() {
    super();

    const dataElement = document.getElementById("data")!;
    const groupBy = this.dataset.groupby!;
    const group = this.dataset.group!;
    const everything = JSON.parse(atob(dataElement.dataset.everything!));

    const data = everything.filter((d: any) => d[groupBy] == group);

    const finalData = data.reduce((acc: any, d: any) => {
      const year = d["np3103rr_rok"];
      const value = d.value;

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(value);
      return acc;
    });

    const series = Object.entries(finalData)
      .filter(([year, values]) => !!parseInt(year) && Array.isArray(values))
      .map(([year, values]) => ({
        name: year,
        data: values,
      }));

    const chart = new ApexCharts(document.getElementById(this.dataset.id!), {
      chart: {
        type: "line",
        height: 500,
        animations: {
          enabled: false,
        },
      },
      series,
      stroke: {
        curve: "smooth",
        width: Array.from({ length: 9 }, (_, i) => i + 2015).map((year) =>
          year == new Date().getFullYear() ? 5 : 2,
        ),
      },
      tooltip: {
        shared: true,
      },
      yaxis: {},
    });

    chart.render();
  }
}

const minInSeries = (series: { data: number[] }[]) => {
  let min = Infinity;
  for (const serie of series) {
    for (const value of serie.data) {
      if (value < min) {
        min = value;
      }
    }
  }
  return min;
};

const maxInSeries = (series: { data: number[] }[]) => {
  let max = -Infinity;
  for (const serie of series) {
    for (const value of serie.data) {
      if (value > max) {
        max = value;
      }
    }
  }
  return max;
};

customElements.define("line-chart", Chart);

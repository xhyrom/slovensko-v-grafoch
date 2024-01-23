import ApexCharts from "apexcharts";

class Chart extends HTMLElement {
  constructor() {
    super();

    const dataElement = document.getElementById("data")!;
    const groupBy = this.dataset.groupby!;
    const group = this.dataset.group!;
    const everything = JSON.parse(atob(dataElement.dataset.everything!));

    const data = everything.filter((d: any) => d[groupBy] == group);

    const byGender = data.reduce((acc: any, d: any) => {
      // np3103rr_dim1
      const gend = d["np3103rr_dim1"];

      if (gend == "Spolu") {
        return acc;
      }

      if (!acc[gend]) {
        acc[gend] = [];
      }

      acc[gend].push(d.value);
      return acc;
    }, {});

    const series = Object.entries(byGender).map(([gend, values]) => ({
      name: gend,
      data: values,
    }));

    const chart = new ApexCharts(document.getElementById(this.dataset.id!), {
      chart: {
        type: "bar",
        height: 500,
        stacked: true,
        animations: {
          enabled: false,
        },
      },
      series,
      xaxis: {
        categories: [
          2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
          2021, 2022,
        ],
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
    });

    chart.render();
  }
}

customElements.define("bar-chart", Chart);

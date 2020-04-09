import moment from "moment";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import setYaxis from "../charthelper";
import styled from "styled-components";

type chartProps = {
  probeSerial: string;
  lasteMeasurementTime: string;
  values: Array<temperatureValues>;
};

export type temperatureValues = {
  temperature1: number;
  temperature2: number;
  temperature3: number;
  measurementDate: string;
};

class SoilTemperatureChart extends Component<chartProps> {
  state = {
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: ["#16a5dd", "#df1d16", "#66DA26"],
      stroke: {
        width: 3
      },
      labels: this.props.values.map(data => moment(new Date(data.measurementDate))),
      xaxis: {
        type: "date",
        labels: {
          formatter: (label: string) => moment(new Date(label)).format("l")
        }
      },
      yaxis: [
        {
          ...setYaxis([
            ...this.props.values.map(data => Number(data.temperature1)),
            ...this.props.values.map(data => Number(data.temperature2)),
            ...this.props.values.map(data => Number(data.temperature3))
          ]),
          title: {
            text: "Talajhőmérséklet",
            style: {
              fontSize: "16px"
            }
          },
          labels: {
            formatter: (label: string) => `${label} °C`
          }
        }
      ],
      tooltip: {
        y: {
          formatter: (seriesName: string) => `${seriesName} °C`
        }
      },
      title: {
        text: `Utolsó mérés ideje: ${moment(this.props.lasteMeasurementTime).format("ll")}`,
        style: {
          fontSize: "16px"
        }
      },
      markers: {
        size: 5
      },
      legend: {
        fontSize: "16px"
      }
    },
    series: [
      {
        name: "-8 cm",
        data: this.props.values.map(data => data.temperature1)
      },
      {
        name: "-20 cm",
        data: this.props.values.map(data => data.temperature2)
      },
      {
        name: "-40 cm",
        data: this.props.values.map(data => data.temperature3)
      }
    ]
  };

  render() {
    return (
      <div>
        <H2>Szonda: {this.props.probeSerial}</H2>
        <Chart options={this.state.chartOptions} series={this.state.series} type="line" width="100%" height={500} />
      </div>
    );
  }
}

const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
`;
export default SoilTemperatureChart;

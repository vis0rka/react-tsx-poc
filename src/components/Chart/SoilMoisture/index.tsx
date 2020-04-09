import moment from "moment";
import React, { Component } from "react";
import Chart from "react-apexcharts";
import setYaxis from "../charthelper";
import styled from "styled-components";

type chartProps = {
  probeSerial: string;
  lasteMeasurementTime: string;
  values: Array<moistureValues>;
};

export type moistureValues = {
  moisture1: number;
  moisture2: number;
  moisture3: number;
  measurementDate: string;
};

class SoilMoistureChart extends Component<chartProps> {
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
            ...this.props.values.map(data => Number(data.moisture1)),
            ...this.props.values.map(data => Number(data.moisture2)),
            ...this.props.values.map(data => Number(data.moisture3))
          ]),
          title: {
            text: "Talajnedvesség",
            style: {
              fontSize: "16px"
            }
          },
          labels: {
            formatter: (label: string) => `${label} %`
          }
        }
      ],
      tooltip: {
        y: {
          formatter: (seriesName: number) => `${!Number.isInteger(seriesName) ? seriesName.toFixed(2) : seriesName} %`
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
        data: this.props.values.map(data => data.moisture1)
      },
      {
        name: "-20 cm",
        data: this.props.values.map(data => data.moisture2)
      },
      {
        name: "-40 cm",
        data: this.props.values.map(data => data.moisture3)
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

export default SoilMoistureChart;

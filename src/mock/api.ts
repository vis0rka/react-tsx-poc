import { ApiException } from "plugins/clients/api";

export interface PocResponse {
  id: string;
  name: string;
}

export const pocApi = {
  apiGet: (status: number): Promise<PocResponse> =>
    new Promise((resolve, reject) => {
      if (status === 200) {
        resolve({ id: "123-123", name: "First Last" });
      } else {
        reject(throwException("Bad Request", status, "_responseText", ["_headers"]));
      }
    })
};

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}

export interface FormPocResponse {
  firstName: string;
  phoneField: string;
  email: string;
  taxNumber: string;
  date: Date;
  multiSelect: string[];
  singleSelect: string;
  sondaNumber: string;
}

export const FormPocApi = {
  apiGet: (status: number): Promise<FormPocResponse> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 200) {
          resolve({
            firstName: "Béla",
            phoneField: "+36 701234567",
            email: "bela@gmail.com",
            taxNumber: "12345678-1-78",
            sondaNumber: "5",
            date: new Date("2020-09-20T00:00:00"),
            multiSelect: ["12% lejtő", "Nitrát érzékeny"],
            singleSelect: "true"
          });
        } else {
          reject({ status })
        }
      }, 2000);
    })
};


export const chartPocApi = {
  apiGetSoilTemperature: (status: number): Promise<SoilTemperatureChartDashboardViewModel> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 200) {
          resolve(ChartMockDataSoilTemperature);
        } else {
          reject(throwException("Bad Request", status, "_responseText", ["_headers"]));
        }
      }, 1000);
    }),
  apiGetSoilMoisture: (status: number): Promise<SoilMoistureChartDataDashboardViewModel> =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 200) {
          resolve(ChartMockDataSoilMoisture);
        } else {
          reject(throwException("Bad Request", status, "_responseText", ["_headers"]));
        }
      }, 1000);
    })
};

export interface SoilTemperatureDashboardViewModel {
  temperature1: number;
  temperature2: number;
  temperature3: number;
  measurementDate: string;
}
export interface SoilMoistureDashboardViewModel {
  moisture1: number;
  moisture2: number;
  moisture3: number;
  measurementDate: string;
}

export interface SoilTemperatureChartDashboardViewModel {
  probeSerial: string;
  lasteMeasurementTime: string;
  soilTemperatureChartDataDashboardViewModels: Array<SoilTemperatureDashboardViewModel>;
}
export interface SoilMoistureChartDataDashboardViewModel {
  probeSerial: string;
  lasteMeasurementTime: string;
  soilMoistureChartDataDashboardViewModels: Array<SoilMoistureDashboardViewModel>;
}

const ChartMockDataSoilTemperature = {
  lasteMeasurementTime: "2019-11-07T00:00:00",
  probeSerial: "TSZ10",
  soilTemperatureChartDataDashboardViewModels: [
    {
      measurementDate: "2019-10-07T00:00:00",
      temperature1: 9,
      temperature2: 12,
      temperature3: 14
    },
    {
      measurementDate: "2019-10-07T12:00:00",
      temperature1: 11,
      temperature2: 14,
      temperature3: 14
    },
    {
      measurementDate: "2019-10-08T00:00:00",
      temperature1: 7,
      temperature2: 10,
      temperature3: 14
    },
    { temperature1: 12, temperature2: 13, temperature3: 13, measurementDate: "2019-10-08T12:00:00" },
    { temperature1: 11, temperature2: 12, temperature3: 13, measurementDate: "2019-10-09T00:00:00" },
    { temperature1: 16, temperature2: 15, temperature3: 13, measurementDate: "2019-10-09T12:00:00" },
    { temperature1: 14, temperature2: 14, temperature3: 14, measurementDate: "2019-10-10T00:00:00" },
    { temperature1: 14, temperature2: 15, temperature3: 14, measurementDate: "2019-10-10T12:00:00" },
    { temperature1: 12, temperature2: 13, temperature3: 14, measurementDate: "2019-10-11T00:00:00" },
    { temperature1: 15, temperature2: 15, temperature3: 14, measurementDate: "2019-10-11T12:00:00" },
    { temperature1: 11, temperature2: 13, temperature3: 14, measurementDate: "2019-10-12T00:00:00" },
    { temperature1: 17, temperature2: 16, temperature3: 14, measurementDate: "2019-10-12T12:00:00" },
    { temperature1: 12, temperature2: 13, temperature3: 14, measurementDate: "2019-10-13T00:00:00" },
    { temperature1: 18, temperature2: 16, temperature3: 14, measurementDate: "2019-10-13T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 14, measurementDate: "2019-10-14T00:00:00" },
    { temperature1: 18, temperature2: 17, temperature3: 14, measurementDate: "2019-10-14T12:00:00" },
    { temperature1: 14, temperature2: 14, temperature3: 15, measurementDate: "2019-10-15T00:00:00" },
    { temperature1: 19, temperature2: 17, temperature3: 15, measurementDate: "2019-10-15T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-16T00:00:00" },
    { temperature1: 19, temperature2: 17, temperature3: 15, measurementDate: "2019-10-16T12:00:00" },
    { temperature1: 15, temperature2: 15, temperature3: 15, measurementDate: "2019-10-17T00:00:00" },
    { temperature1: 18, temperature2: 17, temperature3: 15, measurementDate: "2019-10-17T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-18T00:00:00" },
    { temperature1: 17, temperature2: 17, temperature3: 15, measurementDate: "2019-10-18T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-19T00:00:00" },
    { temperature1: 17, temperature2: 17, temperature3: 15, measurementDate: "2019-10-19T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-20T00:15:00" },
    { temperature1: 18, temperature2: 17, temperature3: 15, measurementDate: "2019-10-20T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-21T00:00:00" },
    { temperature1: 19, temperature2: 17, temperature3: 15, measurementDate: "2019-10-21T12:00:00" },
    { temperature1: 14, temperature2: 14, temperature3: 15, measurementDate: "2019-10-22T00:00:00" },
    { temperature1: 19, temperature2: 17, temperature3: 15, measurementDate: "2019-10-22T12:00:00" },
    { temperature1: 14, temperature2: 14, temperature3: 15, measurementDate: "2019-10-23T00:00:00" },
    { temperature1: 19, temperature2: 17, temperature3: 15, measurementDate: "2019-10-23T12:00:00" },
    { temperature1: 14, temperature2: 14, temperature3: 15, measurementDate: "2019-10-24T00:00:00" },
    { temperature1: 18, temperature2: 17, temperature3: 15, measurementDate: "2019-10-24T12:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 15, measurementDate: "2019-10-25T00:00:00" },
    { temperature1: 17, temperature2: 16, temperature3: 15, measurementDate: "2019-10-25T12:00:00" },
    { temperature1: 12, temperature2: 13, temperature3: 14, measurementDate: "2019-10-26T00:00:00" },
    { temperature1: 16, temperature2: 16, temperature3: 14, measurementDate: "2019-10-26T12:00:00" },
    { temperature1: 10, temperature2: 12, temperature3: 14, measurementDate: "2019-10-27T00:15:00" },
    { temperature1: 14, temperature2: 15, temperature3: 14, measurementDate: "2019-10-27T12:00:00" },
    { temperature1: 9, temperature2: 12, temperature3: 14, measurementDate: "2019-10-28T00:00:00" },
    { temperature1: 13, temperature2: 14, temperature3: 13, measurementDate: "2019-10-28T12:00:00" },
    { temperature1: 9, temperature2: 12, temperature3: 13, measurementDate: "2019-10-29T00:00:00" },
    { temperature1: 10, temperature2: 12, temperature3: 13, measurementDate: "2019-10-29T12:00:00" },
    { temperature1: 8, temperature2: 11, temperature3: 13, measurementDate: "2019-10-30T00:00:00" },
    { temperature1: 7, temperature2: 11, temperature3: 12, measurementDate: "2019-10-30T12:00:00" },
    { temperature1: 3, temperature2: 8, temperature3: 12, measurementDate: "2019-10-31T00:00:00" },
    { temperature1: 7, temperature2: 9, temperature3: 11, measurementDate: "2019-10-31T12:00:00" },
    { temperature1: 7, temperature2: 9, temperature3: 11, measurementDate: "2019-11-01T00:00:00" },
    { temperature1: 8, temperature2: 10, temperature3: 11, measurementDate: "2019-11-01T12:00:00" },
    { temperature1: 5, temperature2: 9, temperature3: 11, measurementDate: "2019-11-02T00:00:00" },
    { temperature1: 6, temperature2: 9, temperature3: 11, measurementDate: "2019-11-02T12:00:00" },
    { temperature1: 8, temperature2: 9, temperature3: 11, measurementDate: "2019-11-03T00:00:00" },
    { temperature1: 11, temperature2: 11, temperature3: 11, measurementDate: "2019-11-03T12:00:00" },
    { temperature1: 11, temperature2: 12, temperature3: 11, measurementDate: "2019-11-04T00:00:00" },
    { temperature1: 11, temperature2: 12, temperature3: 12, measurementDate: "2019-11-04T12:00:00" },
    { temperature1: 9, temperature2: 11, temperature3: 12, measurementDate: "2019-11-05T00:00:00" },
    { temperature1: 12, temperature2: 12, temperature3: 12, measurementDate: "2019-11-05T12:00:00" },
    { temperature1: 12, temperature2: 12, temperature3: 12, measurementDate: "2019-11-06T00:00:00" },
    { temperature1: 10, temperature2: 12, temperature3: 12, measurementDate: "2019-11-06T12:00:00" },
    { temperature1: 6, temperature2: 11, temperature3: 12, measurementDate: "2019-11-07T00:00:00" }
  ]
};

const ChartMockDataSoilMoisture = {
  lasteMeasurementTime: "2019-11-08T00:00:00",
  probeSerial: "TSZ4",
  soilMoistureChartDataDashboardViewModels: [
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684418,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-17T12:00:00"
    },
    {
      moisture1: 28.607215291346844,
      moisture2: 38.6072152913468441,
      moisture3: 52.607215291346844182,
      measurementDate: "2019-10-18T00:00:00"
    },
    {
      moisture1: 29.607215291346844,
      moisture2: 39.60721529134684478,
      moisture3: 53.607215291346844183,
      measurementDate: "2019-10-18T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468447,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-19T00:00:00"
    },
    {
      moisture1: 25.607215291346844,
      moisture2: 35.6072152913468449,
      moisture3: 67.60721529134684418,
      measurementDate: "2019-10-19T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684457,
      moisture3: 52.60721529134684418,
      measurementDate: "2019-10-20T00:15:00"
    },
    {
      moisture1: 22.607215291346844,
      moisture2: 32.60721529134684486,
      moisture3: 47.60721529134684418,
      measurementDate: "2019-10-20T12:00:00"
    },
    {
      moisture1: 24.607215291346844,
      moisture2: 34.6072152913468443,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-21T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.607215291346844,
      moisture3: 47.60721529134684418,
      measurementDate: "2019-10-21T12:00:00"
    },
    {
      moisture1: 26.607215291346844,
      moisture2: 36.60721529134684486,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-22T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684434,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-22T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684464,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-23T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684435,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-23T12:00:00"
    },
    {
      moisture1: 24.607215291346844,
      moisture2: 34.6072152913468447,
      moisture3: 59.60721529134684418,
      measurementDate: "2019-10-24T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684444,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-24T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468446,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-25T00:00:00"
    },
    {
      moisture1: 21.607215291346844,
      moisture2: 31.60721529134684473,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-25T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468441,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-26T00:00:00"
    },
    {
      moisture1: 21.607215291346844,
      moisture2: 31.6072152913468447,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-26T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468448,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-27T00:15:00"
    },
    {
      moisture1: 24.607215291346844,
      moisture2: 34.60721529134684435,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-27T12:00:00"
    },
    {
      moisture1: 25.607215291346844,
      moisture2: 35.6072152913468449,
      moisture3: 47.60721529134684418,
      measurementDate: "2019-10-28T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468446,
      moisture3: 52.60721529134684418,
      measurementDate: "2019-10-28T12:00:00"
    },
    {
      moisture1: 28.607215291346844,
      moisture2: 38.6072152913468448,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-29T00:00:00"
    },
    {
      moisture1: 22.607215291346844,
      moisture2: 32.6072152913468447,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-29T12:00:00"
    },
    {
      moisture1: 21.607215291346844,
      moisture2: 31.60721529134684414,
      moisture3: 53.60721529134684418,
      measurementDate: "2019-10-30T00:00:00"
    },
    {
      moisture1: 25.607215291346844,
      moisture2: 35.6072152913468442,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-30T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468449,
      moisture3: 55.60721529134684418,
      measurementDate: "2019-10-31T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468446,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-10-31T12:00:00"
    },
    {
      moisture1: 22.607215291346844,
      moisture2: 32.607215291346844,
      moisture3: 52.60721529134684418,
      measurementDate: "2019-11-01T00:00:00"
    },
    {
      moisture1: 24.607215291346844,
      moisture2: 34.60721529134684445,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-01T12:00:00"
    },
    {
      moisture1: 25.607215291346844,
      moisture2: 35.60721529134684492,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-02T00:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684473,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-02T12:00:00"
    },
    {
      moisture1: 26.607215291346844,
      moisture2: 36.6072152913468448,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-03T00:00:00"
    },
    {
      moisture1: 22.607215291346844,
      moisture2: 32.60721529134684466,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-03T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684484,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-04T00:00:00"
    },
    {
      moisture1: 21.607215291346844,
      moisture2: 31.60721529134684433,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-04T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.60721529134684443,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-05T00:00:00"
    },
    {
      moisture1: 22.607215291346844,
      moisture2: 32.60721529134684465,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-05T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468443,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-06T00:00:00"
    },
    {
      moisture1: 23.607215291346844,
      moisture2: 33.6072152913468447,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-06T12:00:00"
    },
    {
      moisture1: 27.607215291346844,
      moisture2: 37.6072152913468445,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-07T00:00:00"
    },
    {
      moisture1: 25.607215291346844,
      moisture2: 35.6072152913468449,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-07T12:00:00"
    },
    {
      moisture1: 26.607215291346844,
      moisture2: 36.607215291346844,
      moisture3: 57.60721529134684418,
      measurementDate: "2019-11-08T00:00:00"
    }
  ]
};
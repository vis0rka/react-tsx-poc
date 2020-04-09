import SoilMoistureChart from "components/Chart/SoilMoisture"
import SoilTemperatureChart from "components/Chart/SoilTemperature"
import LoaderOneDot from "components/LoaderOneDot"
import { useApiCall } from "hooks/useApiCall"
import FramedLayout from "layouts/Framed"
import { chartPocApi } from "mock/api"
import React from "react"

const ChartsMock = () => {
  const [soilTemperatureData, isSoilTemperatureDataLoading] = useApiCall({
    apiCall: chartPocApi.apiGetSoilTemperature,
    args: [200],
  })
  const [soilMoistureData, isoilMoistureDataLoading] = useApiCall({
    apiCall: chartPocApi.apiGetSoilMoisture,
    args: [200],
  })

  return (
    <FramedLayout title="charts">
      {isSoilTemperatureDataLoading || isoilMoistureDataLoading ? (
        <LoaderOneDot />
      ) : (
        <>
          <SoilTemperatureChart
            probeSerial={soilTemperatureData.probeSerial}
            lasteMeasurementTime={soilTemperatureData.lasteMeasurementTime}
            values={soilTemperatureData.soilTemperatureChartDataDashboardViewModels}
          />
          <SoilMoistureChart
            probeSerial={soilMoistureData.probeSerial}
            lasteMeasurementTime={soilMoistureData.lasteMeasurementTime}
            values={soilMoistureData.soilMoistureChartDataDashboardViewModels}
          />
        </>
      )}
    </FramedLayout>
  )
}

export default ChartsMock

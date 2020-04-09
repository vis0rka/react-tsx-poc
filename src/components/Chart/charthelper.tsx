const setYaxis = (measurementsData: number[]) => {
  const getMinValue = (allValues: number[]) => {
    let minValue = Math.min(...allValues);
    minValue = minValue < 0 ? minValue - 10 : minValue;
    return minValue - (minValue % 10);
  };

  const getMaxValue = (allValues: number[]) => {
    let maxValue = Math.max(...allValues);
    maxValue = maxValue < 0 ? maxValue - 10 : maxValue;
    return maxValue - (maxValue % 10) + 10;
  };

  let minValue = getMinValue(measurementsData);
  let maxValue = getMaxValue(measurementsData);

  const tickAmount = (maxValue - minValue) / 10;

  return {
    min: minValue,
    max: maxValue,
    tickAmount: tickAmount
  };
};

export default setYaxis;

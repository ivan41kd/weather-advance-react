import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
export const ForecastChart = () => {
  const forecastResult = useSelector(
    (state: any) => state.weather.forecastValue
  );
  console.log(forecastResult);
  if (forecastResult) {
    const lineChartData = {
      labels: forecastResult.map((item: any) => item.time),
      datasets: [
        {
          label: 'Temp',
          data: forecastResult.map((item: any) => item.temp),
        },
      ],
    };
    return <Line data={lineChartData} />;
  }
};

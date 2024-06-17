import { useGetWeatherByCityQuery } from '../../store/services/services';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';
import { ChildrenProps } from '../../App';
import { ForecastChart } from './ForecastChart';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const MainInfo = ({ children }: ChildrenProps) => {
  const cityResult = useSelector((state: any) => state.weather.city);
  const weatherResult = useGetWeatherByCityQuery(cityResult);

  return (
    <div className='main-info'>
      <div className='main-info__wrapper'>
        {weatherResult.isError != true ? (
          <img
            className='main-info__icon'
            src={`${weatherResult?.data?.current?.condition?.icon}`}
          />
        ) : null}
        {weatherResult.isError != true ? (
          <>
            <>
              <p className='main-info__weather'>
                {weatherResult?.data?.current?.condition?.text}
              </p>
              <p className='main-info__temp'>
                {Math.round(weatherResult?.data?.current?.temp_c)}°
              </p>
            </>
            <ForecastChart />
          </>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default MainInfo;

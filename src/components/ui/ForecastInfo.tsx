import { Link } from 'react-router-dom';
import { useGetWeatherByCityQuery } from '../../store/services/services';
import { useSelector, useDispatch } from 'react-redux';
import { changeForecast } from '../../store/features/weatherslice/slice';
const forecastFunc = (data: Array<any>, timeCity: string) => {
  if (data != undefined) {
    const mapArr = data.map((item) => {
      return item.hour.map((el: any) => {
        return el;
      });
    });

    const mainArr = [...mapArr[0], ...mapArr[1]];
    const filteredArr = mainArr.filter((item) => {
      const forecastTime = new Date(item.time);
      return forecastTime >= new Date(timeCity);
    });
    const newArr = filteredArr
      .map((item: any) => {
        return {
          icon: item.condition.icon,
          temp: Math.round(item.temp_c),
          time: new Date(item.time).toLocaleTimeString('en-US', {
            hour: '2-digit',
          }),
          feelslike: Math.round(item.feelslike_c),
          text: item.condition.text,
          humidity: item.humidity,
          chanceofrain: item.chance_of_rain,
          degree: item.wind_degree,
          wind: Math.round(item.wind_kph),
          windcommon: item.wind_dir,
        };
      })
      .slice(0, 5);
    return newArr;
  }
};

export const ForecastInfo = () => {
  const cityResult = useSelector((state: any) => state.weather.city);
  const dispatch = useDispatch<any>();
  const weatherResult = useGetWeatherByCityQuery(cityResult);
  const forecastResult: any = forecastFunc(
    weatherResult?.data?.forecast?.forecastday,
    weatherResult?.data?.location?.localtime
  );
  if (weatherResult.isError != true) {
    dispatch(changeForecast(forecastResult));
    return (
      <div className='main-info__forecast-wrapper'>
        {weatherResult.data != undefined
          ? forecastResult.map((item: any, index: number) => {
              return (
                <>
                  <Link to={`/weather/${index}`}>
                    <div className='main-info__forecast' key={index}>
                      <p>{item.time}</p>
                      <img
                        className='main-info__forecast-icon'
                        src={`${item.icon}`}
                      />
                      <p>{Math.round(item.temp)}°</p>
                    </div>
                  </Link>
                </>
              );
            })
          : null}
      </div>
    );
  }
};

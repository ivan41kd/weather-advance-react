import { useSelector } from 'react-redux';
import Main from '../../components/Main';
import { useGetWeatherByCityQuery } from '../../store/services/services';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderInfo from '../../components/ui/HeaderInfo';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const AdvanceInfo = () => {
  const cityResult = useSelector((state: any) => state.weather.city);
  const weatherResult = useGetWeatherByCityQuery(cityResult);
  const { id }: any = useParams();
  const forecastResult = useSelector(
    (state: any) => state.weather.forecastValue[id]
  );
  return (
    <>
      <Header>
        <Container>
          <HeaderInfo></HeaderInfo>
        </Container>
      </Header>
      <Main>
        {weatherResult.data != undefined ? (
          <>
            <div className='main-info'>
              <div className='main-info__wrapper'>
                {weatherResult.data != undefined ? (
                  <img
                    className='main-info__icon'
                    src={`${forecastResult.icon}`}
                  />
                ) : null}
                {weatherResult.data != undefined ? (
                  <>
                    <p className='main-info__weather'>{forecastResult.text}</p>
                    <p className='main-info__temp'>
                      {Math.round(forecastResult.temp)}°
                    </p>
                  </>
                ) : null}
              </div>
            </div>
            <div className='info'>
              <div className='info__wrapper'>
                <p className='info__feelslike'>
                  Feels like:
                  {forecastResult.feelslike}°
                </p>
                <p className='info__humidity'>
                  Humidity: {forecastResult.humidity}%
                </p>
                <p className='info__chance'>
                  Chance of rain: {forecastResult.chanceofrain}%
                </p>
                <p className='info__degree'>
                  Degree of wind: {forecastResult.degree}{' '}
                  {forecastResult.windcommon}
                </p>
                <p className='info__speed'>
                  Speed of wind: {forecastResult.wind} km/h
                </p>
              </div>
              <Link to={`/`}>
                <button className='info__return'>Return to main page</button>
              </Link>
            </div>
          </>
        ) : null}
      </Main>
    </>
  );
};

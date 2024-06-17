import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/features/weatherslice/slice';
import { useGetWeatherByCityQuery } from '../../store/services/services';
const HeaderInfo = () => {
  const dispatch = useDispatch<any>();
  const weatherResult = useSelector((state: any) => state.weather);
  const cityResult = useSelector((state: any) => state.weather.city);
  const result = useGetWeatherByCityQuery(cityResult);
  const time = new Date(result?.data?.location?.localtime).toLocaleTimeString(
    'ru',
    {
      hour: '2-digit',
      minute: '2-digit',
    }
  );
  return (
    <div className='header__info-wrapper'>
      {result.isError != true ? (
        <>
          <p className='header__city'>{weatherResult.city}</p>
          <form
            action=''
            className='header__search-form'
            onSubmit={(e: any) => {
              e.preventDefault();
              dispatch(changeCity(e.target[0].value));
            }}
          >
            <input type='text' className='header__search' />
          </form>

          <p className='header__time'>{time}</p>
        </>
      ) : (
        <form
          action=''
          className='header__search-form'
          onSubmit={(e: any) => {
            e.preventDefault();
            dispatch(changeCity(e.target[0].value));
          }}
        >
          <input type='text' className='header__search' />
        </form>
      )}
      <></>
    </div>
  );
};
export default HeaderInfo;

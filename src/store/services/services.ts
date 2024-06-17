// export const fetchWeather = createAsyncThunk(
//   'weather/fetchWeather',
//   async (city: string) => {
//     const response = await axios.get(
//       `http://api.weatherapi.com/v1/forecast.json?key=9cb3c36042914cc4b2f202522240206&q=${city}&days=2&aqi=no&alerts=no`
//     );
//     const resData = [
//       {
//         city: response.data.location.name,
//         icon: response.data.current.condition.icon,
//         temp: Math.round(response.data.current.temp_c),
//         lat: response.data.location.lat,
//         lon: response.data.location.lon,
//         time: response.data.location.localtime,
//         citytime: new Date(response.data.location.localtime).toLocaleTimeString(
//           'ru',
//           {
//             hour: '2-digit',
//             minute: '2-digit',
//           }
//         ),
//         timestamp: response.data.location.localtime_epoch,
//         weathername: response.data.current.condition.text,
//         forecast: response.data.forecast.forecastday,
//       },
//     ];
//     return resData;
//   }
// );
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = '9cb3c36042914cc4b2f202522240206';
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `
    http://api.weatherapi.com/v1/`,
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<any, string>({
      query: (city) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=2&aqi=no&alerts=no`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;

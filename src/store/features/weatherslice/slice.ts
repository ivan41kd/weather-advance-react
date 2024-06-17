import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface resultProps {
  city: string;
  time?: any;
  citytime?: any;
  weather?: string;
  icon: any;
  temp: number;
  lat: number;
  lon: number;
  timestamp: number;
  weathername: string;
  forecast: Array<any>;
}
export interface forecastProps {
  icon: string;
  temp: number;
  time: string;
}

export interface CounterState {
  weatherValue: resultProps[];
  forecastValue: forecastProps[];
  city: string;
  mode: any;
}

const initialState: CounterState = {
  weatherValue: [],
  forecastValue: [],
  city: 'Moscow',
  mode: 'light',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<any>) => {
      state.weatherValue = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changeForecast: (state, action: PayloadAction<any>) => {
      state.forecastValue = action.payload;
    },
    changeMode: (state, action: PayloadAction<any>) => {
      state.mode = action.payload;
    },
  },
});
export const { changeValue, changeCity, changeForecast, changeMode } =
  weatherSlice.actions;

export default weatherSlice.reducer;

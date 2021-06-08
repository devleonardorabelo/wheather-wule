import Axios from 'axios';
import {TWeather, UserCoords} from '../types';
import ENV from '../../env.json';

async function getWeather(
  location: string | UserCoords,
  days: string = '1',
): Promise<TWeather> {
  try {
    const {data} = await Axios.get(`${ENV.API_URL}/forecast.json`, {
      params: {
        key: ENV.API_KEY,
        q: location,
        lang: 'pt',
        days,
      },
    });
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject({
      error: 'Erro ao recuperar o clima, tente novamente.',
    });
  }
}

export default getWeather;

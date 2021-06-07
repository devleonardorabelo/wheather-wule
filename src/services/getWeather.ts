import Axios from 'axios';
import {TWeather} from '../types';
import ENV from '../../env.json';

async function getWeather(city: string, days: string = '1'): Promise<TWeather> {
  try {
    const {data} = await Axios.get(ENV.API_URL, {
      params: {
        key: ENV.API_KEY,
        q: city,
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

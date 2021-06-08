import Axios from 'axios';
import {TimeZone, UserCoords} from '../types';
import ENV from '../../env.json';

async function getTimeZone(location: string | UserCoords): Promise<TimeZone> {
  try {
    const {data} = await Axios.get(`${ENV.API_URL}/timezone.json`, {
      params: {
        key: ENV.API_KEY,
        q: location,
      },
    });
    return Promise.resolve(data);
  } catch (err) {
    console.log(err);
    return Promise.reject({
      error: 'Erro ao recuperar o fuso, tente novamente.',
    });
  }
}

export default getTimeZone;

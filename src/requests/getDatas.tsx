import { ObjectType } from '../interfaces/Cards';
import api from './api';

const getDatas = async () => {
  try {
    const fetchDatas : ObjectType = await (await fetch(api)).json();
    const datas = {
      backCard: fetchDatas.backCard,
      cards: fetchDatas.cards,
      timer: fetchDatas.timer,
    };
    console.log(fetchDatas);

    return datas;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getDatas;

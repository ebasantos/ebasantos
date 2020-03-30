import api from "../configs/Api";
import md5 from "js-md5";

const publicKey = "4785863f1e8da1b3123d5f07ec37aed1";
const privateKey = "43e735e3028a27343a3dda18ed0ebba629e1366e";

const timeStamp = Number(new Date());
const hash = md5.create().update(timeStamp + privateKey + publicKey);

export const getHeroes = async ({ limit, name }) => {
  if (name) {
    const response = await api.get(
      `/characters?nameStartsWith=${name}&ts=${timeStamp}&orderBy=name&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
    );
    return response.data;
  } else {
    const response = await api.get(
      `/characters?ts=${timeStamp}&orderBy=name&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
    );
    return response.data;
  }
};

export const getHeroComics = async (heroId, limit) => {
  const response = await api.get(
    `/characters/${heroId}/comics?ts=${timeStamp}&orderBy=title&limit=${limit}&apikey=${publicKey}&hash=${hash.hex()}`
  );
  return response.data;
};

import _ from "lodash";
import CryptoJS from "react-native-crypto-js";
import * as ENV_KEYS from "../../config/envKeys";
const TOKEN = ENV_KEYS.ENV_KEYS.TOKEN;
export const DecryptApi = (enCryptData, authData) => {
  if (enCryptData?.data) {
    const bytes = CryptoJS.AES.decrypt(enCryptData?.data, TOKEN);
    const enCryptHomeFeedData = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
    if (enCryptData?.token && authData) {
      const signInDetails = {
        ...authData?.data,
        token: enCryptData?.token,
      };
      const isTokenData = {
        data: signInDetails,
        loading: false,
      };
      return {
        data: enCryptHomeFeedData,
        token: isTokenData,
      };
    } else {
      return {
        data: enCryptHomeFeedData,
      };
    }
  } else return null;
};
export const EncryptApiGetData = (data) => {
  const cryptData = CryptoJS.AES.encrypt(JSON.stringify(data), TOKEN).toString();
  return { data: encodeURI(cryptData).replace(/\+/gi, "%2B") };
};

export const EncryptPostData = (data) => {
  const cryptData = CryptoJS.AES.encrypt(JSON.stringify(data), TOKEN).toString();
  return { data: cryptData };
};

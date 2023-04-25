import CryptoJS from "react-native-crypto-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as ENV_KEYS from "../../../config/envKeys";
import { EncryptApiGetData, EncryptPostData } from "../../hof/apiHelperFunctions";
export const useEnCryptGetApi = ({ path, service, name, skipQuery }) => {
  const [newData, setNewData] = useState({});
  const [encryptData, setEncryptData] = useState("");
  const TOKEN = ENV_KEYS.ENV_KEYS.TOKEN;
  const authData = useSelector((state) => state?.userDetails?.userDetails);
  const SKIP_CONDITION = skipQuery ? skipQuery : encryptData?.data && path ? false : true;
  useEffect(() => {
    const enCryptData = {
      path: path,
      service: service ? service : "core",
      userInfo: {
        deviceId: authData?.data?.deviceId ? authData?.data?.deviceId : "ffbe445",
        userId: authData?.data?.userId ? authData?.data?.userId : 354,
      },
    };
    const cryptData = EncryptApiGetData(enCryptData);
    setEncryptData(cryptData);
  }, [path]);

  const { data, isError, isLoading, isFetching } = name(encryptData, {
    skip: SKIP_CONDITION,
  });

  useEffect(() => {
    if (data?.data) {
      const bytes = CryptoJS.AES.decrypt(data?.data, TOKEN);
      const enCryptHomeFeedData = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
      if (data?.token && authData) {
        const signInDetails = {
          ...authData?.data,
          token: data?.token,
        };
        const isTokenData = {
          data: signInDetails,
          loading: false,
        };
        setNewData({ data: enCryptHomeFeedData, token: isTokenData });
      } else {
        setNewData({
          data: enCryptHomeFeedData,
        });
      }
    } else setNewData({});
  }, [data?.data]);

  return {
    data: newData,
    isLoading,
    isError,
    isFetching,
  };
};

export const useEnCryptPostApi = ({ path, service, name }) => {
  const [newData, setNewData] = useState({});
  // const TOKEN = KEYS?.TOKEN;
  const TOKEN = ENV_KEYS.ENV_KEYS.TOKEN;
  const authData = useSelector((state) => state?.userDetails?.userDetails);

  const [triggerPostEndPoint, { data, isLoading, isError, isFetching }] = name();

  const handleTrigger = (val) => {
    const data1 = {
      path: path,
      service: service,
      userInfo: {
        deviceId: authData?.data?.deviceId ? authData?.data?.deviceId : "ffbe445",
        userId: authData?.data?.userId ? authData?.data?.userId : 234,
      },
      reqBody: val,
    };
    const enCryptDetails = EncryptPostData(data1);

    triggerPostEndPoint(enCryptDetails);
  };

  useEffect(() => {
    if (data?.data) {
      const bytes = CryptoJS.AES.decrypt(data?.data, TOKEN);
      const enCryptPostData = JSON.parse(bytes?.toString(CryptoJS.enc.Utf8));
      if (data?.token && authData) {
        const signInDetails = {
          ...authData?.data,
          token: data?.token,
        };
        const isTokenData = {
          data: signInDetails,
          loading: false,
        };
        setNewData({ data: enCryptPostData, token: isTokenData });
      } else {
        setNewData({
          data: enCryptPostData,
          token: "234jdydud",
        });
      }
    } else setNewData({});
  }, [data?.data]);
  return {
    data: newData?.data,
    isLoading,
    isError,
    isFetching,
    handleTrigger,
  };
};

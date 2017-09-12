import { AsyncStorage, NativeModules } from 'react-native';
let LabsBridge = NativeModules.LabsBridge;

const getToken = async () => await AsyncStorage.getItem('@POSSDK:token')
const setToken = async (token) => await AsyncStorage.setItem('@POSSDK:token', token)

export const buildURL = (path, param) => {
  let url = 'pp://staging' + path + "?"
  if (param) {
    for (var [key, value] of Object.entries(param)) {
      if (value) url += key + '=' + value + '&'
    }
  }
  return url.slice(0, -1)
}

export const callAPI = (url) => {
  console.log(url);
  // let backendURL = 'https://staging.p2shop.cn/jan-api' + url.substring(12)
  return LabsBridge.callAPI(url).then((data) => {
    var rs = JSON.parse(data);
    console.log(rs);
    return rs
  }).catch(err => {
    console.error("err", err);
    throw err
  });
}
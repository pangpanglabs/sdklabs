import { AsyncStorage } from 'react-native';

const getToken = async () => await AsyncStorage.getItem('@POSSDK:token')
const setToken = async (token) => await AsyncStorage.setItem('@POSSDK:token', token)

export const buildURL = (path, param) => { 
  let url = 'pp://staging' + path + "?"
  if(param) {
    for (var [key, value] of Object.entries(param)) {
      if(value) url += key + '=' + value + '&'
    }
  }
  return url.slice(0,-1)
}

export const callAPI = async (url, cb) => {  
  let backendURL = 'https://staging.p2shop.cn/jan-api' + url.substring(12)
  
  let fetchInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + await getToken()
    }
  }

  setTimeout(() => {
    fetch(backendURL, fetchInit)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      if(url.substring(12,21) === '/account/' && json.success){
        setToken(json.result.token)
        console.log('set token:',json.result.token)
      }
      if (cb) cb(json)
    }).catch(function(ex) {        
      console.log('parsing failed', ex)
    })
  }, 0)
}
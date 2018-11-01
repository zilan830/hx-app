import request from './request'

const apis = {};

apis.login = obj => {
  return request(obj,"/api/users",'GET').then(res => {
      if(res.code === 200){
          return res.data;
      }else{
          throw "error";
      }
  })
};

export default apis;
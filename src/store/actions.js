import axios from 'axios';
import * as types from './types';
import router from '../router'
 
let actions={
  [types.VIEW_NAV]:({commit},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_FOOT]:({commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit},payload)=>commit(types.VIEW_LOADING,payload),
  [types.UPDATA_DATA]:({commit,state},payload)=>{
		axios({
			url:payload.url,
		 }).then(
			res=>commit(payload.mutationsType,res.data)
		)
  },
  [types.CHECK_USER]:({commit,state},payload)=>{
    // console.log('CHECK_USER123',payload);
		return axios({
			url:'/data/user.json',
			/* params:{
			  username:payload.username,
			  password:payload.password,
			} */
		 }).then(
			res=>commit(types.CHECK_USER,res.data)
		 )
  }
};
export default actions;
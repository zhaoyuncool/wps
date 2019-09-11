import * as types from './types'

let mutations={
  [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATA_HOME]:(state,payload)=>state.home=payload,
  [types.UPDATA_FOLLOW]:(state,payload)=>state.follow=payload,
  [types.CHECK_USER]:(state,payload)=>state.user=payload
};
export default mutations;
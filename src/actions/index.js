import { INCREMENT } from './actionType'
import { GET_MORE } from './actionType'
import request from './request'

export  const increment = () => {
    return async dispatch =>{
       const res = await request({
           url:'/data.json',
           params:{
               token:''
           }
       })
       dispatch({
           type:INCREMENT,
           payload:res.data
       })
    }
}
export  const get_more = () => {
    return async dispatch => {
        const result = await request({
            url:'/list.json',
            params:{

            }
        })
        dispatch({
            type:GET_MORE,
            payload:result
        })
        console.log(result)
    }
}

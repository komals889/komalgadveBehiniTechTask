  import axios from 'axios'
import {
        ALL_USER_FAIL,ALL_USER_REQUEST,ALL_USER_SUCCESS
  } from '../constants/user-constants'
  
  export const getAllUserAction=(users)=>async(dispatch)=>{
        try {
            dispatch({type:ALL_USER_REQUEST})
             
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${users}&key=AIzaSyBUWQfSknEOUfJQbaRdVcR9hugZUwNQNuw`)
                          .then(res=>res.json()).then(data=>dispatch({type:ALL_USER_SUCCESS,payload:data.items}))
                           
            
             
            // console.log(data);
            
        } catch (error) {
            dispatch({type:ALL_USER_FAIL,payload:error})
        }
  }
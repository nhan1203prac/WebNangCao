import axios from "axios"
import { ADD_COIN_TO_WATCHLIST_FAILURE, ADD_COIN_TO_WATCHLIST_REQUEST, ADD_COIN_TO_WATCHLIST_SUCCESS, GET_USER_WATCHLIST_FAILURE, GET_USER_WATCHLIST_REQUEST, GET_USER_WATCHLIST_SUCCESS } from "./ActionType"

export const getUserWatchlist = ({jwt})=>async(dispatch)=>{
    dispatch({type:GET_USER_WATCHLIST_REQUEST})
    const baseUrl = "http://localhost:8080"
    try {
        const response = await axios.get(`${baseUrl}/api/watchlist/user`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
        dispatch({type:GET_USER_WATCHLIST_SUCCESS,payload:response.data})
        console.log("watchlist", response.data)
    } catch (error) {
        console.log("error", error)
        dispatch({type:GET_USER_WATCHLIST_FAILURE,payload:error.message})
    }
}

export const addItemToWatchlist = ({coinId,jwt})=>async(dispatch)=>{
    dispatch({type:ADD_COIN_TO_WATCHLIST_REQUEST})
    const baseUrl = "http://localhost:8080"
    try {
        const response = await axios.patch(`${baseUrl}/api/watchlist/add/coin/${coinId}`,null,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })
        dispatch({type:ADD_COIN_TO_WATCHLIST_SUCCESS,payload:response.data})
        console.log("watchlist", response.data)
    } catch (error) {
        console.log("error", error)
        dispatch({type:ADD_COIN_TO_WATCHLIST_FAILURE,payload:error.message})
    }
}
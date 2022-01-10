import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR} from "./constants"

const initialState = {
    news: [],
    loading: true,
    error: false
}

const newsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NEWS_REQUEST:{
            return{
                ...state,
                loading: true,
                error: false
            }
        }
        case GET_NEWS_SUCCESS:{
            return{
                ...state,
                loading: false,
                news: action.payload
            }
        }
        case GET_NEWS_ERROR:{
            return{
                ...state,
                loading: false,
                error: true,
            }
        }
        default:{
            return state;
        }
    }
}

export default newsReducer
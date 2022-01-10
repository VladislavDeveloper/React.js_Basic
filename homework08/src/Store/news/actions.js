import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "./constants";

const NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d9dea87035c44d09be6d1f4742d2d1f"


export const getNewsRequestAction = ( ) => ({
    type: GET_NEWS_REQUEST
})

export const getNewsSuccessAction = (newsData) => ({
    type: GET_NEWS_SUCCESS,
    payload: newsData
})

export const getNewsErrorAction = ( ) => ({
    type: GET_NEWS_ERROR
})

export const handleFetchNewsWithThunk = () => async (dispatch, getState) => {
    dispatch(getNewsRequestAction())
    try{
        const response = await fetch(NEWS_API);

        if(!response.ok){
            throw new Error()
        }

        const result = await response.json();

        dispatch(getNewsSuccessAction(result.articles));
    }
    catch (error) {
        dispatch(getNewsErrorAction());
    }
}
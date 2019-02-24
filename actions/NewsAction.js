import axios from 'axios';
import {
    FETCH_ITEM,
    FETCH_ITEM_FAILED,
    FETCH_HEADLINES_SUCCESS,
    FETCH_ALL_NEWS_SUCCESS,
    FETCH_DETAIL_SUCCESS,
} from './actionTypes';
import config from '../utils/env';

export const fetchHeadlines = () => {
    return async (dispatch) => {
        try {

            dispatch({type: FETCH_ITEM});
            const response = await axios.get(`${config.url}/top-headlines?country=id`, {
                headers: {
                    'Authorization': `Bearer ${config.api_key}`
                }
            })

            dispatch({type: FETCH_HEADLINES_SUCCESS, payload: response.data.articles});
        } catch (error) {

            dispatch({type: FETCH_ITEM_FAILED, payload: error.response});
        }
    }
};

export const fetchNews = () => {
    return async (dispatch) => {
        try {

            dispatch({type: FETCH_ITEM});
            const response = await axios.get(`${config.url}/everything?q='news'`, {
                headers: {
                    'Authorization': `Bearer ${config.api_key}`
                }
            })

            dispatch({type: FETCH_ALL_NEWS_SUCCESS, payload: response.data.articles});
        } catch (error) {

            dispatch({type: FETCH_ITEM_FAILED, payload: error.response});
        }
    }
};

export const fetchDetail = ({data}) => {
    return (dispatch) => {
        dispatch({type: FETCH_DETAIL_SUCCESS, payload: data});
    }
};

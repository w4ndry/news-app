import {
    FETCH_ITEM,
    FETCH_ITEM_FAILED,
    FETCH_HEADLINES_SUCCESS,
    FETCH_ALL_NEWS_SUCCESS,
    FETCH_DETAIL_SUCCESS,
} from "../actions/actionTypes";

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    headlines: [],
    allNews: [],
    detail: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEM:
            return {
                isLoading: true,
                error: ''
            }
        case FETCH_ITEM_FAILED:
            return {
                isLoading: false,
                error: action.payload
            }
        case FETCH_HEADLINES_SUCCESS:
            return {
                ...state,
                headlines: action.payload,
                isLoading: false
            }
        case FETCH_ALL_NEWS_SUCCESS:
            return {
                ...state,
                allNews: action.payload,
                isLoading: false
            }
        case FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return state
    }
}

import { handleActions } from 'redux-actions';
import axios from 'axios';
import { Map } from 'immutable';
import URL from '../config/url'

function getPostAPI(URL) {
    return axios.get(URL)
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPost = (postId) => dispatch => {
    dispatch({type: GET_POST_PENDING});
    return getPostAPI(URL).then(
        (response) => {
            console.log(`URL is ... ${URL}`);
            console.log(response.data.list[0]);
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: GET_POST_FAILURE,
            payload: error
        });
    })
}

const initialState = Map({
    pending: false,
    error: false,
    data: Map({
        items:  []
    })
})

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return state.set('pending', true)
                    .set('error', false)
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { list } = action.payload.data;
        return state.setIn(['data', 'items'], list)
    },
    [GET_POST_FAILURE]: (state, action) => {
        return state.set('pending', false)
                    .set('error', true)
    }
}, initialState);
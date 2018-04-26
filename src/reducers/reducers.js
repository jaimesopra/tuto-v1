import initialState from '../store';
import {ADD_NAME_TO_LIST} from '../actions/actionTypes';
import {REMOVE_NAME_TO_LIST} from '../actions/actionTypes'



export const names =(state=initialState,action) =>{
    switch (action.type){
        case ADD_NAME_TO_LIST :
            return [...state,action.name];
        case REMOVE_NAME_TO_LIST :
            return  state.filter(element=> element !== action.name);
        default:
            return state;
    }
}

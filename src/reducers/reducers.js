import {initialState,initialStatePersons,}from '../store/initialState';
import {ADD_NAME_TO_LIST} from '../actions/actionTypes';
import {REMOVE_NAME_TO_LIST} from '../actions/actionTypes'
import {AJOUTER_PERSONS} from '../actions/actionTypes'
import {REMOVE_PERSONS} from '../actions/actionTypes'


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
export const persons =(state=initialStatePersons,action) =>{
    switch (action.type){
        case AJOUTER_PERSONS :
            return [...state,action.person];
        case REMOVE_PERSONS :
            return state.filter(element=> element !== action.person);
        default:
            return state;
    }
}


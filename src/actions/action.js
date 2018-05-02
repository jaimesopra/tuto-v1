
import {ADD_NAME_TO_LIST,REMOVE_NAME_TO_LIST,AJOUTER_PERSONS} from './actionTypes';

export function addNameToList(name) {
    return {
        type: ADD_NAME_TO_LIST,
        name: name,

    }
};
export function removeNameToList(name) {
    return {
        type: REMOVE_NAME_TO_LIST,
        name: name,

    }
};
export function ajouterPersons(person) {
    return {
        type: AJOUTER_PERSONS,
        person: person,

    }
};

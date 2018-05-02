
import {ADD_NAME_TO_LIST,REMOVE_NAME_TO_LIST,AJOUTER_PERSONS,REMOVE_PERSONS} from './actionTypes';

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
export function removePersons(person) {
    return {
        type: REMOVE_PERSONS,
        person: person,

    }
};

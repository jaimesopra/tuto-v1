import ADD_NAME_TO_LIST from './actionsType';
import REMOVE_NAME_TO_LIST from './actionsType';

export function addINameToList(name) {
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

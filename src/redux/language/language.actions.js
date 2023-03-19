import * as actions from '../action.types';

export const changeLanguage = (language) => {
    return {
        type: actions.changeLanguage,
        payload: language,
    }
}
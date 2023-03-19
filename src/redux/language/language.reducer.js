import * as actions from "../action.types";

const initialState = {
  language: 'EN',
}

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.changeLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

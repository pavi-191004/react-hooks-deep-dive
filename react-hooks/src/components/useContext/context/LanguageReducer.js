import { LANG_CHANGE } from "./actionType";
export const LanguageReducer = (state, action) => {
  switch (action.type) {
    case LANG_CHANGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

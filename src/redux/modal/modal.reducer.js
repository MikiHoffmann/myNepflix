import { modalActions } from "../action.types"

const initialState = {
  modalContainer: false,
}
export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalActions.modalShow:
      return {
        ...state,
        modalContainer: action.payload,
      }
    case modalActions.modalHide:
      return {
        ...state,
        modalContainer: action.payload,
      }
    default:
      return state
  }
}

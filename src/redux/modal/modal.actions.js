import { modalActions } from "../action.types"

export const toggleModal = (bool) => ({
  type: bool ? modalActions.modalShow : modalActions.modalHide,
  payload: bool,
})
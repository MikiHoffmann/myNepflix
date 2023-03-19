import "./InfoModal.scss"
import "../Buttons/ButtonStyle.scss"
import { IconClose } from "../Icons/IconClose"
import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "../../redux/modal/modal.actions"

const InfoModal = (img) => {
  const modalVisible = useSelector((state) => state.modal.modalContainer)
  const dispatch = useDispatch()
  const rootElement = document.body
  if (modalVisible) {
    rootElement.style.overflow = "hidden"
  }
  return (
    <>
      {modalVisible ? (
        <div
          className="modalBackground"
          onClick={() => dispatch(toggleModal(!modalVisible))}
        >
          <div
            className="modalInfoContainer"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="buttonBasic buttonModalClose"
              onClick={() => dispatch(toggleModal(!modalVisible))}
            >
              <IconClose />
            </button>
            <img src={img} alt={img} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default InfoModal

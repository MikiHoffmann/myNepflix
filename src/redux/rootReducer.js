import { combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"

import { languageReducer } from "./language/language.reducer"
import { modalReducer } from "./modal/modal.reducer"

const persistConfig = {
  key: "root",
  storage,
  blacklist: "gridActive",
}

const rootReducer = combineReducers({
  language: languageReducer,
  modal: modalReducer,
})

export default persistReducer(persistConfig, rootReducer)

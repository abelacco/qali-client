import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice" // lo podemos importar con cualquier nombre

export const store = configureStore({
  reducer: {
    user: userReducer, // le ponemos cualquier nombre pero ponemos la importacion
  },
})
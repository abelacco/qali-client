import { createSlice } from '@reduxjs/toolkit'
import { updateSchedules } from './schedulesAPI'
import { STATUS_API } from '../../../utils/constantes'

export const schedulesSlice = createSlice({
  name: 'schedules',
  initialState: { schedules: [], status: STATUS_API.IDLE, error: null },
  reducers: {
    updateSchedulestStart: (state) => {
      state.status = STATUS_API.LOADING
    },
    updateSchedulesSuccess: (state, action) => {
      state.status = STATUS_API.SUCCEEDED
      state.schedules.push(action.payload)
    },
    updateSchedulesFailure: (state, action) => {
      state.status = STATUS_API.FAILED
      state.error = action.payload
    },
  },
})

export const { updateSchedulestStart, updateSchedulesSuccess, updateSchedulesFailure } =
  schedulesSlice.actions

export const updateSchedulesAsync = (schedules, id) => async (dispatch) => {
  try {
    dispatch(updateSchedulestStart())
    const response = await updateSchedules(schedules, id)
    dispatch(updateSchedulesSuccess(response.data))
  } catch (err) {
    dispatch(updateSchedulesFailure(err.response.data.message))
  }
}

export default schedulesSlice.reducer

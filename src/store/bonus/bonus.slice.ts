import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  numberOfBonus: number
}

const initialState: IInitialState = {
  numberOfBonus: 0,
}

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    setNumberOfBonus: (state, action) => {
      state.numberOfBonus = action.payload
    },
  },
})

export const bonusActions = bonusSlice.actions
export const bonusReducer = bonusSlice.reducer

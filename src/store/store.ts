import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { bonusSlice } from './bonus/bonus.slice'
import { accessApi } from './access/access.api'
import { bonusApi } from './bonus/bonus.api'

const rootReducer = combineReducers({
  [accessApi.reducerPath]: accessApi.reducer,
  [bonusApi.reducerPath]: bonusApi.reducer,
  bonus: bonusSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(accessApi.middleware)
      .concat(bonusApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

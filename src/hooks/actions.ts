import { bindActionCreators } from '@reduxjs/toolkit'
import { bonusActions } from './../store/bonus/bonus.slice'
import { useDispatch } from 'react-redux'

const actions = {
  ...bonusActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

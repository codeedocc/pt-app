import { bindActionCreators } from '@reduxjs/toolkit'
import { accessActions } from './../store/access/access.slice'
import { bonusActions } from './../store/bonus/bonus.slice'
import { useDispatch } from 'react-redux'

const actions = {
  ...bonusActions,
  ...accessActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

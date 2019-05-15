import {useReducer} from 'react'
import {reducer, open, close} from './duck'

const useAccordion = (customReducer = (s, a) => a.changes) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      const changes = reducer(state, action)
      return customReducer(state, {changes, ...action})
    },
    {openIndexes: [0]},
  )

  return {
    openIndexes: state.openIndexes,
    handleItemClick: index => {
      state.openIndexes.includes(index)
        ? dispatch(close(index))
        : dispatch(open(index))
    },
  }
}

export default useAccordion

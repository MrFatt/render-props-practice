import {useReducer} from 'react'
import {reducer, updateIndexes} from './duck'

const useAccordion = () => {
  const [state, dispatch] = useReducer(reducer, {openIndexes: [0]})

  return {
    openIndexes: state.openIndexes,
    handleItemClick: index => {
      dispatch(updateIndexes(index))
    },
  }
}

export default useAccordion

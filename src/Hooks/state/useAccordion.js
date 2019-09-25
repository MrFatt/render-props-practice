import {useState} from 'react'

const useAccordion = (customReducer = (s, a) => a.changes) => {
  const [openIndexes, setOpenIndexes] = useState([0])

  const handleItemClick = index => {
    const type = openIndexes.includes(index) ? 'closing' : 'opening'
    if (type === 'closing') {
      setOpenIndexes(openIndexes => {
        const changes = openIndexes.filter(i => i !== index)
        return customReducer(state, {changes, ...action})
      })
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return {
    openIndexes,
    handleItemClick,
  }
}

export default useAccordion

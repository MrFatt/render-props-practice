const UPDATE_INDEXES = 'UPDATE_INDEXES'

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_INDEXES:
      return {
        openIndexes: state.openIndexes.includes(action.value)
          ? state.openIndexes.filter(i => i !== action.value)
          : [...state.openIndexes, action.value],
      }
    default:
      return state
  }
}

export const updateIndexes = index => ({
  type: UPDATE_INDEXES,
  value: index,
})

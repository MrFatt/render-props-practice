const OPENING = 'opening'
const CLOSING = 'closing'

export const reducer = (state, action) => {
  switch (action.type) {
    case OPENING:
      return {
        openIndexes: [...state.openIndexes, action.value],
      }
    case CLOSING:
      return {
        openIndexes: state.openIndexes.filter(i => i !== action.value),
      }
    default:
      return state
  }
}

export const open = index => ({
  type: OPENING,
  value: index,
})

export const close = index => ({
  type: CLOSING,
  value: index,
})

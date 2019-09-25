import produce from 'immer'
const OPENING = 'opening'
const CLOSING = 'closing'

export const reducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPENING:
        draft.openIndexes.push(action.value)
        return

      case CLOSING:
        draft.openIndexes.splice(draft.openIndexes.indexOf(action.value), 1)
        return
    }
  })

export const open = index => ({
  type: OPENING,
  value: index,
})

export const close = index => ({
  type: CLOSING,
  value: index,
})

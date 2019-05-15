import React from 'react'

const withAccordion = ComposedComponent => {
  return class extends React.Component {
    state = {openIndexes: [0]}

    static defaultProps = {
      stateReducer: (state, changes) => changes,
      onStateChange: () => {},
    }
    internalSetState(changes) {
      this.setState(
        state => {
          console.log(this.props);
          const changesObject =
            typeof changes === 'function' ? changes(state) : changes
          return this.props.stateReducer(state, changesObject)
        },
        () => {
          this.props.onStateChange(this.state)
        },
      )
    }
    handleItemClick = index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index)
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing
            ? state.openIndexes.filter(i => i !== index)
            : [...state.openIndexes, index],
        }
      })
    }
    render() {
      return (
        <ComposedComponent
          openIndexes={this.state.openIndexes}
          handleItemClick={this.handleItemClick}
          {...this.props}
        />
      )
    }
  }
}

export default withAccordion

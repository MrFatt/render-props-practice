import React from 'react'
import {AccordionButton, AccordionItem, AccordionContents} from './shared'
import useAccordion from './useAccordion'

function AccordionUI({items, stateReducer}) {
  const {openIndexes, handleItemClick} = useAccordion(stateReducer)

  return (
    <div
      style={{
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 60,
      }}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.title} direction="vertical">
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => handleItemClick(index)}
          >
            {item.title}{' '}
            <span>{openIndexes.includes(index) ? '👇' : '👈'}</span>
          </AccordionButton>
          <AccordionContents isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  )
}

export default AccordionUI

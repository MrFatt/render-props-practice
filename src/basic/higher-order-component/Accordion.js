import React from 'react'
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabItems,
  TabItem,
  TabButtons,
  TabButton,
} from '../shared'

function AccordionUI({items, openIndexes, handleItemClick}) {
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
          <AccordionContents isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => handleItemClick(index)}
          >
            {item.title}{' '}
            <span>{openIndexes.includes(index) ? '👇' : '👈'}</span>
          </AccordionButton>
        </AccordionItem>
      ))}
    </div>
  )
}

export default AccordionUI

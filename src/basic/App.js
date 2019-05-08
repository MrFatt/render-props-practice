import React, {useState} from 'react'
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
  TabButton,
  TabItem,
  TabItems,
  TabButtons,
} from '../shared'

const Basic = ({items, above}) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const handleItemClick = index => {
    openIndexes.includes(index)
      ? setOpenIndexes(openIndexes.filter(i => i !== index))
      : setOpenIndexes([...openIndexes, index])
  }

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={item.title} direction="vertical">
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => handleItemClick(index)}
            above={above}
          >
            {item.title}{' '}
            <span>
              {openIndexes.includes(index) ? (above ? '👆' : '👇') : '👈'}
            </span>
          </AccordionButton>
          <AccordionContents above={above} isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  )
}

export default Basic

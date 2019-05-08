import React, {useState} from 'react'
import {AccordionButton, AccordionItem, AccordionContents} from './shared'

const Basic = ({items, above, right, left}) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const handleItemClick = index => {
    openIndexes.includes(index)
      ? setOpenIndexes(openIndexes.filter(i => i !== index))
      : setOpenIndexes([...openIndexes, index])
  }

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
        <AccordionItem
          key={item.title}
          direction={right || left ? 'horizontal' : 'vertical'}
        >
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => handleItemClick(index)}
            above={above}
            left={left}
          >
            {item.title}{' '}
            <span>
              {openIndexes.includes(index)
                ? above
                  ? '👆'
                  : left
                  ? '👈'
                  : right
                  ? '👉'
                  : '👇'
                : left || right
                ? '👆'
                : '👈'}
            </span>
          </AccordionButton>
          <AccordionContents
            isOpen={openIndexes.includes(index)}
            above={above}
            left={left}
          >
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  )
}

export default Basic

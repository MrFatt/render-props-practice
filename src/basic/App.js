import React, {useState} from 'react'
import {AccordionButton, AccordionItem, AccordionContents} from './shared'

const Basic = ({items, position, single}) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const handleItemClick = index => {
    openIndexes.includes(index)
      ? setOpenIndexes(openIndexes.filter(i => i !== index))
      : single
      ? setOpenIndexes([index])
      : setOpenIndexes([...openIndexes, index])
  }

  const above = 'above' === position
  const left = 'left' === position
  const right = 'right' === position

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
          direction={
            ['right', 'left'].includes(position) ? 'horizontal' : 'vertical'
          }
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
                : ['right', 'left'].includes(position)
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

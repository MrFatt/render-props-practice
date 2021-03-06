import React, {useState} from 'react'
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabItems,
  TabItem,
  TabButtons,
  TabButton
} from './shared'

const Basic = ({items, position, single, preventClose, tabs = false}) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const handleItemClick = index => {
    if (openIndexes.includes(index)) {
      if (preventClose && openIndexes.length === 1) {
        return
      } else {
        setOpenIndexes(openIndexes.filter(i => i !== index))
      }
    } else {
      if (single) {
        setOpenIndexes([index])
      } else {
        setOpenIndexes([...openIndexes, index])
      }
    }
  }

  const above = 'above' === position
  const left = 'left' === position
  const right = 'right' === position

  if (tabs === true) {
    return (
      <div
        style={{
          maxWidth: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 60,
        }}
      >
        <TabItems>
          {items.map((item, index) => (
            <TabItem
              key={index}
              position="above"
              isOpen={openIndexes.includes(index)}
            >
              {item.contents}
            </TabItem>
          ))}
        </TabItems>
        <TabButtons>
            {items.map((item, index) => (
              <TabButton
                key={item.title}
                isOpen={openIndexes.includes(index)}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </TabButton>
            ))}
          </TabButtons>
      </div>
    )
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

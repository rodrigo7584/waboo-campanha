'use client'
import { useState } from 'react'

import '../styles/accordion.css'

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="accordion">
      <button
        className={`accordion-title ${isExpanded ? 'open' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <div className={`accordion-icon ${isExpanded ? 'open' : ''}`}>
          <div></div>
          <div></div>
        </div>
      </button>
      <div className={`accordion-content ${isExpanded ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Accordion

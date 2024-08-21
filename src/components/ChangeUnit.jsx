import React from 'react'

const ChangeUnit = ({ unit, onUnitChange }) => {
  return (
    <div className="unit-toggle">
      <button onClick={() => onUnitChange('C')}>°C</button>
      <button onClick={() => onUnitChange('F')}>°F</button>
    </div>
  )
}

export default ChangeUnit



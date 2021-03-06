import React from 'react'

const Input = ({ name, label, error,value, onChange }) => {
  return (
     <div className='form-group'>
          <label htmlFor="{name}">{ label}</label>
          <input value={value}
              onChange={onChange}
              name={name}
              type="text" id={ name } className="form-control" />
          {error && <div className='alert alert-danger'>{error}</div>}
      </div>
  )
}

export default Input   
import React from 'react'

const FormRow = (props) => {
  const { label, input, meta, ...passingThroughProps } = props
  return (
    <div className="form-row">
      <label className="label" htmlFor={input.name} >{label}</label>
      <input className="forminput" {...passingThroughProps}/>
    </div>
  )
}

export default FormRow
import React from 'react'
import FormRow from './FormRow'

const InputRow = (props) => {
  const { label, input, meta, ...passingProps } = props
  const hasError = meta.error && meta.touched
  return (
    <FormRow className={ hasError ? '-error' : ''}>
      <label className="label" htmlFor={input.name} >{label}</label>
      <input className="forminput" {...input} {...passingProps}/>
      { hasError && (
        <div className="errortxt">{meta.error}</div>
      )}
    </FormRow>
  )
}

export default InputRow
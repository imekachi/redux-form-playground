import React from 'react'

const FormRow = ({children, className}) => (
  <div className={'form-row ' + (className || '')}>
    {children}
  </div>
)

export default FormRow
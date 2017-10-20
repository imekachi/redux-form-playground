// @flow
import React from 'react'

type Props = {
  children?: Element<any>,
  className?: string
}
const FormRow = ({children, className}: Props) => (
  <div className={'form-row ' + (className || '')}>
    {children}
  </div>
)

export default FormRow
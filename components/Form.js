import React from 'react'
import styled from 'styled-components'
import { reduxForm, Field } from 'redux-form'

import FormRow from './FormRow'

const StyledForm = styled.form`
  min-width: 300px;
  padding: 10px 0;
`

const Form = ({ handleSubmit }) => (
  <StyledForm onSubmit={handleSubmit}>
    <Field name="username" label="Username" placeholder="username" component={FormRow}/>
    <Field name="password" label="Password" placeholder="password" type="password" component={FormRow}/>
  </StyledForm>
)

export default reduxForm({
  form: 'testForm',
})(Form)
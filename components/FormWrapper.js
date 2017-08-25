import React from 'react'
import styled from 'styled-components'
import Validator from 'validatorjs'
import { reduxForm, Field } from 'redux-form'
import { isClientSide } from '../reducers/index'

import FormRow from './FormRow'
import InputRow from './InputRow'

const StyledForm = styled.form`
  min-width: 300px;
  padding: 10px 0;
`

const SubmitBtn = styled.button`
  display: block !important;
`

const submitFn = (data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      alert(JSON.stringify(data, null, '\t'))
      resolve(data)
    }, 1500)
  })
}
const RadioRow = (props) => {
  console.log('>> props: ', props)
  const { label, input, meta, radioList, ...passingProps } = props

  const hasError           = meta.error && meta.touched
  const listOfRadioOptions = radioList.map((radioData, radioIndex) => {
    const radioId = 'radio-choice-' + radioData.value
    return (
      <li key={radioIndex} className="forminput-list-item">
        <input id={radioId} className="formradio" type="radio" {...input} {...passingProps} value={radioData.value} />
        <label htmlFor={radioId} className="radiolabel">{radioData.label}</label>
      </li>
    )
  })

  return (
    <FormRow className={hasError ? '-error' : ''}>
      <label className="label" htmlFor={input.name}>{label}</label>
      <ul className="forminput-box">
        {listOfRadioOptions}
      </ul>
      {hasError && (
        <div className="errortxt">{meta.error}</div>
      )}
    </FormRow>
  )
}
const Form     = ({ handleSubmit, submitting }) => (
  <StyledForm className="form-wrapper" onSubmit={handleSubmit(submitFn)}>
    <Field name="username" label="Username" placeholder="username" component={InputRow}/>
    <Field name="password" label="Password" placeholder="password" type="password" component={InputRow}/>
    <FormRow>
      <Field name="answer" radioList={[{ value: 1, label: 'option1' }, { value: 2, label: 'option2' }]}
             component={RadioRow}/>
    </FormRow>

    <FormRow>
      <SubmitBtn disabled={submitting} className="formbutton dekdbutton" type="submit">Login</SubmitBtn>
    </FormRow>
  </StyledForm>
)

const validate = (data) => {
  if (!isClientSide) return {}

  const rules = {
    username: 'required|between:4,20',
    password: 'required',
    answer : 'required',
  }

  const messages = {
    'required'        : 'กรุณากรอก :attribute',
    'between.username': 'Username ต้องอยู่ในระหว่าง 4-20 ตัวอักษร',
  }

  const validation = new Validator(data, rules, messages)
  validation.passes()

  console.log('>> validation: ', validation)

  return validation.errors.all()
}
export default reduxForm({
  form: 'testForm',
  validate,
})(Form)
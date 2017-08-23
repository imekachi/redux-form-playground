import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'

import store from '../store'
import FormWrapper from '../components/FormWrapper'

const HeaderForm = styled.h1`
  text-align: center;
`

injectGlobal`
  html, body { height: 100%; }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default class index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main-wrapper">
          <div className="main-container">
            <HeaderForm>Redux-Form Login</HeaderForm>
            <FormWrapper/>
          </div>
        </div>
      </Provider>
    )
  }
}
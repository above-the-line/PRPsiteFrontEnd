import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
mutation RandomNameForMutationThatSignsUpUser(
  $user_name: String!,
  $user_email: String!,
  $user_password: String!
){
  signup(
    user_name: $user_name,
    user_email: $user_email,
    user_password: $user_password){
      token
    }
}
`

const LOGIN_MUTATION = gql`
mutation LoginMutation(
  $user_email: String!,
  $user_password: String!
){
  login(
    user_email: $user_email,
    user_password: $user_password){
      token
    }
}
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    user_name: '',
    user_email: '',
    user_password: ''
  }

  render() {
    const { login, user_name, user_email, user_password } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {/* If users don't have an account
          this field will not render */}
          {!login && (
            <input
              value={user_name}
              onChange={e => this.setState({ user_name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={user_email}
            onChange={e => this.setState({ user_email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={user_password}
            onChange={e => this.setState({ user_password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
            <Mutation
                mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                variables={ { user_name, user_email, user_password } }
                onCompleted={ data => this._confirm(data) }
            >
                {/* When user clicks this button,
                the mutation is triggered
                The value of mutation is determined via above ternary operator
                The text in the button is determined by login value
                destructured from state above
                 */}
                {mutation => ( 
                    <div className="pointer mr2 button" onClick={mutation}>
                        {login ? 'login' : 'create account'}
                    </div>
                )}
            </Mutation>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }



  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
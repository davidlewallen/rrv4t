import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import fakeAuth from '../Auth'
import { Content } from '../Components'

export default class ProtectedPage extends Component {
  constructor() {
    super();
    this.state = { signedOut: false}
  }

  signout() {
    this.setState({ signedOut: true }, fakeAuth.signout());
  }
  render() {
  	const { location, pattern, pathname, isExact, isAutorized, router } = this.props
    const { signedOut } = this.state
    return (
        <div>
        {signedOut && (<Redirect to='/'/>)}
        <h1>Protected Page</h1>
        <p>You are signed in go back to some other page and come back here.</p>
        <p>You can sign out to view the login page again.</p>
      <button onClick={this.signout.bind(this)}>Sign out</button>
        </div>
      )
  }
}

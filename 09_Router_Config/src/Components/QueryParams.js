import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Content } from '../Components'

export default class QueryParams extends Component {
  render() {
    const pathname = this.props.match.path;
    return (
      <div>
      <h1>Reading the query parameters.</h1>
      <p>Check out the links below to view the queryparams value.</p>
      <div className="leftNavi">
      	<ul>
      		<li><NavLink to={{
              pathname: pathname+'/level1',
              query: { abc: 23 }
            }} activeClassName="active">Level 1</NavLink></li>
          <li><NavLink to={{
              pathname: pathname+'/level2',
              query: { abc: 2, xyz: 4 }
            }} activeClassName="active">Level 2</NavLink></li>
          <li><NavLink to={{
              pathname: pathname+'/level3',
              query: { xyz:"HavingFun"}
            }}>Level 3</NavLink></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
        <Route pattern={`${pathname}/:level`} component={Content}/>
      </div>
      </div>
    )
  }
}

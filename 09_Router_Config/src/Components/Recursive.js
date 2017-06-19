import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

export default class Recursive extends Component {
  render() {
    const pathname = this.props.match.path;
    return (
      <div>
      <h1>Recursive paths</h1>
      <p>Keep clicking the links below for a recursive pattern.</p>
    {this.props.match.params.level != null? <div><em>Click Below NavLink</em></div>:null}
      <div className="leftNavi">
      	<ul>
      		<li><NavLink activeClassName="active" to={pathname +"/level1"}>Level 1</NavLink></li>
          <li><NavLink activeClassName="active" to={pathname + "/level2"}>Level 2</NavLink></li>
          <li><NavLink activeClassName="active" to={pathname + "/level3"}>Level 3</NavLink></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
      <Route path={`${pathname}/:level`} component={Recursive} />
      </div>
      </div>
    )
  }
}

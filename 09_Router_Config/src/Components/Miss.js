import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import { Content, NoMatch } from '../Components'

export default class BasicRouting extends Component {
  render() {
  	const { location, pattern, isExact } = this.props
    const pathname = this.props.match.path;
    return (
      <div>
      <h1>Handling a Miss</h1>
      <p>With a "Miss" component you can handle a missed pattern of its sibling Matches. As for example you will be able to show a custom error message for the missed location/pathname. Try clicking on the links below to find a miss.</p>
      <div className="leftNavi">
      	<ul>
      		<li><NavLink activeClassName="active" to={pathname +"/abc/level1"}>Level 1</NavLink></li>
      		<li><NavLink activeClassName="active" to={pathname + "/level2"}>Level 2</NavLink></li>
      		<li><NavLink activeClassName="active" to={pathname + "/abc/level3"}>Level 3</NavLink></li>
      	</ul>
      </div>
      <div className="rightContent">
      	<p>Second Level Content will appear here:</p>
        <Switch>
          <Route path={`${pathname}/abc/:level`} component={Content}/>
          <Route path={`${pathname}`} exact render={() => (null)} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
      </div>
    )
  }
}

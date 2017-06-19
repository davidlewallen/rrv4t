import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import {Switch, BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import { Home, BasicRouting, Blocking, Miss, QueryParams, Recursive, Protected, Login } from './Components'
import fakeAuth from './Auth';
import { routes } from './router-config';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/basic-routing">BasicRouting</Link></li>
        <li><Link to="/blocking">Blocking</Link></li>
        <li><Link to="/miss">Miss</Link></li>
        <li><Link to="/query-params">Query Params</Link></li>
        <li><Link to="/recursive-paths">Recursive Paths</Link></li>
        <li><Link to="/protected">Protected</Link></li>
      </ul>
      <Switch>
        {routes.map((route,index) => (
          <Route
            key={index}
            path={route.pattern}
            component={route.component}
            exact={route.exactly}
          />
        ))}
      </Switch>
    </div>
   </BrowserRouter>
  , document.getElementById('main'))

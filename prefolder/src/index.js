import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/App'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'


window.React = React

render(
 <Router history={hashHistory}>
     <Route path="/" component={App}/>
     <Route path="*" component={Whoops404}/>
   </Router>,
   document.getElementById('react-container')
)
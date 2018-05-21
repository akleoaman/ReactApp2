import React from 'react'
import {render} from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
  <SkiDayList days= {
    [
      {
        resort: "Squaw Valley",
        date: new Date("1/2/2016"),
        powder: true,
        backcountry: false
      },
      {
        resort: "KrikWood",
        date: new Date("3/12/2016"),
        powder: false,
        backcountry: false
      },
      {
        resort: "Mt. Tallac",
        date: new Date("1/2/2016"),
        powder: true,
        backcountry: true
      }
    ]
  }/>,
   
    document.getElementById('react-container')
)
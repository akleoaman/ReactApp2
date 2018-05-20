import React from 'react'
import text from './titles.json'

export const hello = (
    <h1 id='title'
    className='header'
    style={{backgroundColor: 'pink', color: 'black'}}>
    {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
    className='header'
    style={{backgroundColor: 'blue', color: 'green'}}>
    {text.goodbye}
    </h1>
)
'use strict';

//const {createElement} = React
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

/*const title = createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello World'
)*/

render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'orange',
            color: 'white',
            fontFamily: 'verdana' } },
    'Hello WORLD'
), document.getElementById('react-container'));

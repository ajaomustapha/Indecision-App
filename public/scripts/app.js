'use strict';

console.log('App.js is running');

//JSX - javaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

//Create a templateTwo var JSX expressiom
// div
//  h1 -> Ajao Mustapha 
// p -> Age: 23
// p -> Location: Ibadan
// Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

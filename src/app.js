console.log('App.js is running');

//JSX - javaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


//Create a templateTwo var JSX expressiom
// div
//  h1 -> Ajao Mustapha 
// p -> Age: 23
// p -> Location: Ibadan
// Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
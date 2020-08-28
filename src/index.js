import React from 'react'; //import React library
import ReactDOM from 'react-dom';

//print hello world in root id in index.html
//uses JSX (JS rendition of html)
ReactDOM.render(
    <div>
        <h1>Hello world!</h1>
        <p>This is a paragraph!</p>
    </div>,
    document.getElementById("root")
);



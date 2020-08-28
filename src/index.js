//learn functional components in React
import React from "react"
import ReactDOM from "react-dom"

//.js is default extension so we don't have to include it
//./ for current directory
import MyApp from "./components/MyApp"

//render the html in MyApp() at id root in index.html
ReactDOM.render(<MyApp/>, document.getElementById("root"))


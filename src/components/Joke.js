
import React from "react"

//another props example
function Joke(props) {
    return(
        <div className="joke">
            <h1>Joke #{props.number}</h1>
            <p>{props.line}</p>
        </div>
    )
}

export default Joke
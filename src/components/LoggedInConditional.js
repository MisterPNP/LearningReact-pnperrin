
import React from "react"

function LoggedInConditional(props) {
    return(
        <div>
            {props.isLoggedIn === true ? "You are logged in!" : "You are logged out!"}
        </div>
    )
}
export default LoggedInConditional
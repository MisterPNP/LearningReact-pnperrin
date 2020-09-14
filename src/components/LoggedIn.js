
import React from "react"
import LoggedInConditional from "./LoggedInConditional";

class LoggedIn extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>
                    Click to Log in or Log out!
                </button>
                <p>You are logged in: {this.state.isLoggedIn.toString()}</p>
                <LoggedInConditional isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default LoggedIn
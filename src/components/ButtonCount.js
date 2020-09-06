
import React from "react"

class ButtonCount extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    styleFunction() {
        return {
            textAlign: "center",
        }
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    render() {
        return(
            <div style={this.styleFunction()}>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>
                    Add 1!
                </button>
            </div>
        )
    }
}

export default ButtonCount
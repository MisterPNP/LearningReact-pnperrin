import React from "react"
import Conditional from "./Conditional";

class UsingConditional extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoading: true,
            unreadMessages: [
                "hello",
                "Spam email"
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return(
            <div>
                {this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default UsingConditional
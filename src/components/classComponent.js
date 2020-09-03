
import React from "react"

class app extends React.Component {

    /* methods go here */

    myMethod() {
        return 0
    }

    render() {
        const style = this.myMethod()

        return(
            //all logic can go here

            <div>
                <h1>{this.props} Code goes here</h1>
            </div>
        )
    }
}

import React, {Component} from "react"
import randomcolor from "randomcolor"

class LifeCycle extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    //NOT deprecated
    static getDerivedStateFromProps() {
        // return the new updated state based upon the props
        // oftentimes is not needed and its use is discouraged
    }

    //NOT deprecated
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //create a backup of the current way things are
        //not often used either
    }

    //Deprecated
    //third lifecycle method
    //will run the first time this component is ran
    //will run every time a parent class changes the props received here
    componentWillReceiveProps(nextProps, nextContext) {
        //if(nextProps.whatever !== this.props.whatever) {
            //do something important here
        //}
    }

    //NOT deprecated
    //optimize app speed to allow the component to determine whether or not to update
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return true if want component to update
        // return false if we do not want component to update
    }

    //NOT deprecated
    //do some cleanup or teardown with anything to do with the component
    componentWillUnmount() {
        //teardown or cleanup your code before component disappears/becomes not useful
        //remove event listener for example
    }

    //NOT deprecated
    //second lifecycle method
    //the very first time the component shows up this function runs
    //does not "re-mount"
    //generally used for fetching data from APIs etc...
    componentDidMount() {
        console.log("Mounted")
        // get the data I need to correctly display
    }

    //NOT deprecated
    componentDidUpdate(prevProps, prevState, snapshot) {
        //make sure to only change color when count updates (avoiding infinite loop)
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count+1
            }
        })
    }

    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count-1
            }
        })
    }

    render() {
        console.log("Render")
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment
                </button>
                <button onClick={this.decrement}>
                    Decrement
                </button>
            </div>
        )
    }
}
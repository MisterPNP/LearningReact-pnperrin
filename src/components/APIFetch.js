import React from "react"

class APIFetch extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
        }
    }

    //fetch star wars api data
    // https://swapi.dev/
    componentDidMount() {
        //loading the api call
        this.setState({loading: true})

        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            });
    }

    render() {
        const loadingText = this.state.loading ? "Loading..." : this.state.character.name
        return(
            <div>
                <p>{loadingText}</p>
            </div>
        )
    }

}
export default APIFetch
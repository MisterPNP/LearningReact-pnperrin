
//sample contact card list to learn props in React

/*
props allow to make one template component and fill in
the properties for each individual instance of the component
*/

import React from "react"

//passing in props passes in the names input in MyApp
//they become properties passed in for customization
function ContactCard(props) {

    function userMouseOver() {
        console.log("Mouse is Over Button. Click!")
    }
    return (
        <div className="contactCard">
            <h3>{props.contact.name}</h3>
            <img src={props.contact.imgURL} alt="cat"/>
            <p> Phone: {props.contact.phone}</p>
            <p> Email: {props.contact.email}</p>

            <button onClick={function() {console.log("Clicked")}}
                    onMouseOver={userMouseOver}>
                Adopt me!
            </button>
        </div>
    )
}

export default ContactCard
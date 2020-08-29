
//Header Component

import React from "react"

function Header() {
    const firstName = "Pierre-Nicolas"
    const lastName = "Perrin"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        color: "#FF8C00",
        fontSize: 50
    }

    const stylesTime = {
        fontSize: 30
    }


    if(hours < 12) {
        timeOfDay="morning"
        stylesTime.color = "#04756F"
    }
    else if(hours >= 12 && hours <18) {
        timeOfDay="afternoon"
        stylesTime.color = "#8914A3"
    }
    else {
        timeOfDay = "night"
        styles.color = "#d90000"
    }

    return (
        <div>
            <header className="navbar">
                <h1 style={styles}>{`${firstName} ${lastName}`}</h1>
            </header>
            <p style={stylesTime}>It is currently {hours} o'clock.
            Good {timeOfDay}!
            </p>
        </div>
    )
}

export default Header
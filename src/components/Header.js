
//Header Component

import React from "react"

function Header() {
    //logic vars
    const firstName = "Pierre-Nicolas"
    const lastName = "Perrin"
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    //styling vars
    let minutesString
    let timeOfDay
    let timeSuffix
    let timeMilitaryFormat
    let timeUSFormat

    //styling header
    const styles = {
        color: "#FF8C00",
        fontSize: 50
    }

    //styling time paragraph
    const stylesTime = {
        fontSize: 30
    }

    //determining time of day
    if(hours < 12) {
        timeOfDay="morning"
        stylesTime.color = "#04756F"
        timeSuffix="am"
    }
    else if(hours >= 12 && hours <18) {
        timeOfDay="afternoon"
        stylesTime.color = "#8914A3"
        timeSuffix="pm"
    }
    else {
        timeOfDay = "night"
        styles.color="#d90000"
        timeSuffix="pm"
    }
    //convert minutes to string after checking if <10
    minutesString = minutes.toString()
    if(minutes < 10) {
        minutesString = "0"+minutesString
    }

    //time formats
    timeMilitaryFormat=hours.toString()+":"+minutesString
    timeUSFormat=(hours%12).toString()+":"+minutesString+timeSuffix

    return (
        <div>
            <header className="navbar">
                <h1 style={styles}>{`${firstName} ${lastName}`}</h1>
            </header>
            <p style={stylesTime}>
                It is currently {timeMilitaryFormat} ({timeUSFormat}). Good {timeOfDay}!</p>
        </div>
    )
}

export default Header
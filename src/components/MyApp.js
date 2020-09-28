
//functional component with capital name (big convention)
//different files for each function component
//returns the html code to run
//makes it easier to take care of code and cleaner program

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ProfilePicture from "./ProfilePicture";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "../data/jokesData";
import catData from "../data/catData";
import ButtonCount from "./ButtonCount";
import UsingConditional from "./UsingConditional";
import LoggedIn from "./LoggedIn";
import APIFetch from "./APIFetch";

//resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

class MyApp extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "state"
        }
    }

    //maps from data files
    setJokeComponents() {
        //map joke data to components
        const jokeComponents = jokesData.map(joke => {
            return (<Joke
                key={joke.number}
                number={joke.number}
                line={joke.line}
            />)
        })
        return jokeComponents
    }

    setCatContacts() {
        //map cat contact card data to components
        //the contact object expected in ContactCard takes in contactInfo (objects in catData.js)
        const catCardComponents = catData.map(contactInfo => {
            return (<ContactCard
                contact={contactInfo}
            />)
        })
        return catCardComponents
    }

    //render what we want to render
    //logic goes before return
    render() {
        const jokeComponents = this.setJokeComponents()
        const catCardComponents = this.setCatContacts()

        return(
            <div>
                <Header/>
                <ProfilePicture/>
                <MainContent/>
                <p>{this.state.answer}</p>
                <div>
                    {catCardComponents}
                    {jokeComponents}
                </div>
                <Joke
                    number="Added without mapping 1"
                    line="knock knock... Who's there? nope"
                />
                <Joke
                    number="Added without mapping 2"
                    line="no joke here... i'm too funny"
                />
                <Footer/>
                <ButtonCount/>
                <UsingConditional/>
                <LoggedIn/>
                <APIFetch/>
            </div>
        )
    } //we have an example of how a sub component was made (Footer) and used here
}

export default MyApp
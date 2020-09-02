
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

//resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

function MyApp() {

    //map joke data to components
    const jokeComponents = jokesData.map(joke => {
        return (<Joke
            key={joke.number}
            number={joke.number}
            line={joke.line}
        />)
    })
    //map cat contact card data to components
    const catCardComponents = catData.map(contacts => {
        return(<ContactCard
            key={contacts.id}
            name={contacts.name}
            email={contacts.email}
            imgURL={contacts.imgURL}
            phone={contacts.phone}
        />)
    })

    return(
        <div>
            <Header/>
            <ProfilePicture/>
            <MainContent/>
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
        </div>
    )
} //we have an example of how a sub component was made (Footer) and used here

export default MyApp
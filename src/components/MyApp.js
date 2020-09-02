
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
        return(<ContactCard key={}/>)
        }
    )

    return(
        <div>
            <Header/>
            <ProfilePicture/>
            <MainContent/>
            <ContactCard
                contact={{
                    name:"Random cat 1",
                    imgURL:"http://placekitten.com/300/200",
                    phone:"(111) 111-1111",
                    email:"cat1@litter.com"
                }}
            />
            <ContactCard
                contact={{
                    name:"Fluffykins",
                    imgUrl:"https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
                    phone:"(212) 555-2345",
                    email:"fluff@me.com"
                }}
            />
            <ContactCard
                contact={{
                    name:"Destroyer",
                    imgUrl:"https://thumbs-prod.si-cdn.com/nnJARGtKrLypH4y3Vov2zGTG4xw=/fit-in/1600x0/filters:focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg",
                    phone:"(212) 555-3456",
                    email:"ofworlds@yahoo.com"
                }}
            />
            <ContactCard
                contact={{
                    name:"Felix",
                    imgUrl:"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
                    phone:"(212) 555-4567",
                    email:"thecat@hotmail.com"
                }}
            />
            <Joke
                number="Added singularly 1"
                line="knock knock... Who's there? nope"
            />
            <Joke
                number="Added singularly 2"
                line="no joke here... i'm too funny"
            />
            <div>
                    {jokeComponents}
            </div>
            <Footer/>
        </div>
    )
} //we have an example of how a sub component was made (Footer) and used here

export default MyApp
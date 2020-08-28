
//functional component with capital name (big convention)
//different files for each function component
//returns the html code to run
//makes it easier to take care of code and cleaner program

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ProfilePicture from "./ProfilePicture";

function MyApp() {
    return(
        <div>
            <Header/>
            <ProfilePicture/>
            <MainContent/>
            <Footer/>
        </div>
    )
} //we have an example of how a sub component was made (Footer) and used here

export default MyApp

//ProfilePicture Component
//ToDo

import React from "react"
import badCode from "../images/badCode.png"

function ProfilePicture() {
    return(
        <div className="profilePicture">
            <img src={badCode} alt="bad code" width="500" height="140"/>
        </div>
    )
}
//off course we could have done this in CSS but experimenting isnt bad :)

export default ProfilePicture


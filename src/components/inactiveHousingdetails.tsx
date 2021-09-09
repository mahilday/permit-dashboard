import React from "react";
import inactive from '../assets/inactive.svg'


function InActiveHousingDetails(){

    return(
        <div className="centerMain">
            <img className="imgsize" src={inactive} alt="inactive" />
            <h2 className="bold inactiveText center">Inactive Permit, choose a permit to see more details</h2>
        </div>
    )
}

export default InActiveHousingDetails
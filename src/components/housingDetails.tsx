
import React from "react";
import { IPermit } from "../types";

function HousingDetails({data}: IPermit){
 console.log(data)
    return(
        <div>
            <div><p className="text-blue bold small">{data.permit_}</p></div>
            <p className="boldest text-gray">{data.permit_type}</p>
        </div>
    )
}

export default HousingDetails;

import React from "react";
import { IPermit } from "../types";


function HousingDetails({dateFormatter, data}: IPermit){
 console.log(data)
    return(
        <div className="centerMain">
            <div><p className="text-blue bold small">{data.permit_}</p></div>
            <div><p className="boldest smallScreen text-gray">{data.permit_type}</p><p className="small">{data.review_type}</p></div>
            <div className="work_des"><span className="boldest data_headers text-blue">Work Description</span>{data.work_description}</div>
            <div className="flex">
            <div className="work_des new"><span className="boldest data_headers text-blue">Application start Date</span>{dateFormatter(data.application_start_date)}</div>
            <div className="work_des new"><span className="boldest data_headers text-blue">Issue Date</span>{dateFormatter(data.issue_date)}</div>
            </div>
        </div>
    )
}

export default HousingDetails;
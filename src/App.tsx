import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers/rootReducers";
import { fetchPermitsRequest } from "./actions/permitAction";
import HousingDetails from "./components/housingDetails";
// import axios from "axios";
import { IPermit } from "./types";
import InActiveHousingDetails from "./components/inactiveHousingdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { backendLink } from "./utils/bkendLink";

function App() {
  const dispatch = useDispatch();
  const { pending, permits, error } = useSelector(
    (state: RootState) => state.permits
  );
  const [activePermit, setActivePermit] = useState<{ permit: IPermit }>({
    permit: {},
  });

  useEffect(() => {
    dispatch(fetchPermitsRequest());
  }, [dispatch]);
  const setState = (permit: IPermit) => {
    setActivePermit({ permit: permit });
  };
  const dateFormatter = (unformatted: string) => {
    const newDate = new Date(unformatted).toLocaleDateString();
    return newDate;
  };
  // console.log(permits.filter((a:any, b:any) => b.issue_date - a.issue_date))
  return (
    <div className="App">
      <div className="header_container">
        <div>
          <h2 className="text-white logo">
            Auto<span className="text-yellow">Chek</span> | Housing Permit
          </h2>
        </div>
      </div>
      {pending ? (
        <div className="main_container">Loading...</div>
      ) : error ? (
        <div className="main_container">Error</div>
      ) : (
        <div className="main_container ">
          <main>
            <header className="flexnow header_width">
              <aside onClick={()=>{setActivePermit({permit: {}}); console.log(activePermit.permit)}} className={` hide ${Object.entries(activePermit.permit).length === 0 ? "hidden": "entireAside"}`}>
                <div className="icon">
                  <FontAwesomeIcon icon="chevron-left" />
                </div>
              </aside>
              <div className="pl-sm">
                <h2 className="boldest text-md text-blue">Housing Permits</h2>
                <p className="small">{`Here is ${permits.length} very recent permits issued`}</p>
              </div>
            </header>
            <main className="flex-only">
              <aside
                className={`aside_permit_list ${
                  Object.entries(activePermit.permit).length !== 0 && "hidden"
                }`}
              >
                {permits?.map((permit: any) => (
                  <div
                    onClick={() => setState(permit)}
                    className={`${
                      activePermit.permit.id === permit.id && "active"
                    } container`}
                    key={permit.id}
                  >
                    <p className="permit_type">{permit.permit_type}</p>
                    <div className="space_around">
                      <p>{permit.review_type}</p>
                      <p className="bold">
                        {permit.street_number + " " + permit.street_name}
                      </p>
                    </div>
                    <div className="date xs bolder">
                      {dateFormatter(permit.issue_date)}
                    </div>
                  </div>
                ))}
              </aside>
              <main
                className={`housing-dets ${
                  Object.entries(activePermit.permit).length === 0 && "hidden"
                }`}
              >
                {Object.entries(activePermit.permit).length !== 0 ? (
                  <HousingDetails
                    dateFormatter={(date: any) => dateFormatter(date)}
                    data={activePermit.permit}
                  />
                ) : (
                  <InActiveHousingDetails />
                )}
              </main>
            </main>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect }  from 'react';
// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./reducers/rootReducers"
import { fetchPermitsRequest } from './actions/permitAction';

function App() {
  const dispatch = useDispatch();
  const {pending, permits, error} = useSelector((state: RootState)=>state.permits);

  useEffect(()=>{
   dispatch(fetchPermitsRequest())
  }, [dispatch]);
  
  // console.log(permits.filter((a:any, b:any) => b.issue_date - a.issue_date))
  return (
    <div className="App">
      {pending? (
        <div>Loading...</div>
      ): error? (
        <div>Error</div>
      ): (
        permits?.map((permit: any)=>(
          <div key={permit.id}>
            {permit.permit_type}
            </div>
        ))
        // <div>may</div>
      )}
    </div>
  );
}

export default App;

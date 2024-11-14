import React, { useState } from "react";
import AppContext from "./AppContext";
import { DynamicFormListcVariable } from "../components/Types/types.ts";


const AppState = (props) => {

const temp=DynamicFormListcVariable
 
const [Sectiondata, setSectiondata] = useState(temp)
  return (
    <AppContext.Provider
      value={{
       
Sectiondata,
setSectiondata
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

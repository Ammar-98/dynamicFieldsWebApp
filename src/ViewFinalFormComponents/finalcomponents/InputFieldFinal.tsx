import React, { useState } from "react";
import MapSubFieldsFinal from "../MapSubFieldsFinal.tsx";


export default function InputFieldFinal({field}){
    const [Value, setValue] = useState('')
    return(
        <div className="  w-full mt-2 ">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" flex px-2  items-center w-full">
              <div className="  text-lg ">{field.label}</div>
              <div className=" ml-4 text-slate-400 text-sm">
                {field.conditions !== undefined &&
                  `condition (` + field.conditions + `)`}
              </div>
            </div>
            
            <div className="  w-full  ">
              <input
                value={Value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={field.placeholder}
                className=" border-2 border-slate-400 px-4 py-2 rounded-lg w-[400px]  outline-none "
              />
            </div>
          </div>

          <div className=" mt-5 ">
            
            {field.subFields ? (
              <div className=" border-l-2    ml-3 bg-subfields border-slate-500">
              <MapSubFieldsFinal field={field.subFields}/>
              </div>
            ) : null}
          </div>
        </div>
    )
}
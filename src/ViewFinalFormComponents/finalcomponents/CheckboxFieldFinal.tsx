import { Check } from "lucide-react";
import React, { useState } from "react";


export default function CheckboxFieldFinal({field}){
    const [Checked, setChecked] = useState(false)
    return(
        <div className="  w-full ">
        <div className=" flex flex-col items-center justify-center ">
          <div className=" flex px-2   items-center w-full">
            <Check
              onClick={() => setChecked(!Checked)}
              className={`${
                Checked == true
                  ? " bg-primary"
                  : "border-2 border-slate-500 bg-white"
              } rounded  mx-2 cursor-pointer `}
              color={Checked == true ? "white" : "white"}
            />
            <div className=" my-2  text-lg">{field.label}</div>
            <div className=" ml-4 text-slate-400 text-sm">
              {field.conditions !== undefined &&
                `condition (` + field.conditions + `)`}
            </div>
          </div>
        </div>

        <div className=" mt-5 ">
          {field.subFields ? (
            <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
              {/* <MapSubfields fields={field.subFields} value={Value} /> */}
            </div>
          ) : null}
        </div>
      </div> 
    )
}
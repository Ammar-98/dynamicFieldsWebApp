import { Circle } from "lucide-react";
import React, { useState } from "react";


export default function RadioFieldFinal({field}){
    const [selectedOption, setselectedOption] = useState('')
    return(
        <div className="  w-full ">
        <div className=" flex flex-col  justify-center ">
          <div className=" flex px-2  items-center w-full">
            <div className=" my-2  text-lg">{field.label}</div>
            <div className=" ml-4 text-slate-400 text-sm">
              {field.conditions !== undefined &&
                `condition (` + field.conditions + `)`}
            </div>
          </div>

          <div className=" flex flex-row gap-4">
            {field.RadioOPtions?.map((item) => (
              <div
                onClick={() => setselectedOption(item)}
                className={` flex items-center justify-center gap-1 cursor-pointer ${
                  selectedOption == item ? " font-semibold" : ""
                }`}
              >
                <Circle
                  className={` cursor-pointer  text-slate-500`}
                  fillOpacity={selectedOption === item ? 1 : 0}
                  fill="#49de80"
                  size={17}
                />
                {item}
              </div>
            ))}
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
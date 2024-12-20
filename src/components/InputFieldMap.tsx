import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field, SubField } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
import MapSubfields from "./MapSubfields.tsx";
type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
  
};

export default function InputFieldmap({ field, passedValue }: InputFieldProps) {
  const [Value, setValue] = useState<string>("");

  return (
    <div className=" w-full flex flex-col items-start justify-center  ">
      {/* <div>{String(evaluateConditions(field.conditions, passedValue))}</div> */}

      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div className="  w-full mt-2 ">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" flex px-2  items-center w-full">
              <div className="  text-lg">{field.label}</div>
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
                className=" border px-4 py-2 rounded-lg w-[400px]  outline-none "
              />
            </div>
          </div>

          <div className=" mt-5 ">
            
            {field.subFields ? (
              <div className=" border-l-2    ml-3 bg-subfields border-slate-500">
              <MapSubfields fields={field.subFields} value={Value} />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

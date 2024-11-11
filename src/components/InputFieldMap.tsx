import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
type InputFieldProps = {
  field: Field;
  passedValue: string | null;
};

export default function InputFieldmap({ field, passedValue }: InputFieldProps) {
  const [Value, setValue] = useState<string>("");

  return (
    <div className=" w-full flex flex-col">
      {/* <div>{String(evaluateConditions(field.conditions, passedValue))}</div> */}

      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div>
          <div className=" flex flex-col items-center justify-center border">
            <div>{field.label}</div>

            <input
              value={Value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={field.placeholder}
              className=" border px-4 my-4  "
            />
            <div>{Value}</div>
          </div>

          <div>
            {field.subFields ? (
              <MapFields fields={field.subFields} value={Value} />
            ) : null}
          </div>

        
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

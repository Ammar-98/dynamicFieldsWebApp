import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field, SubField } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
import MapSubfields from "./MapSubfields.tsx";
import { Check, ChevronDown } from "lucide-react";
type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};

export default function CheckboxFieldMap({
  field,
  passedValue,
}: InputFieldProps) {
  const [Value, setValue] = useState<string>("");
  const [Checked, setChecked] = useState(false);
  const [dropDownopen, setdropDownopen] = useState(false);
  return (
    <div className=" w-full flex flex-col items-start justify-center">
      {/* <div>{String(evaluateConditions(field.conditions, passedValue))}</div> */}

      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div className="  w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" flex px-2 justify-center  items-center w-full">
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

// CheckboxFieldMap

// <Check
// onClick={() => setchecked(!checked)}
// className={`${
//   checked == true ? " bg-primary" : "border-2 border-slate-500 bg-white"
// } rounded  mx-2 cursor-pointer `}
// color={checked == true ? "white" : "white"}
// />

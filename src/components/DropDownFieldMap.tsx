import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field, SubField } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
import MapSubfields from "./MapSubfields.tsx";
import { ChevronDown } from "lucide-react";
type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};

export default function DropDownFieldMap({
  field,
  passedValue,
}: InputFieldProps) {
  const [Value, setValue] = useState<string>("");
  const [dropDownopen, setdropDownopen] = useState(false);
  return (
    <div className=" w-full flex flex-col items-start justify-center">
      {/* <div>{String(evaluateConditions(field.conditions, passedValue))}</div> */}

      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div className="  w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" flex px-2  items-center w-full">
              <div className=" my-2  text-lg">{field.label}</div>
              <div className=" ml-4 text-slate-400 text-sm">
                {field.conditions !== undefined &&
                  `condition (` + field.conditions + `)`}
              </div>
            </div>

            <div className="  w-full flex items-center  ">
              <div className=" relative min-w-[220px]">
                <div
                  onClick={() => setdropDownopen(!dropDownopen)}
                  className=" flex bg-primary justify-between w-full border py-2 px-2 border-slate-500 rounded-xl cursor-pointer"
                >
                  <div className=" text-black ">{Value == "" ? `Select an option` : Value}</div>

                  {dropDownopen == true ? (
                    <ChevronDown className=" text-black duration-500 rotate-0 " />
                  ) : (
                    <ChevronDown className="  text-black rotate-180 duration-500 " />
                  )}
                </div>
                {dropDownopen == true && (
                  <div className=" absolute w-full z-20 bg-white border border-slate-500 rounded-xl  py-2  ">
                    {field.dropdownValues
                      ? field.dropdownValues.map((item) => (
                          <div
                            onClick={() => [
                              setValue(item),
                              setdropDownopen(false),
                            ]}
                            className=" cursor-pointer hover:bg-slate-300 px-2 my-1 py-1"
                          >
                            {item}
                          </div>
                        ))
                      : null}
                  </div>
                )}
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

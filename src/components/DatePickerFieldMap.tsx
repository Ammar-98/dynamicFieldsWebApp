import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field, SubField } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
import MapSubfields from "./MapSubfields.tsx";
import { ChevronDown } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};

export default function DropDownFieldMap({
  field,
  passedValue,
}: InputFieldProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              placeholderText={field.placeholder || "Select date"}
              className=""
            />
          </div>

          <div className=" mt-5 ">
            {field.subFields ? (
              <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
                <MapSubfields
                  fields={field.subFields}
                  value={String(selectedDate)}
                />
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



import React, { useState } from "react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import { Field, SubField } from "./Types/types.ts";
import MapFields from "./MapFields.tsx";
import MapSections from "./MapSections.tsx";
import MapSubfields from "./MapSubfields.tsx";
import { ChevronDown } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-input-2";

type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};

export default function PhoneNumberFieldMap({
  field,
  passedValue,
}: InputFieldProps) {
  const [phone, setPhone] = useState("");

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
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="w-full  border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-150"
              dropdownClass="custom-phone-dropdown"
              placeholder={field.placeholder || "Enter phone number"}
            />
          </div>

          <div className=" mt-5 ">
            {field.subFields ? (
              <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
                <MapSubfields fields={field.subFields} value={String(phone)} />
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

//

{
  /**/
}

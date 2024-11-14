import React from "react";
import { Field, SubField } from "./Types/types";
import InputFieldmap from "./InputFieldMap.tsx";
import AddSubFieldButton from "./Buttons/AddSubfield.tsx";
import DropDownFieldMap from "./DropDownFieldMap.tsx";
import RadioButtonFieldMap from "./RadioButtonFieldMap.tsx";
import FileUploadFieldMap from "./FileUploadFieldMap.tsx";
import CheckboxFieldMap from "./CheckBoxFieldMap.tsx";
import CountryFieldMap from "./CountryFieldMap.tsx";
import DatePickerFieldMap from "./DatePickerFieldMap.tsx";
import PhoneNumberFieldMap from "./PhoneNumberFieldMap.tsx";

type MapFieldsprops = {
  fields: SubField[];
  value: string | null;
};


export default function MapSubfields({ fields, value }: MapFieldsprops) {
  if (fields.length == 0) {
    return (
      <div>

      </div>
    );
  }
  return (
    <div>
      {fields.map((item: SubField) =>
        item.type == "InputField" ? (
            <div>
              <InputFieldmap field={item} passedValue={value} />
            </div>
          ) : item.type == "DropdownField" ? (
            <div>
              <DropDownFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "RadioButton" ? (
            <div>
              <RadioButtonFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "FileUpload" ? (
            <div>
              <FileUploadFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "Checkbox" ? (
            <div>
              <CheckboxFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "Country" ? (
            <div>
              <CountryFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "DatePicker" ? (
            <div>
              <DatePickerFieldMap field={item} passedValue={value} />
            </div>
          ) : item.type == "PhoneNumber" ? (
            <div>
              <PhoneNumberFieldMap field={item} passedValue={value} />
            </div>
          ) : (
            <div></div>
          )
      )}
    </div>
  );
}

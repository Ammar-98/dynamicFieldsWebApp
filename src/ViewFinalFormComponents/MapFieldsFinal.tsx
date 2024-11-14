import React from "react";
import { Field } from "../components/Types/types";
import InputFieldFinal from "./finalcomponents/InputFieldFinal.tsx";
import DropDownFieldFinal from "./finalcomponents/DropDownFieldFinal.tsx";
import RadioFieldFinal from "./finalcomponents/RadioFieldFinal.tsx";
import FileUploadFieldFinal from "./finalcomponents/FileUploadFieldFinal.tsx";
import CheckboxFieldFinal from "./finalcomponents/CheckboxFieldFinal.tsx";
import CountryFieldFinal from "./finalcomponents/CountryFielFinal.tsx";
import DatePicker from "react-datepicker";
import DatePickerFinal from "./finalcomponents/DatePickerFieldFinal.tsx";
import PhoneNumberFieldFinal from "./finalcomponents/PhonenUmberFieldFinal.tsx";

type MapFieldsFinalprops = {
  field: Field;
};
export default function MapFieldsFinal({ field }) {
  return (
    <div className=" w-full px-8 ">
      {field.map((item: Field) => (
        <div className=" w-full">
          {item.type == "InputField" ? <InputFieldFinal field={item} /> : 
        
        item.type=="DropdownField"?
        <DropDownFieldFinal field={item} />:

        item.type=="RadioButton"?
        <RadioFieldFinal field={item} />:

        
        item.type=="FileUpload"?
        <FileUploadFieldFinal field={item} />:
        
        
        
        item.type=="Checkbox"?
        <CheckboxFieldFinal field={item} />:
        
        
        item.type=="Country"?
        <CountryFieldFinal field={item} />:
        
        item.type=="DatePicker"?
        <DatePickerFinal field={item} />:
        
        
        item.type=="PhoneNumber"?
        <PhoneNumberFieldFinal field={item} />
        :null
        
        
        
        }
        </div>
      ))}
    </div>
  );
}

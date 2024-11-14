import React, { useState } from "react";
import { Field } from "./Types/types";
import InputFieldmap from "./InputFieldMap.tsx";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import AddSubFieldButton from "./Buttons/AddSubfield.tsx";
import { ChevronDown } from "lucide-react";
import AddFieldModal from "./AddFieldModal.tsx";
import DropDownFieldMap from "./DropDownFieldMap.tsx";
import RadioButtonFieldMap from "./RadioButtonFieldMap.tsx";
import FileUploadFieldMap from "./FileUploadFieldMap.tsx";
import CheckboxFieldMap from "./CheckBoxFieldMap.tsx";
import CountryFieldMap from "./CountryFieldMap.tsx";
import DatePickerFieldMap from "./DatePickerFieldMap.tsx";
import PhoneNumberFieldMap from "./PhoneNumberFieldMap.tsx";
import AddSubFieldModal from "./AddSubFieldsModal.tsx";

type MapFieldsprops = {
  fields: Field[];
  value: string | null;
  section_id: string | number;
};

const Header = ({ item, index }) => {
  return <div className=" w-full flex items-center px-4"></div>;
};
const Footer = ({ section_id, field_id }) => {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <div className=" w-full border-b-2 border-slate-500 border-dashed  pb-1 flex justify-end items-center">
      <AddSubFieldModal
        openModal={ShowModal}
        setOpenModal={setShowModal}
        section_id={section_id}
        field_id={field_id}
      />
      <AddSubFieldButton onClick={() => setShowModal(true)} />
    </div>
  );
};

const FieldComp = ({ item, value, index, section_id }) => {
  return (
    <div className="">
      <Header item={item} index={index} />
      <div>
        {item.type == "InputField" ? (
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
        )}
      </div>
      <Footer section_id={section_id} field_id={index} />
    </div>
  );
};

export default function MapFields({
  fields,
  value,
  section_id,
}: MapFieldsprops) {
  const [openAddfieldModal, setopenAddfieldModal] = useState(false);

  if (fields.length == 0) {
    return (
      <div>
        <div className=" text-slate-400 text-xl w-full flex items-center justify-center py-4">
          No fields added
        </div>
        <div className=" w-full py-1 flex items-center justify-center">
          <AddFieldButton onClick={() => setopenAddfieldModal(true)} />
        </div>
        <AddFieldModal
          openModal={openAddfieldModal}
          setOpenModal={setopenAddfieldModal}
          section_id={section_id}
        />
      </div>
    );
  }

  return (
    <div className=" w-full">
      {fields.map((item: Field, index) => (
        <FieldComp
          item={item}
          value={value}
          index={index}
          section_id={section_id}
        />
      ))}
      <div className=" w-full py-1 flex items-center justify-center ">
        <AddFieldButton onClick={() => setopenAddfieldModal(true)} />
      </div>
      <AddFieldModal
        openModal={openAddfieldModal}
        setOpenModal={setopenAddfieldModal}
        section_id={section_id}
      />
    </div>
  );
}

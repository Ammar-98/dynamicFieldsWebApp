import React, { useRef, useState } from "react";
import Modal from "./Modal.tsx";
import Confirmbutton from "./Buttons/ConfirmButton.tsx";
import { Field, Section, SubField } from "./Types/types.ts";
import AppContext from "../AppContext/AppContext.js";
import { useContext } from "react";
import { ChevronDown } from "lucide-react";
import { log } from "react-modal/lib/helpers/ariaAppHider.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddInputField = ({
  InputfieldName,
  setInputfieldName,
  InputfieldPlaceholder,
  setInputfieldPlaceholder,
}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div>
        <span>Enter Field Text</span>
        <div>
          <input
            value={InputfieldName}
            onChange={(e) => setInputfieldName(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Field Text"
          />
        </div>
      </div>
      <div>
        <span>Input Field Placeholder{` (Optional)`}</span>
        {/* {Sectiondata[0].fields[0].label} */}
        <div>
          <input
            value={InputfieldPlaceholder}
            onChange={(e) => setInputfieldPlaceholder(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Placeholder"
          />
        </div>
      </div>
    </div>
  );
};
const AddDropDownField = ({
  InputfieldName,
  setInputfieldName,
  DropDownOptions,
  setDropDownOptions,
}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div>
        <span>Enter Field Text</span>
        <div>
          <input
            value={InputfieldName}
            onChange={(e) => setInputfieldName(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Field Text"
          />
        </div>
      </div>
      <div>
        <span>Dropdown Field Options</span>
        <div className=" text-sm text-slate-400">
          {` enter options separated by ","`}
        </div>
        {/* {Sectiondata[0].fields[0].label} */}
        <div>
          <input
            value={DropDownOptions}
            onChange={(e) => setDropDownOptions(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Placeholder"
          />
        </div>
      </div>
    </div>
  );
};
const AddRadioField = ({
  InputfieldName,
  setInputfieldName,
  RadioOPtions,
  setRadioOPtions,
}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div>
        <span>Enter Field Text</span>
        <div>
          <input
            value={InputfieldName}
            onChange={(e) => setInputfieldName(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Field Text"
          />
        </div>
      </div>
      <div>
        <span>Radio Field Options</span>
        <div className=" text-sm text-slate-400">
          {` enter options separated by ","`}
        </div>
        {/* {Sectiondata[0].fields[0].label} */}
        <div>
          <input
            value={RadioOPtions}
            onChange={(e) => setRadioOPtions(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

const FileUploadField = ({ InputfieldName, setInputfieldName }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [FileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file.name);
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Dropped file:", file.name);
      setFileName(file.name);
    }
  };

  return (
    <div className="gap-2 flex flex-col">
      <div>
        <span>Enter Field Text</span>
        <div>
          <input
            value={InputfieldName}
            onChange={(e) => setInputfieldName(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Field Header text"
          />
        </div>
      </div>
    </div>
  );
};

const CheckboxField = ({ InputfieldName, setInputfieldName }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [FileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log("Selected file:", file.name);
      setFileName(file.name);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Dropped file:", file.name);
      setFileName(file.name);
    }
  };

  return (
    <div className="gap-2 flex flex-col">
      <div>
        <span>Enter Field Text</span>
        <div>
          <input
            value={InputfieldName}
            onChange={(e) => setInputfieldName(e.target.value)}
            className=" w-full border py-2 rounded-xl border-slate-500 px-3"
            placeholder=" Enter Field Header text"
          />
        </div>
      </div>
    </div>
  );
};

const SelectFieldDropDown = ({ FieldType, setFieldType }) => {
  const FieldTypesArray = [
    "InputField",
    "DropdownField",
    "RadioButton",
    "FileUpload",
    "Checkbox",
    "Country",
    "DatePicker",
    "PhoneNumber",
  ];
  const [dropDownopen, setdropDownopen] = useState(false);
  return (
    <div className=" relative">
      <div
        onClick={() => setdropDownopen(!dropDownopen)}
        className=" flex justify-between w-full border py-2 px-2 border-slate-500 rounded-xl cursor-pointer"
      >
        <div>{FieldType == "" ? `Select Field Type` : FieldType}</div>
        {dropDownopen == true ? (
          <ChevronDown className=" duration-500 rotate-0 " />
        ) : (
          <ChevronDown className=" rotate-180 duration-500 " />
        )}
      </div>
      {dropDownopen == true && (
        <div className=" absolute w-full bg-white border border-slate-500 rounded-xl  py-2  ">
          {FieldTypesArray.map((item) => (
            <div
              onClick={() => [setFieldType(item), setdropDownopen(false)]}
              className=" cursor-pointer hover:bg-slate-300 px-2 my-1 py-1"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AddSubSectionSubFieldModal({
  openModal,
  setOpenModal,
  section_id,
  subSection_id,
}) {
  const { Sectiondata, setSectiondata } = useContext(AppContext);
  const [FieldType, setFieldType] = useState("");
  const [InputfieldName, setInputfieldName] = useState("");
  const [InputfieldPlaceholder, setInputfieldPlaceholder] = useState("");
  const [DropDownOptions, setDropDownOptions] = useState<string[]>([]);
  const [RadioOPtions, setRadioOPtions] = useState<string[]>([]);

  const tempField: SubField = {
    section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "InputField",
    label: InputfieldName,
    placeholder: InputfieldPlaceholder,
  };

  const tempDropDown: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "DropdownField",
    label: InputfieldName,
    dropdownValues: String(DropDownOptions)
      .split(",")
      .map((item) => item.trim()),
  };

  const tempRadio: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "RadioButton",
    label: InputfieldName,
    RadioOPtions: String(RadioOPtions)
      .split(",")
      .map((item) => item.trim()),
  };

  const tempFileUpload: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "FileUpload",
    label: InputfieldName,
  };

  const tempCheckbox: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "Checkbox",
    label: InputfieldName,
  };
  const tempCountry: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "Country",
    label: InputfieldName,
  };
  const tempDatePicker: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "DatePicker",
    label: InputfieldName,
  };
  const tempPhoneNumber: SubField = {
   section_id: section_id,
    subSection_id: subSection_id,
    subField_id:
      Sectiondata[section_id]?.subsections[subSection_id]?.subFields?.length + 1,
    type: "PhoneNumber",
    label: InputfieldName,
  };
  const AddFieldFunction = () => {
    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");
      return;
    }
    console.log('section_id', section_id)
    console.log('subSection_id', subSection_id)

    console.log('Sectiondata', Sectiondata[section_id].subsections[subSection_id])


    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempField);

    Data[section_id].subsections[subSection_id].fields = temp;

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };

  const AddDropDownFunction = () => {
    console.log("DropDownOptions", DropDownOptions);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }
    if (DropDownOptions.length === 1 && DropDownOptions[0] === "") {
      alert("DropDown options can not be empty");
      return;
    }

    // console.log("DropDownOptions", DropDownOptions);
    // console.log("InputfieldName", InputfieldName);
    console.log("subSection_id", subSection_id);
    console.log("section_id", section_id);

    console.log("Sectiondata", Sectiondata);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempDropDown);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };

  const AddRadioFunction = () => {
    console.log("RadioOPtions", RadioOPtions);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }
    if (RadioOPtions.length === 1 && RadioOPtions[0] === "") {
      alert("DropDown options can not be empty");
      return;
    }

    console.log("RadioOPtions", RadioOPtions);
    console.log("InputfieldName", InputfieldName);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempRadio);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };
  const AddFileUploadFunction = () => {
    console.log("InputfieldName", InputfieldName);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }

    console.log("InputfieldName", InputfieldName);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempFileUpload);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };

  const AddCheckboxFunction = () => {
    console.log("InputfieldName", InputfieldName);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }

    console.log("InputfieldName", InputfieldName);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempCheckbox);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };

  const AddCountryFunction = () => {
    console.log("InputfieldName", InputfieldName);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }

    console.log("InputfieldName", InputfieldName);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempCountry);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };
  const AddDatePickerFunction = () => {
    console.log("InputfieldName", InputfieldName);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }

    console.log("InputfieldName", InputfieldName);

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempDatePicker);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };
  const AddPhoneNumberFunction = () => {
    console.log("InputfieldName", InputfieldName);

    if (InputfieldName == "") {
      alert("Input Field Text can not be empty");

      return;
    }

    console.log("InputfieldName", InputfieldName);

   

    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections[subSection_id].fields];

    temp.push(tempPhoneNumber);

    Data[section_id].subsections[subSection_id].fields = temp;
    console.log("Data", Data);

    setSectiondata(Data);
    setOpenModal(false);
    setInputfieldName("");
    setInputfieldPlaceholder("");
    setFieldType("");
    console.log("temp", temp);
    console.log("Data", Data);
  };

  return (
    <Modal isOpen={openModal} onClose={() => [setOpenModal(false)]}>
      <div className=" gap-2 flex flex-col">
        <SelectFieldDropDown
          FieldType={FieldType}
          setFieldType={setFieldType}
        />
        {FieldType == "InputField" ? (
          <div className=" flex flex-col gap-2">
            <AddInputField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
              InputfieldPlaceholder={InputfieldPlaceholder}
              setInputfieldPlaceholder={setInputfieldPlaceholder}
            />
            <Confirmbutton onClick={() => AddFieldFunction()} />
          </div>
        ) : FieldType == "DropdownField" ? (
          <div className=" flex flex-col gap-2">
            <AddDropDownField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
              DropDownOptions={DropDownOptions}
              setDropDownOptions={setDropDownOptions}
            />
            <Confirmbutton onClick={() => AddDropDownFunction()} />
          </div>
        ) : FieldType == "RadioButton" ? (
          <div className=" flex flex-col gap-2">
            <AddRadioField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
              RadioOPtions={RadioOPtions}
              setRadioOPtions={setRadioOPtions}
            />
            <Confirmbutton onClick={() => AddRadioFunction()} />
          </div>
        ) : FieldType == "FileUpload" ? (
          <div className=" flex flex-col gap-2">
            <FileUploadField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
            />
            <Confirmbutton onClick={() => AddFileUploadFunction()} />
          </div>
        ) : FieldType == "Checkbox" ? (
          <div className=" flex flex-col gap-2">
            <CheckboxField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
            />
            <Confirmbutton onClick={() => AddCheckboxFunction()} />
          </div>
        ) : FieldType == "Country" ? (
          <div className=" flex flex-col gap-2">
            <CheckboxField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
            />
            <Confirmbutton onClick={() => AddCountryFunction()} />
          </div>
        ) : FieldType == "DatePicker" ? (
          <div className=" flex flex-col gap-2">
            <CheckboxField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
            />
            <Confirmbutton onClick={() => AddDatePickerFunction()} />
          </div>
        ) : FieldType == "PhoneNumber" ? (
          <div className=" flex flex-col gap-2">
            <CheckboxField
              InputfieldName={InputfieldName}
              setInputfieldName={setInputfieldName}
            />
            <Confirmbutton onClick={() => AddPhoneNumberFunction()} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Modal>
  );
}

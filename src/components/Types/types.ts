// types.ts
export type Section = {
  section_id: number;
  name: string;
  fields: Field[] | undefined;
  subsections: SubSection[] | undefined;
};

export type Field = {
  section_id: number;
  field_id: number;
  conditions?: string[];
  type:
    | "InputField"
    | "DropdownField"
    | "RadioButton"
    | "FileUpload"
    | "Checkbox"
    | "Country"
    | "DatePicker"
    | "PhoneNumber";
  subFields: SubField[];
  label: string;
  placeholder?: string;
  dropdownValues?: string[];
  RadioOPtions?: string[];
};

export type SubField = {
  section_id?: number;
  field_id?: number;
  subField_id: number;
  subSection_id?: number;
  conditions?: string[];
  type:
    | "InputField"
    | "DropdownField"
    | "RadioButton"
    | "FileUpload"
    | "Checkbox"
    | "Country"
    | "DatePicker"
    | "PhoneNumber";
  subFields?: SubField[];
  label: string;
  placeholder?: string;
  dropdownValues?: string[];
  RadioOPtions?: string[];
};

export type SubSection = {
  section_id?: number;
  field_id?: number;
  subSection_id: number;
  conditions?: string[];
  name: string;
  fields: SubField[] | undefined;
};

export type DynamicFormListType = Section[];

export var DynamicFormListcVariable: DynamicFormListType = [
  {
    section_id: 1,
    name: "Section 1",
    fields: [
      {
        section_id: 1,
        field_id: 1,
        type: "InputField",
        label: "Input Field 1",
        placeholder: "Input Field 1 placeholder",
        subFields: [
          {
            section_id: 12,
            field_id: 1,
            subField_id: 1,
            type: "InputField",
            conditions: [`text=="Ammar"`],
            label: " sub field InputField 1",
            placeholder: "Input Field placeholder",
          },
          {
            section_id: 12,
            field_id: 1,
            subField_id: 1,
            type: "InputField",
            conditions: [`text=="Ammar"`],
            label: " sub field InputField 2",
            placeholder: "Input Field placeholder",
          },
          {
            section_id: 12,
            field_id: 1,
            subField_id: 1,
            type: "DropdownField",
            conditions: [`text=="Ammar"`],
            label: " sub field InputField 2",
            dropdownValues: ["ads", "fasf"],
          },
        ],
      },
      {
        section_id: 1,
        field_id: 2,
        type: "InputField",
        label: "Input Field 2",
        placeholder: "Input Field 2 placeholder",
        subFields: [],
      },
    ],

    subsections: [
      {
        section_id: 1,
        field_id: 1,
        subSection_id: 1,
        name: "Sub Section Name",
        conditions: [],
        fields: [
          {
            section_id: 1,
            subField_id: 1,
            subSection_id: 1,
            type: "InputField",
            label: "Input field 1 subsection 1",
            placeholder: "trying in teh first sub section",
          },
        ],
      },
      {
        section_id: 1,
        field_id: 1,
        subSection_id: 1,
        name: "Sub Section Name",
        conditions: [],
        fields: [
          {
            section_id: 1,
            subField_id: 1,
            subSection_id: 1,
            type: "InputField",
            label: "Input field 1 subsection 1",
            placeholder: "trying in teh first sub section",
          },
        ],
      },
    ],
  },
  {
    section_id: 2,
    name: "Ammar Section",
    fields: [],
    subsections: [],
  },
];

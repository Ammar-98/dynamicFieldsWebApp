import { DynamicFormListType, Field, Section, SubField } from "./types";

var section1Fields1subfield2: SubField = {
  section_id: 1,
  field_id: 1,
  subField_id: 2,
  type: "InputField",
  conditions: [`text=="Ammar"`],
  label: " sub field 2 InputField 1",
  placeholder: "Input Field placeholder",
};

var section1Fields1subfield1: SubField = {
  section_id: 1,
  field_id: 1,
  subField_id: 1,
  type: "InputField",
  conditions: [`text=="Ammar"`],
  label: " sub field 1 InputField 1",
  placeholder: "Input Field placeholder",
};

var section1Fields2subfield2: SubField = {
  section_id: 1,
  field_id: 2,
  subField_id: 2,
  type: "InputField",
  conditions: [`text=="Ammar"`],
  label: " sub field 2 InputField 2",
  placeholder: "Input Field placeholder",
};

var section1Fields2subfield1: SubField = {
  section_id: 1,
  field_id: 2,
  subField_id: 1,
  type: "InputField",
  conditions: [`text=="Ammar"`],
  label: " sub field 1 InputField 2",
  placeholder: "Input Field placeholder",
};

var section1Field1: Field = {
  section_id: 1,
  field_id: 1,
  type: "InputField",
  placeholder: "Input Field 1 placeholder",
  label: "section1 field 1 label",
  subFields: [section1Fields1subfield1, section1Fields1subfield2],
};

var section1Field2: Field = {
  section_id: 1,
  field_id: 2,
  type: "InputField",
  placeholder: "Input Field 2 placeholder",
  label: "section1 field 2 label",
  subFields: [section1Fields2subfield1, section1Fields2subfield2],
};

var Section1: Section = {
  section_id: 1,
  name: "section 1",
  fields: [section1Field1, section1Field2],
  subsections: [],
};

export var tempTestData: DynamicFormListType = [Section1];

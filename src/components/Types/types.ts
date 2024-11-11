// types.ts
export type Section = {
  id: number;
  section_id?: number;
  condition?: string[];
  name: string;
  fields: Field[] | undefined;
  subsections?: Section[] | undefined;
};





export type Field = {
  id: number;
  section_id?: number;
  field_id: number;
  conditions?: string[];
  type: string;
  label: string;
  placeholder?: string;
  options?: string[];
  dropdownValues?: string[];
  subFields?: Field[];
};

export type DynamicFormListType = Section[];

import React, { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import InputFieldmap from "../components/InputFieldMap.tsx";

import {
  Field,
  Section,
  DynamicFormListType,
} from "../components/Types/types.ts";
import MapSections from "../components/MapSections.tsx";
import { useSearchParams } from "react-router-dom";

let DynamicFormList: DynamicFormListType = [
  {
    id: 1,
    name: "section 1",
    fields: [
      {
        id: 1,
        section_id: 1,
        field_id: 1,
        type: "InputField",
        conditions: [],
        label: "Input Field 1",
        placeholder: "Input Field 1 placeholder",
        subFields: [
          {
            id: 12,
            section_id: 1,
            field_id: 1,
            type: "InputField",
            conditions: [`text=="Ammar"`],
            label: " sub field InputField 1",
            placeholder: "Input Field placeholder",
          },
          {
            id: 2,
            section_id: 1,
            field_id: 1,
            type: "InputField",
            conditions: [`text=="Ayyan"`],
            label: " sub field InputField 1",
            placeholder: "Input Field 3 placeholder",
          },
        ],
      },
    ],
    subsections: [
      {
        section_id: 1,
        id: 1,
        name: "Sub Section 11",
        fields: [],
      },
    ],
    // condition:[]
  },
  {
    id: 2,
    name: "section 2",
    fields: [
      {
        id: 1,
        section_id: 2,
        field_id: 1,
        type: "InputField",
        conditions: [],
        label: "Input Field 1",
        placeholder: "Input Field 1 placeholder",
        subFields: [
          {
            id: 1,
            field_id: 1,
            section_id: 2,
            type: "InputField",
            // conditions: [`text=="Ammar"`],
            label: " sub field InputField 1",
            placeholder: "Input Field placeholder",
          },
          {
            id: 2,
            field_id: 1,
            section_id: 2,
            type: "InputField",
            // conditions: [`text=="Ayyan"`],
            label: " sub field InputField 1",
            placeholder: "Input Field 3 placeholder",
          },
        ],
      },
    ],
    subsections: [
      {
        id: 2,
        section_id: 1,
        name: "Sub Section 1",
        fields: [],
      },
    ],
    // condition:[]
  },
];

export default function MakeFormPage() {
  const [SectionList, setSectionList] = useState<DynamicFormListType>([]);
  const tempSection: Section = {
    id:2,
    section_id: 12,
    name: "Section",
    fields: [],
  };
  useEffect(() => {
    console.log("DynamicFormList", DynamicFormList);
    console.log("tempSection", tempSection);
    setSectionList(DynamicFormList);
  }, []);

  return (
    <div className=" bg-red-50 h-[100vh] overflow-y-scroll">
      <Header />
      {SectionList.length > 0 ? (
        <MapSections sections={SectionList} value={null} />
      ) : null}
      <div
        onClick={() => [
          setSectionList((SectionList) => [
            ...(SectionList || []),
            tempSection,
          ]),
          console.log("SectionList", SectionList),
        ]}
      >
        Add Section
      </div>
    </div>
  );
}

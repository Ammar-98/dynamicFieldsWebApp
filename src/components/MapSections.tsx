import React, { useContext, useState } from "react";
import { Section } from "./Types/types";
import MapFields from "./MapFields.tsx";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import MapSubsection from "./MapSubsection.tsx";
import { ChevronDown, Delete } from "lucide-react";
import AppContext from "../AppContext/AppContext.js";

type MapSectionsprops = {
  sections: Section[];
  value: string | null;
};

const Header = ({ section, index, openSections, setopenSections,Sectiondata,setSectiondata }) => {
    const deleteSection = (idToDelete: number) => {
        setSectiondata((prevSections) =>
          prevSections.filter((section) => section.section_id !== idToDelete)
        );
      };
  
    return (
    <div className=" flex w-full bg-sections  justify-between items-center px-4 text-2xl border-b-2 border-l-2 bg-green-300 border-slate-500 ">
      {section.name}
      {section.section_id}
      <div className=" flex gap-2">
      <div onClick={() => setopenSections(!openSections)}>
        {openSections == false ? (
          <ChevronDown className=" duration-500 rotate-0 cursor-pointer" />
        ) : (
          <ChevronDown className=" duration-500 rotate-180 cursor-pointer" />
        )}
      </div>
      <Delete className=" cursor-pointer" onClick={()=> deleteSection(section.section_id)} color="red" />
      
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" w-full  border-b-2 border-slate-500"></div>
  );
};





const SectionComp = ({ section, index }) => {
  const [openSections, setopenSections] = useState(false);

  const {Sectiondata,setSectiondata}=useContext(AppContext)

 

  return (
    <div>
      <Header
        section={section}
        index={index}
        openSections={openSections}
        setopenSections={setopenSections}
        Sectiondata={Sectiondata}
        setSectiondata={setSectiondata}
      />
      {openSections == true && (
        <div >

          <div className=" border-l-2 border-slate-500  px-2 bg-fields ">
            <MapFields fields={section.fields} value={null} section_id={index} />
          </div>
          <div className=" border-l-2 border-slate-500   bg-subsections ">
            <MapSubsection sections={section.subsections} value={null} section_id={index} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default function MapSections({ sections, value }: MapSectionsprops) {
  return (
    <div className="">
      {sections.map((section: Section, index) => (
        <SectionComp section={section} index={index} />
      ))}
    </div>
  );
}

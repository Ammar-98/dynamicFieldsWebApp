import React, { useEffect, useState } from "react";
import { Section, SubSection } from "./Types/types";
import MapFields from "./MapFields.tsx";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import MapSubfields from "./MapSubfields.tsx";
import AddSubFieldButton from "./Buttons/AddSubfield.tsx";
import AddSubSectionButton from "./Buttons/AddSubSection.tsx";
import AddSubSectionModal from "./AddSubSectionModal.tsx";
import AddSubSectionSubFieldModal from "./AddSubSectionSubFieldModal.tsx";

type MapSectionsprops = {
  sections: SubSection[];
  value: string | null;
  section_id:string|number
};

const SubSectionComp = ({ section,section_id,subSection_id }) => {

    const [showModal, setshowModal] = useState(false)
  return (
    <div className=" border-t-2">
        <AddSubSectionSubFieldModal openModal={showModal} setOpenModal={setshowModal} section_id={section_id} subSection_id={subSection_id} />

      
      <div className="  items-center justify-center  px-2  py-4  ">
        <div className="  w-full text-xl">{section.name}</div>

        <div>
          <MapSubfields fields={section.fields} value={null} />
          <div className=" flex w-full items-center justify-end pt-1">
            <AddSubFieldButton onClick={() => setshowModal(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MapSubsection({ sections, value,section_id }: MapSectionsprops) {
  useEffect(() => {
    console.log("sections", sections);
  }, []);

  const [openSubSEctionModal, setopenSubSEctionModal] = useState(false)

  if (sections) {
    return (
      <div>
        <AddSubSectionModal openModal={openSubSEctionModal} setOpenModal={setopenSubSEctionModal} section_id={section_id} />
        {sections.map((section: SubSection, index) =>
          section.fields ? (
            <div>
              {evaluateConditions(section.conditions, value) == true ? (
                <SubSectionComp section={section} section_id={section_id} subSection_id={index} />
              ) : (
                <div></div>
              )}
            </div>
          ) : null
        )}
        <div className=" flex w-full items-center justify-center py-1 mb-10 border-b-2 border-slate-500">
            <AddSubSectionButton onClick={() => setopenSubSEctionModal(true)} />
          </div>
      </div>
    );
  } else {
    return  <div className=" flex w-full items-center justify-center py-1 mb-10 border-b-2 border-slate-500">
        <AddSubSectionModal openModal={openSubSEctionModal} setOpenModal={setopenSubSEctionModal} section_id={section_id} />

    <AddSubSectionButton onClick={() =>  setopenSubSEctionModal(true)} />
  </div>;
  }
}

import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import InputFieldmap from "../components/InputFieldMap.tsx";

import {
  Field,
  Section,
  DynamicFormListType,
} from "../components/Types/types.ts";
import MapSections from "../components/MapSections.tsx";
import { useSearchParams } from "react-router-dom";
import AddSectionButton from "../components/Buttons/AddSectionsButton.tsx";
import AddSectionModal from "../components/AddSectionModal.tsx";
import AppContext from "../AppContext/AppContext.js";



export default function MakeFormPage() {
  // const [SectionList, setSectionList] = useState<DynamicFormListType>([]);
  const [showModalAddSection, setshowModalAddSection] = useState(false)


  const {Sectiondata,setSectiondata}=useContext(AppContext)

  useEffect(() => {
    console.log("DynamicFormList", Sectiondata);
    // console.log("tempSection", tempSection);
    setSectiondata(Sectiondata);
  }, []);

  return (
    <div className=" bg-background h-[100vh] overflow-y-scroll">
      <Header />
      <div className=" w-11/12 justify-self-center">
        {Sectiondata.length > 0 ? (
          <MapSections sections={Sectiondata} value={null} />
        ) : null}
        <div >
          <div className=" w-full flex items-center justify-end py-2 mt-8 border-t-4 ">
            <AddSectionButton onClick={() => setshowModalAddSection(true)} />
          </div>
        </div>
      </div>
      <AddSectionModal openModal={showModalAddSection} setOpenModal={setshowModalAddSection}/>
    </div>
  );
}

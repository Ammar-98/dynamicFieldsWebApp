import React, { useState } from "react";
import Modal from "./Modal.tsx";
import Confirmbutton from "./Buttons/ConfirmButton.tsx";
import { Section, SubSection } from "./Types/types.ts";
import AppContext from "../AppContext/AppContext.js";
import { useContext } from "react";

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

export default function AddSubSectionModal({ openModal, setOpenModal,section_id }) {
  const { Sectiondata, setSectiondata } = useContext(AppContext);
  const [SectionName, setSectionName] = useState("");


  const tempSection: SubSection = {
    section_id: section_id,
    subSection_id:Sectiondata[section_id].subsections.length,
    name: SectionName,
    fields: [],

  };

  const AddSectionFunction = () => {
    let Data = [...Sectiondata];
    let temp = [...Data[section_id].subsections];
    temp.push(tempSection);
    Data[section_id].subsections = temp;
    setSectiondata(Data)
    setOpenModal(false)
    setSectionName("")
    
  };

  return (
    <Modal isOpen={openModal} onClose={() =>[ setOpenModal(false)]}>
      <div className=" gap-2 flex flex-col">
        <div>
          <span>Section Name</span>
          {/* {Sectiondata[0].fields[0].label} */}
          <div>
            <input
              value={SectionName}
              onChange={(e) => setSectionName(e.target.value)}
              className=" w-full border py-2 rounded border-slate-500 px-3"
              placeholder=" Enter Section Name"
            />
          </div>
        </div>
        <Confirmbutton
          onClick={() =>
            SectionName !== ""
              ? AddSectionFunction()
              : alert("Name can not be empty")
          }
        />
      </div>
    </Modal>
  );
}

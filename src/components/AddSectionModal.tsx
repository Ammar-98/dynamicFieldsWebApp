import React, { useState } from "react";
import Modal from "./Modal.tsx";
import Confirmbutton from "./Buttons/ConfirmButton.tsx";
import { Section } from "./Types/types.ts";
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

export default function AddSectionModal({ openModal, setOpenModal }) {
  const { Sectiondata, setSectiondata } = useContext(AppContext);
  const [SectionName, setSectionName] = useState("");
  const tempSection: Section = {
    section_id: Sectiondata.length,
    name: SectionName,
    fields: [],
    subsections:[]

  };

  const AddSectionFunction = () => {
    setSectiondata((prevSections) => {
        const newSection = {
          section_id: prevSections.length > 0 ? prevSections[prevSections.length - 1].section_id + 1 : 1,
          name: SectionName,
          fields: [],
        };
        return [...prevSections, newSection];
      });
    
      setOpenModal(false);
      setSectionName('')
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

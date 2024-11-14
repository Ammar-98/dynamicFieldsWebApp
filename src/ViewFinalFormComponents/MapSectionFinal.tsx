import React from "react";
import { Section } from "../components/Types/types.tsx";
import MapFieldsFinal from "./MapFieldsFinal.tsx";
import MapSubsection from "../components/MapSubsection.tsx";
import MapSubSectionFinal from "./MapSubSectionFinal.tsx";

type MapSectionFinalprops = {
  section: Section;
};

export default function MapSectionFinal({ section }: MapSectionFinalprops) {
  return (
    <div className=" w-11/12 border-2 border-slate-500 flex  items-center justify-center flex-col">
      <div className=" w-full border-b border-slate-400 text-xl px-5">{section.name}:</div>
      <MapFieldsFinal field={section.fields} />
      <div className=" w-full  border-t-2">
        <MapSubSectionFinal section={section.subsections} />

      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import MapSubFieldsFinal from "./MapSubFieldsFinal.tsx";

export default function MapSubSectionFinal({ section }) {
  useEffect(() => {
    console.log("section", section);
  }, []);

  if (section.length == 0) {
    return null;
  }
  return (
    <div className="  w-full flex  justify-center flex-col">
      {section.map((section) => (
        <div>
          <div className=" w-full  flex text-xl px-5">{section.name}:</div>
          <MapSubFieldsFinal field={section?.fields} />
        </div>
      ))}
    </div>
  );
}

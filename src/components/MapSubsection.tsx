
import React from "react";
import { Section } from "./Types/types";
import MapFields from "./MapFields.tsx";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";

type MapSectionsprops = {
  sections: Section[];
  value: string | null;
};

export default function MapSubsection({ sections, value }: MapSectionsprops) {
  return (
    <div>
      {sections.map((section: Section, index) =>
        section.fields ? (
          <div className=" flex items-center justify-center border-b-2 py-4 mb-10">
            {evaluateConditions(section.condition, value) == true ? (
              <div>
                <div className=" w-[100vw] bg-red-50">{section.name}</div>
                <div>
                  <MapFields fields={section.fields} value={null} />
                  <AddFieldButton onClick={() => console.log("hehe")} />
                
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}

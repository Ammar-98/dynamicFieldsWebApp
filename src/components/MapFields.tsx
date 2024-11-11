import React from "react";
import { Field } from "./Types/types";
import InputFieldmap from "./InputFieldMap.tsx";

type MapFieldsprops = {
  fields: Field[];
  value: string | null;
};

export default function MapFields({ fields, value }: MapFieldsprops) {
  return (
    <div>
      {fields.map((item: Field) =>
        item.type == "InputField" ? (
          <div>
            {<InputFieldmap field={item} passedValue={value} />}
           
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}

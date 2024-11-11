import React from "react";
import { useState } from "react";
type TempItem = {
  name?: string;
  [key: string]: any; 
};
type temp = TempItem[];

export default function TestPage() {
  let temp: temp = [{}];

  const [first, setfirst] = useState(temp);

  const thefunc = () => {
    temp[0].name = "Ammar";

    temp.push({});
    temp[1].name = "Ayyan";

    temp[2] == undefined
      ? temp.push({ name: "Abdullah" })
      : (temp[2].name = "Abdullah");
      temp[2] == undefined
      ? temp.push({ type: "Abdullah" })
      : (temp[2].type = "Abdullah");

    console.log("temp", temp);

    setfirst(temp);
  };
  return (
    <div>
      Test
      {first[0]?.name}
      <div onClick={() => thefunc()}>Add</div>
    </div>
  );
}

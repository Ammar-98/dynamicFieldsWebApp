import React from "react";
import { Plus } from "lucide-react";

export default function AddSubFieldButton({onClick}) {
  return (
    <div onClick={onClick} className=" group  hover:px-4 py-2 bg-primary border rounded-3xl text-white  text-base min-w-[150px] hover:bg-secondary cursor-pointer flex items-center justify-center gap-2   hover:text-custom-lg  duration-500">

      <Plus className=" w-5 h-5  group-hover:scale-110 duration-500"  />
      Add Sub-field
    </div>
  );
}

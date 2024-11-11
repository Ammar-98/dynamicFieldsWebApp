import React from "react";
export default function ViewFinalFormButton({onClick}) {
    return (
        <div onClick={onClick} className=" group px-4 py-2 bg-primary border rounded-3xl text-white text-base min-w-[150px] hover:bg-secondary cursor-pointer flex items-center justify-center gap-2  hover:text-custom-lg  duration-500">
        View Final Form
      </div>
    );
  }
  
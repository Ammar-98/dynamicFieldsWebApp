import React from "react";
import { useNavigate } from "react-router-dom";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import ViewFinalFormButton from "./Buttons/ViewFinalFormButton.tsx";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] bg-white flex items-center justify-between px-5 h-[70px] border border-b-slate-300">
      <AddFieldButton onClick={() => navigate("/Test")} />
      <ViewFinalFormButton onClick={() => navigate("/ViewFinalForm")} />
    </div>
  );
}

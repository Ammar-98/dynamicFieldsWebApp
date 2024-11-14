import React from "react";
import { useNavigate } from "react-router-dom";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import ViewFinalFormButton from "./Buttons/ViewFinalFormButton.tsx";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] bg-background flex items-center justify-end px-5 h-[70px] border border-b-slate-500">

      <ViewFinalFormButton onClick={() => navigate("/ViewFinalForm")} />
    </div>
  );
}

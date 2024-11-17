import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AddFieldButton from "./Buttons/AddFieldButton.tsx";
import ViewFinalFormButton from "./Buttons/ViewFinalFormButton.tsx";
import ButtonComp from "./Buttons/ButtonComp.tsx";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-[100vw] bg-background flex items-center justify-end px-5 h-[70px] border border-b-slate-500">
      {location.pathname == "/ViewFinalForm" ? (
        <ButtonComp
          text="Go to Edit page"
          onClick={() => navigate("/")}
        />
      ) : (
        <ButtonComp
          text="View Final Form"
          onClick={() => navigate("/ViewFinalForm")}
        />
      )}

      {/* <ButtonComp text="Go to test Page" onClick={() => navigate("/test")} /> */}
    </div>
  );
}

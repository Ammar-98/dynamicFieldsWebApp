import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MakeFormPage from "../pages/MakeFormPage.tsx";
import TestPage from "../pages/TestPage.tsx";
import ViewFinalForm from "../pages/ViewFinalForm.tsx";


export default function RouterComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MakeFormPage />} />
        <Route path="/ViewFinalForm" element={<ViewFinalForm />} />
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

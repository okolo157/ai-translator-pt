import React from "react";
import Table from "../components/Table";
import SelectPlan from "../components/SelectPlan";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HelpSection from "../components/HelpSection";
export default function Pricing() {
  return (
    <div>
      <Navbar />
      <SelectPlan /> 
      <Table />
      <HelpSection />
      <Footer />
    </div>
  );
}

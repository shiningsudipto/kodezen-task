import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

function App() {

  const [formData, setFormData] = useState({
    fontSizeValue: 20,
    lineHeightValue: 13,
    letterSpacingValue: 0,
    wordSpacingValue: 0,
    fontFamily: "",
    fontWeight: "400",
    textTransform: "none",
    fontStyle: "normal",
    textDecoration: "none",
    fontSizeValueUnit: "px",
    lineHeightValueUnit: "px",
    letterSpacingValueUnit: "px",
    wordSpacingValueUnit: "px",
  });

  return (
    <>
      <div className="mainLayout">
        <LeftSidebar formData={formData} setFormData={setFormData} className="leftSidebar"></LeftSidebar>
        <RightSidebar className="rightSidebar"></RightSidebar>
      </div>
    </>
  )
}

export default App

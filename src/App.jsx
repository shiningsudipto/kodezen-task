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
    fontSizeValueUnit: "",
    lineHeightValueUnit: "",
    letterSpacingValueUnit: "",
    wordSpacingValueUnit: "",
  });

  return (
    <>
      <div className="mainLayout">
        <LeftSidebar formData={formData} setFormData={setFormData}></LeftSidebar>
        <RightSidebar formData={formData}></RightSidebar>
      </div>
    </>
  )
}

export default App

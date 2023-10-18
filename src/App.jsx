import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

function App() {
  // Typography actions value storing state
  const [formData, setFormData] = useState({
    fontSizeValue: 25,
    lineHeightValue: 30,
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
      {/* Layout */}
      <div className="mainLayout">
        {/* Left Side */}
        <LeftSidebar
          formData={formData}
          setFormData={setFormData}>
        </LeftSidebar>
        {/* Right Side */}
        <RightSidebar
          formData={formData}>
        </RightSidebar>
      </div>
    </>
  )
}

export default App

import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

function App() {

  return (
    <>
      <div className="mainLayout">
        <LeftSidebar className="leftSidebar"></LeftSidebar>
        <RightSidebar className="rightSidebar"></RightSidebar>
      </div>
    </>
  )
}

export default App

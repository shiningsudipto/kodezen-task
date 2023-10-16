import LeftSidebar from "./components/LeftSidebar"
import RightSidebar from "./components/RightSidebar"

function App() {

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="col-span-8">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </>
  )
}

export default App

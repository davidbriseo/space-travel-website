import {Route, Routes, NavLink} from "react-router-dom"
import data from "../data.json"
import CrewDetail from "./details-pages/CrewDetail"
import CrewIndex from "./index-pages/CrewIndex"

function Crew() {

    const crewList = data.crew.map(member => {
        return(
            <NavLink key={member.id} to={`/crew/${member.id}`}><span className="sr-only">{member.name}</span></NavLink>   
        )
    })
    return (
      <div className="crew grid-container grid-container--crew flow">
            <h1 className="numbered-title"><span>02</span>Meet your crew</h1>
            <div className="dot-indicators flex">
                {crewList}
            </div>
    
            <Routes>
                <Route index element={<CrewIndex/>}/>
                <Route path="/:crewId" element={<CrewDetail/>}/>
            </Routes>
      </div>
    )
}
  
export default Crew
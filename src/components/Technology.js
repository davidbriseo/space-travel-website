import {Link, Route, Routes, NavLink} from "react-router-dom"
import data from "../data.json"
import TechnologyDetail from "./details-pages/TechnologyDetail"
import TechnologyIndex from "./index-pages/TechnologyIndex"

function Technology() {
    const techList = data.technology.map((item, index) => {
        return(
            <NavLink key={item.id} to={`/technology/${item.id}`} className="ff-serif bg-dark text-white fs-600">{index + 1}</NavLink>
        )
    })
    return (
      <div className="technology grid-container grid-container--technology flow">
            <h1 className="numbered-title"><span>03</span>Space launch 101</h1>
            <div className="number-indicators flex">
                {techList}
            </div>

            <Routes>
                <Route index element={<TechnologyIndex/>}/>
                <Route path="/:techId" element={<TechnologyDetail/>}/>
            </Routes>
      </div>
    )
}
  
export default Technology
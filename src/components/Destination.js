import {Routes, Route, NavLink} from "react-router-dom"
import data from "../data.json"
import DestinationDetail from "./details-pages/DestinationDetail"
import DestinationIndex from "./index-pages/DestinationIndex"

function Destination() {
    const destinationList = data.destinations.map(item =>{
        return(
            <li key={item.id}>
                <NavLink to={`/destination/${item.id}`}  className="uppercase ff-sans-cond text-white letter-spacing-2">{item.name}</NavLink>
            </li>
        )
    })

    return (
      <div className="destination grid-container grid-container--destination flow">
            <h1 className="numbered-title"><span>01</span>Pick your destination</h1>
            <ul className="tab-list underline-indicators flex">
                {destinationList}
            </ul>

            <Routes>
                <Route index element={<DestinationIndex/>}/>
                <Route path="/:destinationId" element={<DestinationDetail/>}/>
            </Routes>

      </div>
    )
}
  
export default Destination;
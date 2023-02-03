import { useParams } from "react-router-dom"
import data from "../../data.json"

function CrewDetail(){
    const {crewId} = useParams()
    const crewMemberData= data.crew.find(member => member.id === crewId)
    const imagePath = crewMemberData.images.png.replace(/^\./, "")

    return(
        <>
            <div className="crew-image grid">
                <img src={`${process.env.PUBLIC_URL+imagePath}`} alt={`${crewMemberData.name} portrait`}/>
            </div>
            <section className="crew-info flow">
                <h2 className="ff-serif uppercase fs-300">{crewMemberData.role}</h2>
                <h3 className="ff-serif uppercase fs-700 text-white">{crewMemberData.name}</h3>
                <p className="text-accent fs-400">{crewMemberData.bio}</p>
            </section>
        </>
    )
}

export default CrewDetail
import React from "react"
import { useParams } from "react-router-dom"
import data from "../../data.json"

function TechnologyDetail(){
    const {techId} = useParams()
    const techData = data.technology.find(item => item.id === techId)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    const imgSource = windowWidth > 719 ? `.${techData.images.portrait}` : `.${techData.images.landscape}`  

    return(
        <>
            {<img src={imgSource} alt=""/>}
            <div className="technology-info">
                <h1 className="ff-sans-cond uppercase text-accent letter-spacing-2 fs-400">The Terminology...</h1>
                <h2 className="ff-serif uppercase fs-700">{techData.name}</h2>
                <p className="text-accent">{techData.description}</p>
            </div>
        </>
    )
}

export default TechnologyDetail
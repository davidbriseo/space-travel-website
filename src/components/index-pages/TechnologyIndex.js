import React from "react"
import data from "../../data.json"

function TechnologyDetail(){
    const techData = data.technology[0]
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const imagePathPortrait = techData.images.portrait.replace(/^\./, "")
    const imagePathLandscape = techData.images.landscape.replace(/^\./, "")
    
    React.useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    const imgSource = windowWidth > 719 ? 
        `${process.env.PUBLIC_URL+imagePathPortrait}` 
        : `${process.env.PUBLIC_URL+imagePathLandscape}`  

    return(
        <>
            {<img src={imgSource} alt={`${techData.name}`}/>}
            <div className="technology-info">
                <h1 className="ff-sans-cond uppercase text-accent letter-spacing-2 fs-400">The Terminology...</h1>
                <h2 className="ff-serif uppercase fs-700">{techData.name}</h2>
                <p className="text-accent">{techData.description}</p>
            </div>
        </>
    )
}

export default TechnologyDetail
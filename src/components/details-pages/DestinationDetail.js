import { useParams } from "react-router-dom"
import data from "../../data.json"

function DestinationDetail(){

    const {destinationId} = useParams()
    const detailData= data.destinations.find(dest => dest.id === destinationId)
    const imagePath = detailData.images.png.replace(/^\./, "")

    return(
        <>
            <img src={`${process.env.PUBLIC_URL+imagePath}`} alt={`${detailData.name}`}/>
            <section className="destination-info flow">
                <h2 className="ff-serif uppercase fs-800">{detailData.name}</h2>
                <p className="fs-400">{detailData.description}</p>
                <div className="destination-info--specs flex">
                    <div>
                        <h3 className="ff-sans-cond fs-200 uppercase text-accent">Avg. Distance</h3>
                        <p className="ff-serif fs-500 uppercase">{detailData.distance}</p>
                    </div>
                    <div>
                        <h3 className="ff-sans-cond fs-200 uppercase text-accent">Est. Travel Time</h3>
                        <p className="ff-serif fs-500 uppercase">{detailData.travel}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DestinationDetail
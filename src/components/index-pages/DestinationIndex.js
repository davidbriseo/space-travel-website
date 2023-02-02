
import data from "../../data.json"

function DestinationDetail(){

    const detailData= data.destinations[0]
    
    return(
        <>
            <img src={`.${detailData.images.png}`} alt=""/>
            <section className="destination-info flow">
                <h2 className="ff-serif uppercase fs-800">{detailData.name}</h2>
                <p className="fs-400">{detailData.description}</p>
                <div className="destination-info--specs flex">
                    <div>
                        <h3 className="ff-sans-cond fs-200 uppercase text-accent" style={{width: "100%"}}>Avg. Distance</h3>
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
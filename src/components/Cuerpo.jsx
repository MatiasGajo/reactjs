import bowie from "./images/bowielore.jpg"
import karambit from "./images/karambitlore.jpg"
import mariposa from "./images/mariposalore.jpg"


const Cuerpo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="cuerpos" src={bowie} alt="bowie" />
                </div>
                <div className="col">
                    <img className="cuerpos" src={karambit} alt="mariposa" />
                </div>
                <div className="col">
                    <img className="cuerpos" src={mariposa} alt="mariposa" />
                </div>
            </div>
        </div>
    )
}

export default Cuerpo
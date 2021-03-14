import React , {useState , createRef }from "react";
import ColorThief from "colorthief";
import style from "./Card.module.css";
//import image from "../../assets/undraw_women_day_2m89.svg";

const Card = (props) => {

    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    const getColorArrays = () => {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }
    const rgb =(values) => {
        return typeof values === "undefined" ? null : "rgb("+values.join(',') + ")";
    }

    const GetDescBullets = ({desc}) => {
 console.log(props.img)
return desc ? desc.map(item=><li className={style["subtitle"]}>
{item}
</li>
    ) : null; 
    }

    return (
<div className={style["card"]}>
<div style={{background : rgb(colorArrays)}} className={style["card-banner"]}>
    <div className={style["blurred-div"]}></div>

    <div className={style["card-name"]}>
     <h5>{props.name}</h5>
    </div>
<img ref={imgRef} src={props.img} className={style["rounded-img"]} alt="diet" onLoad={() => getColorArrays()} />
    </div>
    <div className={style["card-text-details"]}>
    <ul>
        <GetDescBullets desc={props.bullets} />
    </ul>
    </div>


</div>
    )

}

export default Card;
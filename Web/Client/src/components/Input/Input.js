import React from "react";
import style from "./input.module.css"

const InputField =(props) => {
    return (
        <div className={style["form__element-container"]} >
        <label className={style["form__label"]}>{props.label}</label>
        <input type={props.type} name={props.name} className={style["form__input-field"]} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}

export default InputField;
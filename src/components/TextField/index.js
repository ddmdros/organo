import "./TextField.css";

const TextField = (props) => {

    const onType = (event) => {
       props.onChanged(event.target.value);
    }


    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.requiredField} placeholder={props.placeholder}></input>
        </div>
    )
}

export default TextField;
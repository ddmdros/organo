import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState(props.teamsNames[0]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log("Form was submitted => ", name, role, image, team);
        props.onCrewCreated({
            name,
            role,
            image,
            team
        });
        setName("");
        setRole("");
        setImage("");
        setTeam(props.teamsNames[0]);
    }

    return (
        <section className="form">
            <form onSubmit={onSubmitForm}>
                <h2>Fill the form in to create a staff card</h2>
                <TextField 
                    label="Name"
                    placeholder="Type your name" 
                    requiredField={true}
                    value={name} 
                    onChanged={value => setName(value)}
                      />
                <TextField label="Role" placeholder="Type your role" requiredField={true} value={role} onChanged={value => setRole(value)} />
                <TextField label="Image" placeholder="Insert the image URL" value={image} onChanged={value => setImage(value)} />
                <DropDown label="Team" items={props.teamsNames} requiredField={true} value={team} onChanged={value => setTeam(value)}></DropDown>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;
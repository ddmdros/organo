import "./Crew.css";
import CrewMember from "../CrewMember";

const Crew = (props) => {
const css = {backgroundColor: props.secondaryColor, fontFamily: "Prata", 
}

    return(

    props.crews.length > 0 ? <section className="crew" style={css}>
            <h3 style={{borderColor: props.mainColor}}>{props.name}</h3>
            <div className="crew-members">
                {props.crews.map(crewMember => <CrewMember backgroundColor={props.mainColor} key={crewMember.name} name={crewMember.name} role={crewMember.role} image={crewMember.image}/>)}
            </div>
        </section>
        : ""
    )
}

export default Crew;
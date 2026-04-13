import "./CrewMember.css";

const CrewMember = ({name, image, role, backgroundColor}) => {
    return (
        <div className="crew-member">
            <div className="crew-member-header" style={{backgroundColor}}>
                <img src={image} alt={name}></img>
            </div>
            <div className="crew-member-footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default CrewMember;
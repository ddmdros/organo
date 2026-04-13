import Banner from "./components/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Crew from "./components/Crew";
import Footer from "./components/Footer";

function App() {

  const teams = [
    {
      name: "Development",
      mainColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      name: "Front",
      mainColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name: "Data-Science",
      mainColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name: "UX and Design",
      mainColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name: "Mobile",
      mainColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name: "DevOps",
      mainColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      name: "Innovation and Management",
      mainColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]
  const [crews, setCrews] = useState([]);

  const handleCrewMemberCreated = (newCrewMember) => {
    debugger
    setCrews([...crews, newCrewMember]);
  };

  return (
    <div className="App">
      <Banner />
      <Form teamsNames={teams.map(team => team.name)} onCrewCreated={handleCrewMemberCreated} />
      
      {teams.map(team => <Crew 
      key={team.name}
      name={team.name} 
      mainColor={team.mainColor} 
      secondaryColor={team.secondaryColor}
      crews={crews.filter(crew => crew.team === team.name)}/>)}


      <Footer/>

    </div>

  );
}

export default App;

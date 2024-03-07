import {Club}  from './Club';

const clubsData = [
  {
    acronym : "C3LF",
    name: "Club Linux et Logiciels Libres de Fianarantsoa",
    logo: "",
    slogan: "Promouvoir l'utilisation des logiciels libres dans le monde Universitaire et Professionnel",
    description: "",
  },
  {
    acronym: "CE2",
    name: "Club d'Entraide de l'ENI",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "CE2T",
    name: "",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "As ENI - EVBC",
    name: "Club de Volley de l'ENI",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "GBU",
    name: "Groupe Biblique Universitaire",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "ENI Dance",
    name: "Club de Dance de l'Ecole Nationale d'Informatique",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "ECP-ENI",
    name: "ENI Dance",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "ENI-Cybersécurité",
    name: "ENI Dance",
    logo: "",
    slogan: "",
    description: "",
  },  
  {
    acronym: "ENI Dance",
    name: "ENI Dance",
    logo: "",
    slogan: "",
    description: "",
  },
]

export const Clubs = () => {
  return (
    <> 
      <h2>Les clubs au sein de l' ENI</h2>
      <p>De nombreux clubs existes au sein de l'école 
        que soit pour appronfondir nous connaissances et pour se divertir.</p>

      {clubsData.map((club, index) => ( 
        <Club 
          name = {club.name}
          key={index}
          logo= {club.logo}
          slogan ={club.slogan}
          description={club.description}
        />
      ))}
    </>
  )
}

Clubs.protoTpes

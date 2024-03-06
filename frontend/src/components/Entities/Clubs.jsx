import {Club}  from './Club';

const clubsData = [
  {
    acronym : "C3LF",
    name: "Club Linux et Logiciels Libres de Fianarantsoa",
    logo: "",
    slogan: "",
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
    acronym: "",
    name: "EC",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "",
    name: "GBU",
    logo: "",
    slogan: "",
    description: "",
  },
  {
    acronym: "",
    name: "C3LF",
    logo: "",
    slogan: "",
    description: "",
  }
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

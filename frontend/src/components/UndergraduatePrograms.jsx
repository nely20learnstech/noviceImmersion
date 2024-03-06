import { Graduate } from "./Graduate"

const programsData = {
  "programs": [
    {
      "name": "Génie Logiciel",
      "description": "Le programme de Génie Logiciel se concentre sur le développement de logiciels de haute qualité, en mettant l'accent sur la conception, la construction et la maintenance de systèmes logiciels fiables et efficaces.",
      "career_opportunities": [
        "Développeur de logiciels",
        "Ingénieur en génie logiciel",
        "Architecte logiciel",
        "Analyste de système",
        "Chef de projet informatique"
      ]
    },
    {
      "name": "Administration Systèmes et Réseaux",
      "description": "Le programme d'Administration Systèmes et Réseaux forme des professionnels capables de gérer efficacement les systèmes informatiques et les réseaux d'entreprise, assurant leur sécurité, leur performance et leur disponibilité.",
      "career_opportunities": [
        "Administrateur système",
        "Administrateur réseau",
        "Ingénieur en sécurité informatique",
        "Spécialiste en virtualisation",
        "Ingénieur cloud"
      ]
    },
    {
      "name": "Informatique Générale",
      "description": "Le programme d'Informatique Générale offre une formation polyvalente couvrant divers domaines de l'informatique, y compris la programmation, les bases de données, les réseaux, la sécurité et la conception de logiciels.",
      "career_opportunities": [
        "Programmeur",
        "Analyste informatique",
        "Administrateur de bases de données",
        "Spécialiste en support technique",
        "Consultant informatique"
      ]
    }
  ]
}


export const UndergraduatePrograms = () => {
  return (
    <>
        <h1>Programmes en Licence</h1>
        {programsData.programs.map((program, index) => (
            <Graduate  
              key={index}
              title={program.name}
              description={program.description}
              careers={program.career_opportunities} 
            />
          ))
        }
    </>
  )
}

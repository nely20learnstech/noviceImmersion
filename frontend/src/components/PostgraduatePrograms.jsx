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
      "name": "Administration Sys et Réseaux",
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
    },
    {
      "name": "Gouvernance et Ingénierie des données",
      "description": "Le programme de Gouvernance et Ingénierie des données forme des spécialistes capables de gérer et d'exploiter efficacement les données dans les entreprises, en assurant leur qualité, leur sécurité et leur intégrité.",
      "career_opportunities": [
        "Analyste de données",
        "Data scientist",
        "Responsable de la gouvernance des données"
      ]
    },
    {
      "name": "Objets Connectés et Cybersécurités",
      "description": "Le programme d'Objets Connectés et Cybersécurités forme des experts capables de concevoir, développer et sécuriser des systèmes informatiques interconnectés, tels que les objets connectés et les systèmes embarqués.",
      "career_opportunities": [
        "Ingénieur en cybersécurité",
        "Développeur d'objets connectés",
        "Spécialiste en sécurité des systèmes embarqués"
      ]
    }
  ]
}


export const PostgraduatePrograms = () => {
  return (
    <>
    <h1>Programmes en Master</h1>
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

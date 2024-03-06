import { PostgraduatePrograms } from "../components/PostgraduatePrograms"
import { UndergraduatePrograms } from "../components/UndergraduatePrograms"

export const Programs = () => {
  return (
    <>
        <h1>Programmes à l'ENI</h1>
        <div>
            <h2>Programme d'information pour les nouveaux étudiants</h2>
            <p>Choisissez parmi les 6 spécialisations</p>
            <ul>
              <li>Licences</li>
              <li>Masters</li>
              <li>Doctorats</li>
            </ul>
            <button>Trouvez un programme</button>
        </div>
    
        <div>
            <h2>Programme d'information pour les étudiants actuels</h2>
            <p> Ici, vous pouvez trouver le programme d'études complet, 
              les détails sur les cours et modules ainsi que l'emploi du temps.</p>
            
            <button>Guide du programme</button>
        </div>
        {/* <UndergraduatePrograms/>
        <PostgraduatePrograms/> */}
    </>
   
  )
}

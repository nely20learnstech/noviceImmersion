import { Association } from './Association'
import { Clubs } from './Clubs'
import { Group } from './Group'
import { CercleDetudes } from './CercleDetudes'

export const Entities = () => {
  return (
    <>
        <h1>Les entités présentes à l'ENI</h1>
        

        <div>
            <h2>Association étudiante</h2>
            <Association/>
        </div>

        <div>
            <h2>Clubs étudiants</h2>
            <Clubs/>
        </div>

        <div>
            <h2>Groupe</h2>
            <Group/>
        </div>

        <div>
            <h2>Cercle d'études</h2>
            <CercleDetudes/>
        </div>
        <div>
            <h2>Entraide</h2> 
            <CercleDetudes/>
        </div>
    </>

  )
}

//No react a palavra class é usado para criar classe e não para passar a classe dos elementos html, portanto não usaremos só class em html e sim className
//No React usaremos as propriedades em camelcase. ex: onClick, className, htmlFor
import { FormBasico, FormCompleto } from "./telas"

function App() {
  return (
    <>
      <FormCompleto />
      {/* <FormBasico /> */}
    </>
  )
}

export default App

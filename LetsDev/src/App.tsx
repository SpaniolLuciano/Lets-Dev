//No react a palavra class é usado para criar classe e não para passar a classe dos elementos html, portanto não usaremos só class em html e sim className
//No React usaremos as propriedades em camelcase. ex: onClick, className, htmlFor
import { AsyncAwait, FormBasico, FormCompleto, Promisses } from "./telas"
import Callback from "./telas/chamadas-api/callback"

function App() {
  return (
    <>
      {/* <FormCompleto /> */}
      {/* <Callback /> */}
      {/* <Promisses /> */}
      <AsyncAwait />
      {/* <FormBasico /> */}
    </>
  )
}

export default App

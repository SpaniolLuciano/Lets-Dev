//No react a palavra class é usado para criar classe e não para passar a classe dos elementos html, portanto não usaremos só class em html e sim className
//No React usaremos as propriedades em camelcase. ex: onClick, className, htmlFor
import { ConsumindoApis, Home, FormBasico, FormCompleto } from "./telas"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MyContext } from "./contexto"
import { useState, useEffect } from "react"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState<string>()

  useEffect(() => {
    if (!nomeUsuario) {
      let nomeDoLocalStorage = localStorage.getItem("nomeUsuario")
      if (nomeDoLocalStorage) {
        setNomeUsuario(nomeDoLocalStorage)
      } else {
        let nomeInformado = prompt("Qual o seu nome?")
        if (nomeInformado) setNomeUsuario(nomeInformado)
      }
    } else {
      localStorage.setItem("nomeUsuario", nomeUsuario)
    }
  }, [nomeUsuario])

  return (
    <MyContext.Provider value={{ nomeUsuario, setNomeUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-basico" element={<FormBasico />} />
          <Route path="/form-completo" element={<FormCompleto />} />
          <Route path="/consumindo-apis" element={<ConsumindoApis />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App

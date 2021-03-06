import React, { useState } from "react"
import axios from "axios"

const AsyncAwait: React.FC = () => {
  // estado
  const [minhaFotoDePerfil, setMinhaFotoDePerfil] = useState()

  // requisição
  axios
    .get("https://api.github.com/users/SpaniolLuciano")
    .then((resposta: any) => {
      setMinhaFotoDePerfil(resposta.data.avatar_url)
    })
    .catch((erro: any) => console.log("catch", erro))
    .finally(() => console.log("Foi"))

  return (
    <div>
      <img src={minhaFotoDePerfil} alt="Foto Luciano Spaniol" />
    </div>
  )
}

export default AsyncAwait

import { ReactNode } from "react"
import { Logo, NewForm } from "../../imagens"
import * as s from "./styled-card"

interface CardProps {
  titulo: string
  link: string
  descricao: string | ReactNode
  imagem: string
}

const Card = ({ titulo, link, descricao, imagem }: CardProps) => {
  return (
    <s.Container href={link}>
      <img src={imagem} alt="Imagem Let's Dev" />
      <a href={link}>{titulo}</a>
      {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
    </s.Container>
  )
}

export default Card

import React from "react"
import Titulo from "./componentes/Titulo"

//No react a palavra class é usado para criar classe e não para passar a classe dos elementos html, portanto não usaremos só class em html e sim className
//No React usaremos as propriedades em camelcase. ex: onClick, className
class App2 extends React.Component {}

function MeuSite() {
  //Quando começa com letra maiuscula deixa de ser uma função, e passa a ser um componente, ele pode retornar HTML

  // var novoTitulo: string = "Olá mundo" //Pra passar o conteúdo desta string pro codigo HTML, eu preciso por entre chaves

  // function minhaFuncao() {
  //   alert("Opaaa!!!")
  // }

  const novaFuncao = (label: string) => {
    alert(label)
  }

  function MeuBotao(props: any) {
    // const label = props.label or
    const { label } = props //desestruturação

    return (
      <button className="meu-botao" onClick={() => novaFuncao(label)}>
        {label}
      </button>
    )
  }

  return (
    <div>
      {/* Eles sendo componentes eles podem ser declarados como se fosem uma tag HTML */}
      <Titulo titulo="Home" />
      <Titulo titulo="Blog" />
      <MeuBotao label="Botão 1" />
      <MeuBotao label="Botão 2" />
    </div>
  )
}

// function MeuComponente(){return <div/>>}
// const MeuComponente = ()=>{return <div/>>}

export default MeuSite

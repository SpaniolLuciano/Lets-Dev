interface TituloProps {
  titulo: string
}
function Titulo({ titulo }: TituloProps) {
  return (
    <h1
      style={{
        /* Peso da fonte, alinhamento e margens */
        color: "#7D2EBA",
        fontWeight: 600,
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: "60px",
      }}
    >
      {titulo}
    </h1>
  )
}
export default Titulo
// Cada componente tem suas props, que são como propriedades
//Quando começa com letra maiuscula deixa de ser uma função, e passa a ser um componente, ele pode retornar HTML

// var novoTitulo: string = "Olá mundo" //Pra passar o conteúdo desta string pro codigo HTML, eu preciso por entre chaves

// var titulo = props.titulo
// titulo = titulo
// const novaFuncao = (label: string) => {
//   alert(label)
// }

// function MeuBotao(props: any) {
//   // const label = props.label or
//   const { label } = props //desestruturação

//   return (
//     <button className="meu-botao" onClick={() => novaFuncao(label)}>
//       {label}
//     </button>
//   )
// }

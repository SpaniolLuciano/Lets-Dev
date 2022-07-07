// Cada componente tem suas props, que são como propriedades
function Titulo(props: any) {
  //Quando começa com letra maiuscula deixa de ser uma função, e passa a ser um componente, ele pode retornar HTML

  // var novoTitulo: string = "Olá mundo" //Pra passar o conteúdo desta string pro codigo HTML, eu preciso por entre chaves

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
  var titulo = props.titulo
  titulo = titulo

  return <h1>{titulo}</h1>
}
export default Titulo

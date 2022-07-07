// Cada componente tem suas props, que são como propriedades
function Titulo(props: any) {
  var titulo = props.titulo
  titulo = "Página " + titulo

  return <h1>{titulo}</h1>
}
export default Titulo

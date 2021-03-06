import * as s from "./styled-home"
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes"
import { Apis, Logo, FirstSteps, Foto, NewForm } from "../../imagens"
import { useContext } from "react"
import { MyContext } from "../../contexto"

const Home = () => {
  const { setNomeUsuario, nomeUsuario } = useContext(MyContext)

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
      imagem: FirstSteps,
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
      imagem: NewForm,
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
      imagem: Apis,
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
      imagem: Logo,
    },
  ]

  return (
    <s.Container>
      <Header />
      <s.Banner>
        <h1>Que prazer te ver aqui, {nomeUsuario}!</h1>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              key={card.titulo}
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
              imagem={card.imagem}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <img src={Foto} />
          <s.Column>
            <h3>Luciano Henrique Spaniol</h3>
            <p>
              Formado no Curso Técnico de Eletrônica da Fundação Liberato,
              cursando Análise e Desenvolvimento de Sistemas na UNISINOS, sou
              formado em inglês na Twenty English School, e hoje em dia sigo meu
              aprendizado na língua através de aulas particulares. Trabalho
              atualmente na área de Teste de Software. Gosto de novos desafios,
              de trabalhar em equipe e de manter um ótimo relacionamento com as
              pessoas ao meu redor.
            </p>
            <s.ButtonGroup>
              <InputButton
                outlined
                type="button"
                value="LinkedIn"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open(
                    "https://www.linkedin.com/in/luciano-spaniol-657ba8195/",
                    "_blank"
                  )
                }}
                title="Vai para o perfil do Linkedin"
              />
              <InputButton
                type="submit"
                value="GitHub"
                onClick={() => {
                  //Aqui vai o seu perfil do GitHub
                  window.open("https://github.com/SpaniolLuciano", "_blank")
                }}
                title="Vai para o perfil do GitHub"
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  )
}

export default Home

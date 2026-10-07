import { ThemeProvider } from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, EstiloGlobal, PularConteudo } from './styles/global'
import { tema } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <PularConteudo href="#vagas">Ir para a pesquisa de vagas</PularConteudo>
      <Cabecalho />
      <main>
        <Hero />
        <Container id="vagas" tabIndex={-1}>
          <ListaVagas />
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App

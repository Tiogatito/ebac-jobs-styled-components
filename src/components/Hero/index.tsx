import { HeroContainer, HeroConteudo, HeroTitulo } from './styles'

const Hero = () => (
  <HeroContainer aria-labelledby="hero-titulo">
    <HeroConteudo>
      <HeroTitulo id="hero-titulo">
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitulo>
    </HeroConteudo>
  </HeroContainer>
)

export default Hero

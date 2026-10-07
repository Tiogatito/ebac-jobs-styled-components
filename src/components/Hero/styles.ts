import styled from 'styled-components'
import { Container } from '../../styles/global'

export const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('/images/hero.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.cores.acao};
    content: '';
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.celular}) {
    height: auto;
    padding: 24px 0;
  }
`

export const HeroConteudo = styled(Container)`
  position: relative;
  color: #fff;
`

export const HeroTitulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.celular}) {
    font-size: 32px;
  }
`

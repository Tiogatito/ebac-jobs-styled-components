import styled from 'styled-components'
import { Botao } from '../../styles/global'

export const BotaoDetalhes = styled(Botao)`
  display: inline-block;
  padding: 8px 16px;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.celular}) {
    display: block;
    width: 100%;
  }
`

export const VagaContainer = styled.li`
  border: 1px solid ${({ theme }) => theme.cores.principal};
  background: ${({ theme }) => theme.cores.secundaria};
  color: ${({ theme }) => theme.cores.acao};
  padding: 16px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  border-radius: 8px;
  overflow-wrap: anywhere;
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.cores.acao};
      color: ${({ theme }) => theme.cores.secundaria};
      ${BotaoDetalhes} {
        border-color: ${({ theme }) => theme.cores.acao};
        background: ${({ theme }) => theme.cores.secundaria};
        color: ${({ theme }) => theme.cores.acao};
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const Dialogo = styled.dialog`
  width: min(90%, 520px);
  max-height: 90dvh;
  margin: auto;
  padding: 24px;
  border: 2px solid ${({ theme }) => theme.cores.acao};
  border-radius: 12px;
  color: ${({ theme }) => theme.cores.texto};
  background: ${({ theme }) => theme.cores.secundaria};
  &::backdrop {
    background: rgb(30 20 25 / 0.65);
  }
`

export const DialogoConteudo = styled.div`
  overflow-wrap: anywhere;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  p {
    margin-block: 10px;
    line-height: 1.6;
  }
`

export const FecharDialogo = styled(Botao)`
  border-radius: 8px;
  margin-top: 16px;
`

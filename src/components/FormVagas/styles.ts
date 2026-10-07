import styled from 'styled-components'
import { Botao } from '../../styles/global'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  background: ${({ theme }) => theme.cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.celular}) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`

export const Campo = styled.input`
  min-width: 0;
  width: 100%;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.cores.acao};
  color: ${({ theme }) => theme.cores.texto};
  background: #fff;
  outline-color: ${({ theme }) => theme.cores.acao};
  font-size: 16px;
`

export const BotaoPesquisar = styled(Botao)`
  font-size: 18px;
`

import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.celular}) {
    grid-template-columns: 1fr;
  }
`

export const ResultadoPesquisa = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.cores.texto};
  font-size: 14px;
  line-height: 1.6;
`

export const SemResultados = styled.p`
  padding: 32px 0;
  line-height: 1.7;
  color: ${({ theme }) => theme.cores.texto};
`

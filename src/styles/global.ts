import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: Lato, sans-serif; list-style: none; }
  body {
    padding-bottom: 120px;
    min-width: 320px;
    color: ${({ theme }) => theme.cores.texto};
    background: ${({ theme }) => theme.cores.fundo};
  }
  button, input { font: inherit; }
  button, a, input { touch-action: manipulation; }
  button:focus-visible, a:focus-visible, input:focus-visible {
    outline: 3px solid ${({ theme }) => theme.cores.acao};
    outline-offset: 4px;
  }
  button { cursor: pointer; }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const RotuloOculto = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const Botao = styled.button`
  background: ${({ theme }) => theme.cores.acao};
  border: 1px solid ${({ theme }) => theme.cores.acao};
  color: ${({ theme }) => theme.cores.secundaria};
  min-height: 44px;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`

export const PularConteudo = styled.a`
  position: absolute;
  left: 16px;
  top: 12px;
  z-index: 3;
  padding: 12px 16px;
  color: ${({ theme }) => theme.cores.acao};
  background: ${({ theme }) => theme.cores.secundaria};
  transform: translateY(-200%);
  &:focus {
    transform: translateY(0);
  }
`

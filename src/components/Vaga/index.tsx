import { useRef } from 'react'
import {
  VagaContainer,
  VagaTitulo,
  BotaoDetalhes,
  Dialogo,
  DialogoConteudo,
  FecharDialogo
} from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => {
  const dialogoRef = useRef<HTMLDialogElement>(null)
  return (
    <VagaContainer>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <ul>
        <li>Localização: {props.localizacao}</li>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratação: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <BotaoDetalhes
        type="button"
        onClick={() => dialogoRef.current?.showModal()}
      >
        Ver detalhes
      </BotaoDetalhes>
      <Dialogo ref={dialogoRef} aria-label={`Detalhes: ${props.titulo}`}>
        <DialogoConteudo>
          <h2>{props.titulo}</h2>
          <p>
            <strong>Localização:</strong> {props.localizacao}
          </p>
          <p>
            <strong>Senioridade:</strong> {props.nivel}
          </p>
          <p>
            <strong>Contratação:</strong> {props.modalidade}
          </p>
          <p>
            <strong>Salário:</strong> {props.salarioMin} - {props.salarioMax}
          </p>
          <p>
            <strong>Requisitos:</strong> {props.requisitos.join(', ')}
          </p>
          <p>Vaga demonstrativa. Candidaturas indisponíveis.</p>
          <FecharDialogo
            type="button"
            onClick={() => dialogoRef.current?.close()}
          >
            Fechar detalhes
          </FecharDialogo>
        </DialogoConteudo>
      </Dialogo>
    </VagaContainer>
  )
}

export default Vaga

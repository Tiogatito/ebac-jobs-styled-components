import { useState } from 'react'
import type { FormEvent } from 'react'
import { RotuloOculto } from '../../styles/global'
import { Formulario, Campo, BotaoPesquisar } from './styles'

type Props = { aoPesquisar: (termo: string) => void }

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState('')
  const aoEnviarForm = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    aoPesquisar(termo.trim().toLocaleLowerCase('pt-BR'))
  }
  return (
    <Formulario
      onSubmit={aoEnviarForm}
      role="search"
      aria-label="Pesquisar vagas"
    >
      <RotuloOculto htmlFor="termo-vaga">
        Pesquisar vagas por título
      </RotuloOculto>
      <Campo
        id="termo-vaga"
        name="termo"
        value={termo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(evento) => setTermo(evento.target.value)}
        type="search"
      />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </Formulario>
  )
}

export default FormVagas

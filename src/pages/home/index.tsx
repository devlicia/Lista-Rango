import * as S from './styles'
import Input from 'components/Input'
import Minibox from 'components/Minibox'

const Example = [
  {
    isOpen: true,
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    isOpen: true,
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    isOpen: true,
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    isOpen: true,
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },

  {
    nomeRestaurante: 'Nome do Restaurante',
    enderecoRestaurante: 'Endereco do restaurante',
  },
]

export default function Home() {
  return (
    <S.Home>
      <div className='green-bar'>

      </div>
      <h1 className='title'>Bem-vindo ao Lista Rango</h1>
      <Input width='65%' />

      <S.MiniboxContainer>
        {
          Example.map((item: any, index: number) => (
            <Minibox key={index} isOpen={item?.isOpen} />
          ))
        }
      </S.MiniboxContainer>
    </S.Home>
  )
}
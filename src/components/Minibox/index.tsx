import * as S from './styles'
import Image from 'images/vegan-restaurant-logo-design_1438-10.png'

export type MiniboxProps = {
  isOpen?: boolean
}

export default function Minibox({ isOpen }: MiniboxProps) {
  return (
    <S.Container>
      <S.Minibox>
        <img src={Image} />
        <div className='text-minibox'>
          <span className='title-minibox'>Nome do Restaurante</span>
          <span className='subtitle-minibox'>Endereço do restaurante</span>
        </div>

      </S.Minibox>
      <S.Circle isOpen={isOpen}>
        <span className='text-circle'>{isOpen ? 'Aberto agora' : 'Fechado'}</span>
      </S.Circle>
    </S.Container>

  )
}
import * as S from './styles'
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

export type InputProps = {
  width: string
}

export default function Input({ width }: InputProps) {
  return (

    <S.Input width={width}>

      <input placeholder='Buscar estabelecimento' />
      <FaSearch />

    </S.Input>

  )
}
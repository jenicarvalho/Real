import { Container, InputStyled } from './styles';

interface Props {
  children?: JSX.Element
}

const Input = ({ children }: Props) => {
  return (
    <Container>
      {children && children}
      <InputStyled type='text' placeholder='Filtre por nome ou status'/>
    </Container>
  );
}

export default Input;
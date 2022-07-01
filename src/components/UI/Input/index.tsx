import { Container, InputStyled } from './styles';

interface Props {
  children?: JSX.Element | string,
  placeholder?: string
}

const Input = ({ children, placeholder }: Props) => {
  return (
    <Container>
      {children && children}
      <InputStyled type='text' placeholder={placeholder} />
    </Container>
  );
}

export default Input;
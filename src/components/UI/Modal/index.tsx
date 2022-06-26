import { useEffect } from 'react';
import Close from '../SVGs/Close';
import { Container, Title } from './styles';
interface Props {
  handleClose: () => void
}

const Modal = ({ handleClose }: Props) => {

  return (
    <Container className='modal'>
      <Title>
        Cadastrar nova entrada
        <Close handleClose={handleClose} />
      </Title>
    </Container>
  );
}

export default Modal;
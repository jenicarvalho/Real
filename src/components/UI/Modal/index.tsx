import { Container, Title } from './styles';

interface Props {
  handleClose: () => void
}

const Modal = ({ handleClose }: Props) => {
  return (
    <Container>
      <Title>
        Cadastrar nova entrada
        <svg onClick={() => handleClose()} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_61_299)">
          <path d="M4.81792 3.75739C4.52502 3.4645 4.05015 3.4645 3.75726 3.75739C3.46436 4.05029 3.46436 4.52516 3.75726 4.81805L6.93923 8.00003L3.75729 11.182C3.46439 11.4749 3.46439 11.9497 3.75729 12.2426C4.05018 12.5355 4.52505 12.5355 4.81795 12.2426L7.99989 9.06069L11.1819 12.2427C11.4748 12.5356 11.9496 12.5356 12.2425 12.2427C12.5354 11.9498 12.5354 11.4749 12.2425 11.182L9.06056 8.00003L12.2426 4.81802C12.5355 4.52512 12.5355 4.05025 12.2426 3.75736C11.9497 3.46446 11.4748 3.46446 11.1819 3.75736L7.99989 6.93937L4.81792 3.75739Z" fill="#171C26"/>
          </g>
          <defs>
          <clipPath id="clip0_61_299">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </Title>
    </Container>
  );
}

export default Modal;
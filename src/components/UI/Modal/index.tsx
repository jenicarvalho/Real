import { useOutsideClick } from '../../../Hooks'
import { Button } from '../Button'
import Input from '../Input'
import Close from '../SVGs/Close'
import { Container, Title, Content, Grid } from './styles'
interface Props {
  handleClose: () => void
}

const Modal = ({ handleClose }: Props) => {

  const ref = useOutsideClick(handleClose)

  return (
    <Container className='modal' ref={ref}>
      <Title>
        Cadastrar nova entrada
        <Close handleClose={handleClose} />
      </Title>
      <Content>
        <label>Nome</label>
        <Input />
        <Grid>
          <div>
            <label>Valor</label>
            <Input>R$</Input>
          </div>
          <div>
            <label>Vencimento</label>
            <Input />
          </div>
        </Grid>
        <Grid>
          <div>
            <label>Categoria</label>
            <Input />
          </div>
          <div>
            <label>Tipo</label>
            <Input />
          </div>
        </Grid>
        <label>Descrição</label>
        <Input />
        <Button color="primary">Cadastrar</Button>
      </Content>
    </Container>
  )
}

export default Modal
import ArrowLeft from '../UI/SVGs/ArrowLeft';
import ArrowRight from '../UI/SVGs/ArrowRight';
import { Container, Item, Arrows } from './styles';

const Pagination = () => {
  return (
    <Container>
     <Item>
      por página: 10
     </Item>
     <Item>
      1-10 of 276
     </Item>
     <Arrows>
      <ArrowLeft />
     </Arrows>
     <Arrows>
      <ArrowRight />
     </Arrows>
    </Container>
  );
}

export default Pagination;
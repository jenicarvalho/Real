import Entry from '../Entry'
import Filter from '../Filter'
import Heading from '../Heading'
import Pagination from '../Pagination'

import { Container } from './styles'

const Grid = () => {

  const data = {
    type: 'saída',
    name: 'Internet',
    amount: 'R$ 109,00',
    status: 'pago',
    due: 10,
    category: 'casa'
  }
  const data2 = {
    type: 'saída',
    name: 'Financiamento casa',
    amount: 'R$ 1.775,79',
    status: 'em aberto',
    due: 10,
    category: 'financiamento'
  }
  const data3 = {
    type: 'entrada',
    name: 'Salário',
    amount: 'R$ 8,000.00',
    status: 'recebido',
    due: 10,
    category: 'salario'
  }

  return (
    <Container>
      <Filter />
      <Heading />
      <Entry data={data} />
      <Entry data={data2} />
      <Entry data={data3} />
      <Pagination />
    </Container>
  );
}

export default Grid;
import { useState } from 'react'
import ArrowDown from '../UI/SVGs/ArrowDown'
import EntryDescription from './Description'
import { Container, Item, Badge, Amount, Toggle, Row } from './styles'
import { Props, EntryType } from './types'

const Entry = ({ data }: Props) => {

  const [showDescription, setShowDescription] = useState(false)

  const { name, amount, status, due, category, type } = data

  const badgeColor = status === 'pago' || status === 'recebido' ? 'green' : 'red'

  const entryType: EntryType = {
    symbol: type === 'entrada' ? '+' : '−',
    color: type === 'entrada' ? 'green' : 'red'
  }

  return (
    <Container active={showDescription}>
      <Row>
        <Toggle onClick={() => setShowDescription(initialState => !initialState)} active={showDescription}>
        <ArrowDown />
        </Toggle>
        <Item color={entryType.color}>
          {entryType.symbol} {type}
        </Item>
        <Item>
          {name}
        </Item>
        <Item>
          <Amount>{amount}</Amount>
        </Item>
        <Item>
          <Badge color={badgeColor}>{status}</Badge>
        </Item>
        <Item>
          Todo dia {due}
        </Item>      
        <Item>
          <Badge color="primary">{category}</Badge>
        </Item>   
      </Row>
      <EntryDescription active={showDescription}/>
    </Container>
  );
}

export default Entry;
import { useState } from 'react'
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
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.03033 6.46967C5.73744 6.17678 5.26256 6.17678 4.96967 6.46967C4.67678 6.76256 4.67678 7.23744 4.96967 7.53033L7.46967 10.0303C7.76256 10.3232 8.23744 10.3232 8.53033 10.0303L11.0303 7.53033C11.3232 7.23744 11.3232 6.76256 11.0303 6.46967C10.7374 6.17678 10.2626 6.17678 9.96967 6.46967L8 8.43934L6.03033 6.46967Z" fill="#171C26"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z" fill="#171C26"/>
          </svg>
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
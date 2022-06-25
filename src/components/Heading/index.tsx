import React from 'react';

import { Container, Item } from './styles';

const Heading = () => {
  return (
    <Container>
      <Item>
        #
      </Item>
      <Item>
        TIPO
      </Item>
      <Item>
        NOME
      </Item>
      <Item>
        VALOR
      </Item>
      <Item>
        STATUS
      </Item>
      <Item>
        VENCIMENTO
      </Item>
      <Item>
        CATEGORIA
      </Item>
    </Container>
  );
}

export default Heading;
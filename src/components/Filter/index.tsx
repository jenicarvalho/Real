import { useState } from 'react';
import { Button } from '../UI/Button';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import FilterSVG from '../UI/SVGs/Filter';
import Plus from '../UI/SVGs/Plus';
import SearchSVG from '../UI/SVGs/SearchSVG';
import { Container, Filters } from './styles';

const Filter = () => {

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(initialState => !initialState)

  return (
    <Container>
      <Filters>
        <Button color='secondary'>
          <FilterSVG />
          Filtro
        </Button>
        <Input placeholder='Filtre por nome ou status'>
          <SearchSVG />
        </Input>
      </Filters>
      <Button color='primary' onClick={() => toggleModal()} className='modal'>
        <Plus color='#fff'/>
        Cadastrar
      </Button>

      {showModal && <Modal handleClose={toggleModal}/>}
    </Container>
  );
}

export default Filter;
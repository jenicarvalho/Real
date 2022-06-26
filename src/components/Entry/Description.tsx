import Note from '../UI/SVGs/Note';
import Pencil from '../UI/SVGs/Pencil';
import Plus from '../UI/SVGs/Plus';
import { Badge, Description } from './styles'

interface Props {
  active: boolean
}

const EntryDescription = ({ active }: Props) => {

  return (
    <Description className='alert-enter-active' active={active}>
      <ul>
        <li>
          <Note />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias quos qui assumenda ea. Recusandae pariatur eaque explicabo veniam amet ratione suscipit repellat fuga modi numquam sit, quia ipsa voluptates?</li>
        <li>
          <Pencil />
          changed status from 
          <Badge color="red">em aberto</Badge> to 
          <Badge color="green">pago</Badge> on 
          <time> 16 May 2021 @ 11:37 AM</time>.
        </li>
        <li>
          <Plus color='#687182' />
          added on <time>11 May 2021 @ 2:57 PM.</time></li>
      </ul>
    </Description>
  );
}

export default EntryDescription;
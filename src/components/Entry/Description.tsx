import { Badge, Description } from './styles'

interface Props {
  active: boolean
}

const EntryDescription = ({ active }: Props) => {

  return (
    <Description className='alert-enter-active' active={active}>
      <ul>
        <li>
          <svg style={{ width: 25, height: 25}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 12C1.75 13.2426 2.75736 14.25 4 14.25H10.2485C10.5513 14.25 10.8438 14.1401 11.0717 13.9407L13.8231 11.5332C14.0944 11.2958 14.25 10.9529 14.25 10.5925V4C14.25 2.75736 13.2426 1.75 12 1.75H4C2.75736 1.75 1.75 2.75736 1.75 4V12Z" stroke="#868FA0" stroke-width="1.5"/>
          <path d="M5.25 6.5H10.75" stroke="#868FA0" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M5.25 9.5H8.75" stroke="#868FA0" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias quos qui assumenda ea. Recusandae pariatur eaque explicabo veniam amet ratione suscipit repellat fuga modi numquam sit, quia ipsa voluptates?</li>
        <li>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1834 5.8812C12.7833 6.28124 12.5833 6.48127 12.3347 6.48127C12.0862 6.48127 11.8861 6.28124 11.4861 5.8812L10.1212 4.51632C9.72117 4.11627 9.52114 3.91625 9.52114 3.66769C9.52114 3.41913 9.72117 3.21911 10.1212 2.81906L10.3378 2.60248C10.7378 2.20243 10.9379 2.00241 11.1864 2.00241C11.435 2.00241 11.635 2.20243 12.0351 2.60248L13.3999 3.96736C13.8 4.36741 14 4.56743 14 4.81599C14 5.06455 13.8 5.26457 13.3999 5.66462L13.1834 5.8812Z" fill="#5E5ADB"/>
            <path d="M3.20014 14.0024C2.63439 14.0024 2.35151 14.0024 2.17576 13.8266C2 13.6509 2 13.368 2 12.8023V11.4374C2 11.1921 2 11.0695 2.04568 10.9592C2.09136 10.8489 2.17808 10.7622 2.35151 10.5887L7.65841 5.28185C8.05846 4.8818 8.25848 4.68178 8.50704 4.68178C8.7556 4.68178 8.95562 4.8818 9.35567 5.28185L10.7205 6.64673C11.1206 7.04678 11.3206 7.2468 11.3206 7.49536C11.3206 7.74392 11.1206 7.94394 10.7205 8.34399L5.41365 13.6509C5.24021 13.8243 5.15349 13.911 5.04322 13.9567C4.93294 14.0024 4.8103 14.0024 4.56502 14.0024H3.20014Z" fill="#5E5ADB"/>
          </svg>
          changed status from 
          <Badge color="red">em aberto</Badge> to 
          <Badge color="green">pago</Badge> on 
          <time> 16 May 2021 @ 11:37 AM</time>.
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V7.25H13.25C13.6642 7.25 14 7.58579 14 8C14 8.41422 13.6642 8.75 13.25 8.75H8.75V13.25C8.75 13.6642 8.41421 14 8 14C7.58578 14 7.25 13.6642 7.25 13.25V8.75H2.75001C2.33579 8.75 2.00001 8.41422 2.00001 8C2.00001 7.58579 2.33579 7.25 2.75001 7.25H7.25V2.75C7.25 2.33579 7.58578 2 8 2Z" fill="#687182"/>
          </svg>
          added on <time>11 May 2021 @ 2:57 PM.</time></li>
      </ul>
    </Description>
  );
}

export default EntryDescription;
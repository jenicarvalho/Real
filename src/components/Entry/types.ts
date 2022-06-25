export interface Props {
  data: {
    type: string,
    name: string,
    amount: string,
    status: string,
    due: number,
    category: string,
  }
}

type ColorEntry = 'green' | 'red'

export interface EntryType {
  symbol: string,
  color: ColorEntry
}

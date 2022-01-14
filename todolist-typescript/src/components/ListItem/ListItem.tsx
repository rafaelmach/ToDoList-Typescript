import { useState } from "react"
import { Item } from "../../types/Item"
import * as C from "./ListItem.styles"

type Props = {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)

  console.log(isChecked)
  return (
    <C.Container taskStatus={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
      <label>{item.name}</label>
    </C.Container>
  )
}

export default ListItem

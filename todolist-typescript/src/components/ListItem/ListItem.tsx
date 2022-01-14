import { Item } from "../../types/Item"
import * as C from "./ListItem.styles"

type Props = {
  item: Item
  handleCheckBox: (taskId: number, taskStatus: boolean) => void
}

const ListItem = ({ item, handleCheckBox }: Props) => {
  return (
    <C.Container taskStatus={item.done}>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => handleCheckBox(item.id, e.target.checked)}
      />
      <label>
        {item.name} - {item.done.toString()}
      </label>
    </C.Container>
  )
}

export default ListItem

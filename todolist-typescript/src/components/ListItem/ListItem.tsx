import { Item } from "../../types/Item"
import * as C from "./ListItem.styles"

type Props = {
  item: Item,
  handleCheckBox: (taskId: number, taskStatus: boolean) => void,
  deleteTask: (taskId: number) => void
}

const ListItem = ({ item, handleCheckBox, deleteTask }: Props) => {
  return (
    <C.Container taskStatus={item.done}>
      <C.TaskWrapper>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => handleCheckBox(item.id, e.target.checked)}
      />
      <label>
        {item.name}
      </label>
      </C.TaskWrapper>
      
      <C.DeleteTaskIcon onClick={() => deleteTask(item.id)} />
    </C.Container>
  )
}

export default ListItem

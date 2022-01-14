import { useState, KeyboardEvent } from "react"
import * as C from "./AddTasks.styles"

type Props = {
  handleAddTask: (taskName: string) => void
}

const AddTasks = ({ handleAddTask }: Props) => {
  const [inputText, setInputText] = useState("")

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      handleAddTask(inputText)
      setInputText("")
    }
  }

  return (
    <C.Container>
      <C.AddIcon />
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}

export default AddTasks

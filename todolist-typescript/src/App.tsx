import { useState } from "react"
import * as C from "./App.styles"
import AddTasks from "./components/AddTasks/AddTasks"
import ListItem from "./components/ListItem/ListItem"
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Desenvolver mais projetos com Typescript", done: false },
    { id: 2, name: "Continuar o curso da Origamid", done: false },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  const handleCheckBox = (taskId: number, taskStatus: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === taskId) {
        newList[i].done = taskStatus
      }
    }
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddTasks handleAddTask={handleAddTask} />

        {list.map((item, index) => (
          <ListItem item={item} key={index} handleCheckBox={handleCheckBox} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App

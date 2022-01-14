import { useEffect, useRef, useState } from "react"
import * as C from "./App.styles"
import AddTasks from "./components/AddTasks/AddTasks"
import ListItem from "./components/ListItem/ListItem"
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Desenvolver mais projetos com Typescript", done: false },
    { id: 2, name: "Continuar o curso de Front-end da Origamid", done: false },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1 + Math.random(),
      name: taskName,
      done: false,
    })
    setList(newList)
    localStorage.setItem("tasks", JSON.stringify(newList))
  }

  const handleCheckBox = (taskId: number, taskStatus: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === taskId) {
        newList[i].done = taskStatus
      }
    }
    setList(newList)
    localStorage.setItem("tasks", JSON.stringify(newList))
  }

  const deleteTask = (taskId: number) => {
    const taskIndex = list.findIndex((item) => item.id === taskId)

    let newList = [...list]
    newList.splice(taskIndex, 1)
    setList(newList)
    localStorage.setItem("tasks", JSON.stringify(newList))
  }

  useEffect(() => {
    let tasksString: any = localStorage.getItem("tasks")
    let tasksObj = JSON.parse(tasksString)

    setList(tasksObj)
  }, [setList])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddTasks handleAddTask={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            item={item}
            key={index}
            handleCheckBox={handleCheckBox}
            deleteTask={deleteTask}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App

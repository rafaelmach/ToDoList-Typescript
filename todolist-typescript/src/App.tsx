import { useState } from "react"
import * as C from "./App.styles"
import ListItem from "./components/ListItem/ListItem"
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Desenvolver mais projetos com Typescript", done: false },
    { id: 2, name: "Continuar o curso da Origamid", done: false }
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        

        {list.map((item, index) => (
            <ListItem item={item} key={index} />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App

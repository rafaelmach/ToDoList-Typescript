import styled from "styled-components"
import { RiDeleteBin2Fill } from "react-icons/ri"

type ContainerProps = {
  taskStatus: boolean
}

export const Container = styled.div(
  ({ taskStatus }: ContainerProps) =>
    `
  display: flex;
  justify-content: space-between;
  background-color: #20212C;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 7px;
  }

  label {
    color: #CCC;
    text-decoration: ${taskStatus ? "line-through" : "initial"}
  }
`
)

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 2em;
`

export const DeleteTaskIcon = styled(RiDeleteBin2Fill)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #eee;
  cursor: pointer;
`

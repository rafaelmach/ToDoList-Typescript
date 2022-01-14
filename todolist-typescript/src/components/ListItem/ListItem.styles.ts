import styled from "styled-components"

type ContainerProps = {
  taskStatus: boolean
}

export const Container = styled.div(
  ({ taskStatus }: ContainerProps) =>
    `
  display: flex;
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

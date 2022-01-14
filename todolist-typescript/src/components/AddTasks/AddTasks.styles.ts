import styled from "styled-components";
import { MdAdd } from 'react-icons/md'

export const Container = styled.div`
display: flex;
align-items: center;
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;

  input {
    border: 0;
    outline: none;
    color: #eee;
    background: transparent;
    font-size: 1.1rem;
    flex: 1;
  }
`

export const AddIcon = styled(MdAdd)`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #eee;
`
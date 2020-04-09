import styled from "styled-components"

export const SimpleButton = styled.button`
  background-color: transparent;
  color: gray;
  width: 100%;
  border: none;
  border-top: 1px solid lightgray;
  font-size: 14px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`

export const ConfirmButton = styled(SimpleButton)`
  background-color: #66bb6a;
  color: #fff;
  &:hover {
    background-color: #388e3c;
  }
`

export const Buttons = styled.div`
  display: flex;
  height: 40px;
  overflow: hidden;
`

export const Title = styled.h1`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
`

export const ContentInModal = styled.div`
  padding: 15px 25px;
`

export const Container = styled.div`
  width: 600px;
  form label {
    text-align: right;
  }
  .form-group {
    display: flex;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`

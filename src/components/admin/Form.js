import React, { Fragment } from "react";
import styled from "@emotion/styled";
import Input from "./Input";



const Form = styled.form`
  background-color: #30332e;
  padding: 15px;
  width: 90%;
  margin: 15px auto;
  border-radius: 10px;
  letter-spacing: 0.1em;
  h4 {
    text-align: center;
    color: #fffbfc;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  label {
    display: block;
    color: #fffbfcb0;
    margin: 5px 0;
  }
  input {
    text-decoration: none;
    border: none;
    padding: 10px;
    border-radius: 10px;
    width: 95%;
    margin: 5px 0;
    display: block;
    letter-spacing: 0.1em;
    &:hover {
      border: none;
    }
  }
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
  margin-top: 10px;
  margin-left: auto;
  width: 40%;
  border-radius: 10px;
  background-color: #62bbc1;
  letter-spacing: 0.1em;
  color: #fffbfc;
  border: none;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #72d9e0;
  }
`;

const Formulario = ({ actualizarState, apifuncion, tipoForm,titleForm }) => {
  return (
    <Form onSubmit={apifuncion}>
      <h4>{titleForm.titulo}</h4>

      {tipoForm.map((input) => {
        return (
        <Input
        input={input}
        actualizarState={actualizarState}
        key={input.name}
        />
        )
      })
     
      }

      <Button type="submit">{titleForm.textButton}</Button>
    </Form>
  );
};

export default Formulario;

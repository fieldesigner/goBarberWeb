import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é Obrigatório'),
  password:Yup.string()
    .required('Senha obrigatória'),
});

export default function SingIn() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
    <img src={logo} alt="GoBarber" />

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu email" />
      <Input name="password" type="password" placeholder="Sua senha" />

      <button type="submit">Acessar</button>
      <Link to="/register">Criar conta</Link>
    </Form>
    </>
  );
}

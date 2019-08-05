import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import {Form, Input} from '@rocketseat/unform';
import * as Yup from 'yup';


const schema = Yup.object().shape({
  name: Yup.string()
  .required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é Obrigatório'),
  password:Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Senha obrigatória'),
});

export default function SingUp() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
    <img src={logo} alt="GoBarber" />

    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Nome Completo" />
      <Input name="email" type="email" placeholder="Seu email" />
      <Input name="password" type="password" placeholder="Sua senha" />

      <button type="submit">Crir conta</button>
      <Link to="/">Já tenho uma conta</Link>
    </Form>
    </>
  );
}

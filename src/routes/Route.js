import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';


export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false; // variavel logado ou nao
  
  // se nao tiver logado e a rota for privada, redireciona para pag inicial
  if(!signed && isPrivate){
    return <Redirect to="/" />;
  }

  // se tiver logado e a rota nao for privada, redireciona para o dashboard
  if(signed && !isPrivate){
    return <Redirect to="/" />;
  }

  //definindo layout caso esteja logado ou nao
  const Layout = signed ? DefaultLayout : AuthLayout;

  return <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />;
  }

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
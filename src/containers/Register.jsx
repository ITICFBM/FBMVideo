import React, {useState} from 'react';
/** import connet*/
import { connect } from 'react-redux';
/**Importamos Link */
import { Link } from 'react-router-dom';

import {registerRequest} from '../actions';
import  '../assets/styles/components/Register.scss';
import Header from '../components/Header';

const Register =props =>{
  /* Creamos nuestra constante que es la que se va a encarga usamos react hook useState
  * cargamos nuestro formulario y traemos setValues que es el valor de nuestros inputs
   */
  const [form,setValues] =  useState({
    email:'',
    name:'',
    password: '',
  });
  const handleInput = event => {
    setValues({
      ...form,
      /* de esta forma obtenemos los elementos de nuestros input */
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event  => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
    //console.log (form);
  }

  return(
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña" 
              onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
}
const mapDispatchToProps = {
  registerRequest, 
}
export default connect(null, mapDispatchToProps)(Register);

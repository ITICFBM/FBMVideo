/**importamos useState */
import React , { useState } from  'react';
/** conectamos nuestro login con redux */
import {connect} from 'react-redux';
/** Importamos Link */
import {Link} from 'react-router-dom';
/* importamos nuestro actions */
import {loginRequest} from '../actions';
/** importamos el login scss */
import '../assets/styles/components/Login.scss'
/** importamos las imagenes */
import twittericon  from '../assets/static/twitter-icon.png';
import googleicon  from '../assets/static/google-icon.png';
import Header from '../components/Header';

/** componente presentacional */
const Login = props => {
  const [form , setValues] = useState({
    email: '',
    password:'',
  });
/** declaramos handleInut para que se encarge de los cambios cada vez que escribimos en el input */
  const handleInput = event =>{
    setValues({
      ...form,
      /** obtenemos de forma dinamiva el valor del value */
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit =  event =>{
      event.preventDefault();
      /** pasamos el props y mandamos el estado con form y asi simulamos que hemos iniciado session */
      props.loginRequest(form);
      /** redireccionamos al home con history */
      props.history.push('/');
      console.log(form);  
    }
    return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
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
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" /> Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={googleicon} /> Inicia sesión con Google</div>
            <div><img src={twittericon} /> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">
              No tienes ninguna cuenta {' '}
              <Link to="/register">
                Regístrate
              </Link>
          </p>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
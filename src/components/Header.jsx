/** Importanos React */
import React from 'react'
/** importamaos connect */
import { connect } from 'react-redux';
/** importamos LIn de react router */
import {Link} from 'react-router-dom';
/** importamos gravatar */
import gravatar from  '../utils/gravatar'
/** importamos actions de logout request */
import {logoutRequest} from '../actions';
/**Mnadas a llamar el app.scss */
//import Header from '../assets/styles/App.scss'
/** HACEMOR REFERENCIA DE HEADER .SCSS */
import '../assets/styles/components/Header.scss';
/** Declaramos una constante con un return implicito */
/** Hacer referencia a este elemto de logo */
import logo  from '../assets/static/logo-platzi-video-BW2.png';
import userIcon  from '../assets/static/user-icon.png';
import classNames from 'classnames';

const Header = props => {
  const  user= [];
  const { isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length  > 0;
  
  const  handleLogout = () => {
    props.logoutRequest({})

  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link to="/">
        <img  src={logo}className="header__img"  alt="FBM Video" />
      </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
        }
        <p>Perfil</p> 
      </div>
      <ul>
        {hasUser ?
        <li><a href="/">{user.name}</a></li> :
        null
      }
      {
      hasUser ?
        <li>
          <Link href="#logout" 
          onClick={handleLogout}> 
          Cerrar Sesion</Link>
          </li>
        :
        <li>
          <Link to="/login">
            Iniciar Sesion
          </Link>
        </li>
      }
      </ul>
    </div>
    </header>
  );
}


//export default Header;
const mapStateTooProps = state =>{
  return {
    user:state.user
  };
};
 const mapDispatchToProps ={
   logoutRequest,
 }
export default connect(mapStateTooProps, mapDispatchToProps)(Header);
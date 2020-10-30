/** Con  useSate voy a manejar mi estado y con useefect voy manejar peticiones a api y escuchando algun cambio  o manejar algun evento entre componentes
 * sea necesario
 */

import React, {useState,useEffect} from 'react'; 
/* Importamos connect que nos sirve para conectar nuestra aplicacióN
 */
import { connect } from 'react-redux';

//import React from 'react'; 
//Importamos el Header al contenedor principal */ 
import Search from '../components/Search';
/** importamos categories y carousel */
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/components/Carousel.scss';
import Header from '../components/Header';
import { searched } from '../actions';

/** IMPORTAMOS el custom hooks */
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
import NotFound from './NotFound';

/** creamos una constante que se llama api que contien la url de la api */
//con redux ya no se ocupa.const API = 'http://localhost:3000/initalState'

//en el componente app traemos por destructuracion los props
const Home = props =>{
  const { mylist, trends, originals } = props;

  const  videos= [];
  const searched = Object.keys(videos).length  > 0;


  return  (
  /** de esta forma estoy trayendo los valores y actualizarla  */
  //eliminamos por que con redux ya no lo ocupamos.const initalState = useInitialState(API);
  /**y cambiamos nuestro return implicito por un return normmal 
    *declaramos una constante que tiene dos elemenots vides nombre de la variable que guarda el estado setvideos permite actualizar el estado esto se trae de useState
r   *ecibe  como propieda elemntos para inicarlizar el estado esto puede ser string un int, un arrgelo ,objeto,bolean
   */
  //const [ videos, setVideos ] = useState([]);
/**useEffect resive una function anonima  esta funcion anonima lo que hace es 
 * utilizamos nuestra logica fetch lo que hace es que resive una api *
 * y luego aqui paso un then cuando la api resuleva la inf yo a esa respuesnta osea a response lo convierto en un objeto 
 * que pueda ocupar en mi aplicacion. 
*/
  /* useEffect(()=>{
    //fetch(API)
    fetch('http://localhost:3000/initalState')
    .then(response => response.json())
    /** Aqui tenemos otro llamado que nos permite decir que  a mi inf 
     * que ya tengo se la voy a pasar a setVideo y le trasmito la info una vez que ya la tengo la voy a mandar a mi estado */
    /**.then(data =>setVideos(data));
    /** useEfect resive otro parametro que se encarga de estar escuchando alguna propiedad que pueda cambiar y asi vovler a ejecutarse
     * si nosotros no le pasamos esta propiedad va a crear un loop infinito lo que queres es que se ejecute la primera vez y despues 
     * poder trasmitir estos datos a nuestro estado pasamos un arreglo vacio
     
  },[])/** ;*/  

  //console.log(videos);
  //console.log(initalState);
  
    //return videos.length === 0 ? <h1>Loadingâ€¦</h1> : (
    //estos datos ya no se validan por que ya estan en mi estado return initalState.length === 0 ? <h1>Loadingâ€¦</h1> : (

    /**Aqui es nuestro layout vamos a traer nuestros componentes */
    <>
    <Header />
      <Search isHome />
      { searched.length > 0 &&  
                <Categories title="Coincidencias en la busqueda">
                    <Carousel>
                    {searched.map(item => 
                        <Carousel Itemkey={item.id} {...item}/>
                    )}
                    </Carousel>
                </Categories>
            } 
    {/* {videos.mylist.length > 0 && */}

    {mylist.length > 0 && 
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map(item =>
              
              <CarouselItem key={item.id} {...item} 
              /* Declaramos list que es true o false */
              isList={true}
              />
            )}
              </Carousel>
      </Categories>
      }

      <Categories title="Tendencias">
        <Carousel>
          {/** Vamos a obtner el resultado de cada uno de estos items y por cada uno de ellos le paso mi conponente con la inf*/}
          {trends.map(item =>
          /* destructuring assigment,  {...item} Lo que hace bÃ¡sicamente es traerse todos lo elementos dentro de un objeto o un array. */
            <CarouselItem key={item.id} {...item}/>
            )}
          <CarouselItem />
        </Carousel>
      </Categories>
    
    
      <Categories title="Originales De Digital Pineapple">
        <Carousel>
          {originals.map(item =>
            
          <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      </> 
  );
};

//export default App;

const mapStateToProps = state =>{
  return{
    searched: state.searched,
    isSearching: state.isSearching,
    mylist: state.mylist,
    trends: state.trends,
    originals:state.originals,
  };
};
/** vamos a unir el conector  para unir mi aplicación con el estado de  mi provider*/
export default connect(mapStateToProps, null)(Home);
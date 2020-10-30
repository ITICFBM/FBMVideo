import React from 'react';
/**importamos nuestra aplicación */
import {connect} from 'react-redux';
/** importamos el actions set favorite como tenemos in index no hay necesidad de llamar el archivo */
import PropTypes from 'prop-types';
/** importamos Link */
import {Link} from 'react-router-dom';
import {setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss' 

/** importamos las imagenes */
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/deleteicon.png';
/* const CarouselItem = () =>( */
const CarouselItem = (props) =>{
  const { id, cover, title, year, contentRating, duration, mylist, isList } = props;
  const handleSetFavorite = () =>{
    /** declaramos la  const exit validando si den nuestro item hay un id con el mismo ida  */
  const exist = mylist.find(item => item.id == id)
        if(exist){
            alert("Ya tienes agregado a favorito");  
        }else{
    /* mandamos a llamar el prop que ya esta mapeado */
    props.setFavorite(
        {
          /** pasamos el id */
          id,cover, title, year, contentRating, duration,
        })
    }
  }
  const handleDeleteFavorite = (itemId) =>{
      props.deleteFavorite(itemId)
    
  } 
    return(
        <div className="carousel-item">
          <img className="carousel-item__img" src={cover} alt={title}  />
          <div className="carousel-item__details">
            <div>
            <Link to={`/player/${id}`}>
                <img 
                className="carousel-item__details--img" 
                src={playIcon} 
                alt="Play Icon" 
                />
              </Link>
              {/* SI isList es veredadero entinces muestrame el icono de eliminar si no muestrame el icono de favorite la declaramos en los props */}
              {isList ? 
                  <img 
                    className="carousel-item__details--img" 
                    src={removeIcon} 
                    alt="Remove Icon" 
                  onClick={()=>handleDeleteFavorite(id)} /> :
                  
                  <img className="carousel-item__details--img" 
                    src={plusIcon} 
                    alt="Plus Icon" 
                    onClick={handleSetFavorite} />
            }
            </div>
          {/*  <p className="carousel-item__details--title">Tí­tulo descriptivo</p> */}
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
            {/* template literal */}
            {`${year} ${contentRating} ${duration}`}
          </div>
        </div>

  );
}
CarouselItem.propTypes ={
  /** aqui definimos el cover e indicamos que llega como un string */
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}
// exportamos em mapStateToProps para saber el estado de mi list si ya se agrego el id
const mapStateToProps = (state) => {
    return {
        mylist : state.mylist
    }
}

//export default CarouselItem;
const mapDispatchToProps = {
  /** mandamos traer nuestra accion y para esto hay que importarla */
  setFavorite,
  deleteFavorite,

}
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
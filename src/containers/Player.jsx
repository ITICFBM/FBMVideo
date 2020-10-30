import React, {useEffect}  from 'react';
import '../assets/styles/components/Player.scss';
/* importamos connect redux */
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from '../containers/NotFound';


const Player = props => {
  const { id } = props.match.params;
  const { playing=[] } = props;

const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ?  (
    <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
         <div className="Player-back">
           <button type= "button" onClick={() => {props.history.goBack();}}>
             Regresar
           </button>
         </div>
    </div>
  ) : <NotFound />
};
/**  creamos la function mapstatetoprops*/
const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispacthToProps = {
  getVideoSource
};
/** conectamos nuestro componente con redux */
export default connect(mapStateToProps,mapDispacthToProps)(Player);
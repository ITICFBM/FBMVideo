/** declaramos useState, useEffect  esto es un custom hook que vamos hacer que podemos utilizar 
 * cuando necesitemos
 */
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        //fetch(API)
        /** eliminamos el endpoint de la api y de decimos que pasa por una api al porner API SE LA TENGO QUE PASAR COMO propiedad a 
         * conts DE ESTA FORMA FUELVO ANOSTICA ESTA INFORMACION Y PODEMOS UTILIZAR LA API DONDE SEA NECESARIA  */
        fetch(API)
            .then(response => response.json())
            /** Aqui tenemos otro llamado que nos permite decir que  a mi inf 
             * que ya tengo se la voy a pasar a setVideo y le trasmito la info una vez que ya la tengo la voy a mandar a mi estado */
            .then(data => setVideos(data));
        /** useEfect resive otro parametro que se encarga de estar escuchando alguna propiedad que pueda cambiar y asi vovler a ejecutarse
         * si nosotros no le pasamos esta propiedad va a crear un loop infinito lo que queres es que se ejecute la primera vez y despues 
         * poder trasmitir estos datos a nuestro estado pasamos un arreglo vacio
         */
    }, []);
    /**retornamos el estado */
    return videos;
};

/** para que lo pueda utilizar donde sea necesarios debo de exportarlos */
export default useInitialState;
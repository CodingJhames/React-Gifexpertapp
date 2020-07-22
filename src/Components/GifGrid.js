
import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => {

    /* const [images, setImages] = useState([]);
    //const [contador, setContador] = useState(0);
    

    useEffect( () => {
        getGifs( category )
            .then(  setImages );
    }, [ category ] ) */
    
    const { data: imgs , loading }= useFecthGifs( category );

    console.log( loading );
    //console.log( data );

    //getGifs();
    
    return (
        
        <> 
           <h3 className="card  animate__animated animate__fadeIn"> { category } </h3>
           
           { loading && <p className="card  animate__animated animate__flash">loading</p> }

         <div className="card-grid">
            
                
            {/*  <h3> { contador } </h3> */}
            {/* <button onClick={ () => setContador( contador + 1 ) } ></button>  */}
               
                 {
                     imgs.map( img  => (
                         <GifGridItem 
                         key={ img.id }
                         { ...img } 
                         />   
                     ) )
                }

                
            </div>  
        </>
       
    )
}

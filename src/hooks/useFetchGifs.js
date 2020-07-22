import { useState, useEffect }  from 'react';
import { getGifs } from '../helpers/getGifs';





export const useFecthGifs = ( category ) => {

   
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
     
      getGifs( category)
      .then( imgs => {
       

            setState({
                data: imgs,
                loading: false
    
              });

        
      })

    }, [ category])

/* 
    setTimeout(() => {
       setState({
            data: [ 2,4,6,8,10 ],
            loading: false
        });
    },3000); */

    return state;


}
import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';



const GifExpertApp = (  ) => {

    //const categories = [ 'one punch', 'slam dunk', ' dragon ball '];
    const [categories, setCategories ] = useState( [ 'slam dunk'] )

   /*  const handleAdd = (  ) => {
      
        return setCategories( [...categories, 'yuyu hakusho', 'micho el mao mao',' bernal el mamerto ' ] );
       
    } */



    return  (
    <>
        <h2>GifExpertApp </h2>
        <AddCategory setCategories = { setCategories }/>
        <hr /> 

        {/* <button onClick= {  handleAdd } >Agregar</button> */}
        <ol>
            {
                categories.map(category => 
                    <GifGrid 
                    key = { category }
                    category={ category } />
                )
            }
        </ol>
    </>
   )
}  

export default GifExpertApp;



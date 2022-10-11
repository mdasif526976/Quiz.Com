import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const Home = () => {
    const a = useLoaderData();
    const {data} = a; 
    console.log(data)
   
       return (
        <div>
           <div className='  grid md:grid-cols-3'>
           {
              data.map(carts=> <Cart key={carts.id} cart={carts}></Cart>)
            }
           </div>
        </div>
    );
};

export default Home;
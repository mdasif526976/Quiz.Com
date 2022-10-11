import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const Home = () => {
    const a = useLoaderData();
    const {data} = a; 
    console.log(data)
   
       return (
        <div>
            <div className=''>
                <img className='h-52' src='https://i.ibb.co/CPygJzL/Screenshot-2022-10-11-182247.jpg' alt=''></img>
                <h1 className='text-5xl mb-5'>Let's quiz with us</h1>
            </div>
           <div className=' grid md:grid-cols-3 gap-4 m-3'>
           {
              data.map(carts=> <Cart key={carts.id} cart={carts}></Cart>)
            }
           </div>
        </div>
    );
};

export default Home;
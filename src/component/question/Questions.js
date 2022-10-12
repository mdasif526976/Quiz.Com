import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ErrorContext } from '../main/Main';
import Question from './Question';

const Questions = () => {
    const data = useLoaderData().data;
    const {id,name,questions,total} = data;
    const [error, Seterror] = useContext(ErrorContext);
    return (
        <div className=' bg-pink-400 text-white'>
            <h1 className='text-3xl'>All question from: {name}</h1>
            <h3 className='text-3xl'>Total Questions:{total}</h3>
            <h4 className='text-3xl'>Your wrong Answer: {error} </h4>
            <div className='grid grid-cols-1 gap-6' >
                {
                    questions.map(question => <Question key={id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;
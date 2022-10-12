import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ErrorContext } from '../main/Main';
import Question from './Question';

const Questions = () => {
    const data = useLoaderData().data;
    const {id,name,questions,total} = data;
    const [error, Seterror] = useContext(ErrorContext);
    return (
        <div className=' bg-stone-300'>
            <h1>All question from: {name}</h1>
            <h3>Total Questions:{total}</h3>
            <h4>Your wrong Answer: {error} </h4>
            <div className='grid grid-cols-1 gap-6' >
                {
                    questions.map(question => <Question key={id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;
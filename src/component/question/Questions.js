import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Questions = () => {
    const data = useLoaderData().data;
    const {id,name,questions,total} = data;
    return (
        <div className=' bg-stone-300'>
            <h1>All question from: {name}</h1>
            <h3>Total Questions:{total}</h3>
            <div className='grid grid-cols-1 gap-6' >
                {
                    questions.map(question => <Question key={id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Questions;
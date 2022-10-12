import React from 'react';
const CreateOption = (props) => {
    const { option,btn,correctAnswer,key } = props;


    return (
        <div className='md:grid grid-cols-1 '>       
<label for={option}>{option}</label>
<input onClick={() => btn({option,correctAnswer})} type="radio" key={key} name="contact" value={option}/>
 

</div>
     );
};
     export default CreateOption;
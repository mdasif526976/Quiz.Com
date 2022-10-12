import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import CreateOption from '../create option/CreateOption';
import { ErrorContext } from '../main/Main';
const Question = (props) => {
    const {id,question,correctAnswer,options} = props.question;
    //------------------ error counter --------------------
    const [error,Seterror] = useContext(ErrorContext);
    // ------------------show toast -------------------
    const wrongToast =()=>{
        toast.error('Your anwser is wrong XX', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const rightToast =()=>{
        toast.success('Your anser is right!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const notify = () => toast(`Anser is: ${correctAnswer}`);
    const showtoast = (id)=>{
      const {option,correctAnswer} = id;
      if (option === correctAnswer) {
        rightToast()
      }
      else{
        wrongToast();
        Seterror(error+1)
      }
    }
    return (
        <div className='mt-4'>
            <div className='flex justify-center gap-5'>
                <h1>{question}</h1>
                
               <ToastContainer>
               </ToastContainer>
               <FontAwesomeIcon onClick={notify} className='text-white' icon={faEye}></FontAwesomeIcon>
                
            </div>
            <div>
        
        <p className='text-xl'>Choose your preferred option</p>
                </div>  
      {
         options.map(option => <CreateOption btn={showtoast} correctAnswer={correctAnswer} key={id} option={option}></CreateOption>)
     }
                               
        </div>
    );
};

export default Question;
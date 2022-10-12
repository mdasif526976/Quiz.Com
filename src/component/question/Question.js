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
        toast.error('Your anwser is wrong X', {
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
        <div className='mt-4 text-xs mx-2 bg-green-50 text-black rounded'>
            <div className='flex justify-center md:justify-center xl:justify-center text-xl'>
                <h1>{question}</h1>
                
               <ToastContainer>
               </ToastContainer>
               <FontAwesomeIcon onClick={notify} icon={faEye}></FontAwesomeIcon>
                
            </div>
            <div>
        
        <p className='text-xl '>Choose your preferred option</p>
                </div>  
    <div className='p-14'>
    <div className='flex flex-col text-center gap-14'>
      {
         options.map(option => <CreateOption btn={showtoast} correctAnswer={correctAnswer} key={id} option={option}></CreateOption>)
     }
      </div>
    </div>
                               
        </div>
    );
};

export default Question;
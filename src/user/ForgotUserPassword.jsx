import React, { useState,useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import {clearErrors,clearMessage , forgotPassword} from '../actions/UserAction';
import Loader from '../components/layout/Loader';
import MetaData from '../components/layout/Metadata';
import { MdOutlineMailOutline } from "react-icons/md";


const ForgotUserPassword = () =>{

    const dispatch = useDispatch();
    const alert = useAlert();

    const {error,message,loading} = useSelector((state)=>state.forgotPassword);


    const [email, setEmail] = useState("");
    
    const fotgotPasswordSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
        myForm.set("email", email);
        dispatch(forgotPassword(myForm));
      };
     
   
      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (message) {
            alert.success(message);
            dispatch(clearMessage());
        }

      }, [dispatch, error, alert,message]);

    return(
        <>
        {loading ? <Loader /> :
          <>
          <MetaData title='Forgot Password'/>
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="bg-white p-5 shadow-lg border border-gray-300">
            <h2 className="text-center pb-2 border-b  border-primary text-xl font-semibold uppercase">Forgot Password</h2>
          <div className="signup-form mt-10">
                  <form onSubmit={fotgotPasswordSubmit}>
                  <div className="mb-8 relative">
                      <MdOutlineMailOutline size={35} className='absolute top-[3px] text-black font-bold px-2' />
                      <input
                        type='email'
                        className="w-full p-2 px-8 border font-serif border-gray-400 rounded-sm focus:outline-none focus:border-primary sm:text-sm"
                        placeholder="email"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  

                      />
                    </div>
                    <button
                    type="submit"
                    disabled={loading} // Disable button when loading
                    className={`w-full ${
                      loading
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-primary text-white hover:bg-secondary transition duration-300"
                    } p-2 border border-blue-500 rounded-sm`}
                  >
                    {loading ? "Sending..." : "Send"} {/* Change text on loading */}
                  </button>
                  </form>
                </div>
             </div>
         </div>
          </>
        }
      </>
    );
};

export default ForgotUserPassword;
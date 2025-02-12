import React, { useState,useEffect } from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css"
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {clearErrors, updateProfile} from '../actions/UserAction';
import { UPDATE_PROFILE_RESET } from '../constants/UserConstant';
import Loader from '../components/layout/Loader';
import MetaData from '../components/layout/Metadata';
import profilelogo from '../images/Profile.png'


const UpdateUserProfile = () =>{

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const {user} = useSelector((state) => state.user);
    const {error,isUpdated,loading} = useSelector((state)=>state.profile);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [countryCode,setCountryCode] = useState('+91');
    const [mobileNumber,setMobileNumber] = useState();
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState(profilelogo);



    const updateProfileSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("countryCode", countryCode);
        myForm.set("mobileNumber", mobileNumber);
        if (avatar && avatar !== user.avatar.url) {
            myForm.set("avatar", avatar); // This should be the file, not the base64 string
          }
        for (const [key, value] of myForm.entries()) {
            console.log(key, value);
        }
        dispatch(updateProfile(myForm));
      };
     
      const updateProfileDataChange = (e) => {
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };
    
        reader.readAsDataURL(e.target.files[0]);
      };
    
      useEffect(() => {

        if(user){
            setName(user.name);
            setEmail(user.email);
            setCountryCode(user.countryCode);
            setMobileNumber(user.mobileNumber);
            setAvatarPreview(user.avatar.url);
        }
        
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success('Profile updated successfully');
          navigate('/account');

          dispatch({
            type:UPDATE_PROFILE_RESET
          })
        }
      }, [dispatch, error, alert, loading, navigate,user, isUpdated]);

    return(
        <>
        {loading ? <Loader /> :
          <>
          <MetaData title='Update Profile'/>
          <div className="flex flex-col items-center justify-center sm:min-h-screen h-[35rem]  bg-gray-100">
          <div className="bg-white p-5 shadow-lg border border-gray-300">
            <h2 className="text-center pb-5 text-xl font-semibold uppercase">Update Profile</h2>
          <div className="signup-form">
                  <form onSubmit={updateProfileSubmit} encType="multipart/form-data">
                    <div className="mb-8 relative">
                      <LuUser size={35} className='absolute top-[3px] text-black font-bold px-2' />
                      <input
                        type="text"
                        className="w-full p-2 px-8 border font-serif border-gray-400 rounded-sm focus:ring-0"
                        placeholder="Name"
                        name='name'
                        required
                        value={name}
                        onChange={(e) =>setName(e.target.value)}
                      />
                      {/* {errors.name && <p className="text-red-500 absolute text-xs -bottom-5">{errors.name}</p>} */}
                    </div>

                    <div className="mb-8 relative">
                      <MdOutlineMailOutline size={35} className='absolute top-[3px] text-black font-bold px-2' />
                      <input
                        type="email"
                        className="w-full p-2 px-8 border font-serif border-gray-400 rounded-sm focus:ring-0"
                        placeholder="Email"
                        name='email'
                        required
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                      />
                      {/* {errors.email && <p className="text-red-500 absolute text-xs -bottom-5">{errors.email}</p>} */}
                    </div>

                    <div className="mb-6">
                    <div className="flex relative border-none border-gray-300 rounded">
                     <PhoneInput
                     className=""
                     defaultValue={countryCode}
                     value={countryCode}
                     country="in" 
                     onChange={(code) => setCountryCode({ ...country, countryCode: `+${code}` })}        
                      />
                    <input
                     type="phone"
                     placeholder="Phone"
                     name="mobileNumber"
                     maxLength="15"
                     value={mobileNumber}
                     onChange={(e) => setMobileNumber(e.target.value)}
                     className="p-1 absolute left-24 border-t-[1px] border-gray-300 rounded  focus:outline-none"
                     />
                     </div>
                {/* {errors.mobileNumber && <span className="text-red-500 text-xs">{errors.mobileNumber}</span>} */}
            </div>

                    <div className="flex registerImage my-5">
                      <img src={avatarPreview} alt="Avatar preview" className='h-10 w-10' />
                      <input type="file" name='avatar' accept='image/*' onChange={updateProfileDataChange}
                        className='text-xs rounded-sm'
                      />
                      {/* {errors.avatar && <p className="text-red-500 absolute text-xs -bottom-5">{errors.avatar}</p>} */}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white p-2 hover:bg-secordary transition duration-300 rounded-sm"
                    >
                      Update profile
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

export default UpdateUserProfile;
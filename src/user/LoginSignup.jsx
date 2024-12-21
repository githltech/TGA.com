import { useState,useEffect } from "react";
import profilelogo from '../images/Profile.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useAlert } from "react-alert";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";
import { clearErrors, clearMessage, login, register } from '../actions/UserAction';
import MetaData from "../components/layout/Metadata";
import { useModal } from "../context/ModelContext";
import Loader from "../components/layout/Loader";

const LoginSignup = () => {

  const dispatch = useDispatch();
   const alert = useAlert();
  const Navigate = useNavigate();

  const {error, loading, isAuthenticatedUser,message } = useSelector((state) => state.user);

  const { closeModal } = useModal();


    const [isLogin, setIsLogin] = useState(true);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setRegisterShowPassword] = useState(false);
    const [avatar, setAvatar] = useState(profilelogo);
    const [avatarPreview, setAvatarPreview] = useState(profilelogo);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      countryCode: "+91",
      mobileNumber: "", // Renamed from mobile
     
    });
    const { name, email, password ,countryCode, mobileNumber  } = user;
   
  const loginSubmit = (e) => {
    e.preventDefault();
    if (isAuthenticatedUser) {
      alert.info("You are already logged in."); // Show "already logged in" alert
      return;
    }
    if (!loginEmail || !loginPassword) {
      // setErrors({ ...errors, login: "Please fill in all fields." });
      alert.error("Please fill in all fields."); // Validation alert
      return;
    }
    dispatch(login(loginEmail, loginPassword))
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateRegisterForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("countryCode", countryCode); 
    myForm.set("mobileNumber", mobileNumber);
    if (avatar && avatar !== profilelogo) {
      myForm.set("avatar", avatar);
    }
    dispatch(register(myForm))
    .unwrap()
    .then(() => {
      alert.success("Signup successful! Please wait...");
    })
    .catch((err) => {
      if (err.response?.data.message === "User already exists") {
        alert.info("User already registered. Please login.");
      } else {
        alert.error("Something went wrong. Please try again.");
      }
    });
    resetForm();
  };

  const validateRegisterForm = () => {
    const newErrors = {};
    // Name validation
    if (!name) newErrors.name = "Name is required.";
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*]/.test(password)) {
      newErrors.password = "Password must contain at least one special character.";
    }
  if (!mobileNumber) {
    newErrors.mobileNumber = "Mobile number is required.";
  } else {
    const fullNumber = `${countryCode}${mobileNumber}`;
    try {
      const parsedNumber = parsePhoneNumberFromString(fullNumber);
      if (!parsedNumber || !parsedNumber.isValid()) {
        newErrors.mobileNumber = `Invalid phone number for country code ${countryCode}.`;
      }
    } catch (error) {
      newErrors.mobileNumber = "Invalid phone number format.";
    }
  }
    return newErrors;
    };

  const resetForm = () => {
    setUser({ name: '', email: '', password: '',mobileNumber: '', countryCode: '' });
    setAvatar(profilelogo);
    setAvatarPreview(profilelogo);
    setErrors({});
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const file = e.target.files[0];

    // 1MB size limit
    const maxSize = 1 * 1024 * 1024; // 1MB in bytes

    if (file && file.size > maxSize) {
      setErrors({ ...errors, avatar: "Image size should be less than 1MB." });
      return; // Stop the upload process if size exceeds 1MB
    } else {
      setErrors({ ...errors, avatar: "" }); // Clear error if valid
    }
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
    }
  };


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message); // Show success alert (e.g., login/signup success)
      dispatch(clearMessage()); // Clear message immediately
    }

    if (isAuthenticatedUser) {
       closeModal();
       Navigate('/account');
       clearMessage();
    }
  }, [dispatch, error, alert, isAuthenticatedUser, loading, Navigate,closeModal,message]);

  const RegisterPasswordVisibility = () => {
    setRegisterShowPassword(!showRegisterPassword);
  };

  const LoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  
  return (
  <>
  {loading ? <Loader/> : 
  <>
   <MetaData title="Login Register"/>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6 md:px-60">
      <div className="bg-white w-full rounded-lg shadow-lg relative">
        {/* Close Button in Top-Right Corner */}
        <button
          onClick={closeModal}
          className="absolute -top-4 -right-4 px-[8.3px] shadow-lg bg-white text-gray-500 hover:text-black text-xl font-light border-primary rounded-full hover:animate-spin"
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="flex h-[30rem]">
      {/* Left Side Image */}
      <div
        className="hidden lg:flex w-1/2  bg-cover bg-center rounded-l-lg"
        style={{
          backgroundImage:
            "url('https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2')", // Replace with your image URL
        }}
      ></div>

      {/* Right Side Login/Signup */}
      <div className="w-full lg:w-1/2 flex flex-col items-center py-6">
        {/* Tabs */}
        <div className="flex space-x-8">
          <button
            className={`text-lg font-museo font-bold1 ${
              isLogin ? "text-primary border-b-[1px] border-primary" : ""
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-lg font-museo font-bold1 ${
              !isLogin ? "text-primary border-b-[1px] border-primary" : ""
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/*login Form */}
      
          {isLogin ? (
             <form onSubmit={loginSubmit}  className="w-full border-t-[1px] border-primary px-8">
            <h3 className="text-[#262626] font-light1 text-[20px] my-3">Login Into In Your Account</h3>         
             <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
            />
          </div>
      
           <div className="mb-4 relative">
              <input
                type={showLoginPassword ? "text" : "password"} 
                placeholder="Password"
                value={loginPassword}
                 onChange={(e) => setLoginPassword(e.target.value)}
                className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
              />
               {/* {errors.login && <p className="text-red-500 absolute text-xs top-10">{errors.login}</p>} */}
              <span onClick={LoginPasswordVisibility} className="absolute right-2 top-2 cursor-pointer">
               {showLoginPassword ? "👁️" : <AiOutlineEyeInvisible className='text-xl' />}
                </span>
                <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)} // Toggle state
                className="absolute right-3 top-3 text-gray-500"
                >
              </button>
            </div>
            
            <div className="text-right mb-6">
             <Link to='/password/forgot' className='text-xs font-roboto text-gray-700 hover:text-red-500 border-b-[1px] hover:border-b-black'>Forget Password?</Link>
              </div>
              <button
               type="submit"
               className="w-full bg-primary text-white p-2 hover:bg-secordary transition duration-300 border border-blue-500 rounded-sm"
                >
              Login
              </button>
           </form>
        

          ) : (
            <form onSubmit={registerSubmit} encType="multipart/form-data" className=" border-t-[1px] border-primary px-8 overflow-y-auto scrollbar-hide">
               <h3 className="text-[#262626] font-light1 text-[20px] my-3">Create Your Account</h3> 
            <div className="mb-6 relative">    
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={registerDataChange}
            
              className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
            />
             {errors.name && <p className="text-red-500 absolute text-xs top-10">{errors.name}</p>}
          </div>

          <div className="mb-6 relative">    
            <input
              type="email"
              placeholder="Email"
              name='email'
            
              value={email}
              onChange={registerDataChange}
              className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
            />
             {errors.email && <p className="text-red-500 absolute text-xs top-10">{errors.email}</p>}
          </div>

           <div className="mb-8 relative">
              <input
                 type={showRegisterPassword ? "text" : "password"}
                placeholder="Password"
                name='password'
                maxLength="12"
                value={password}
                onChange={registerDataChange}
                className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
              />
              <span onClick={RegisterPasswordVisibility} className="absolute right-2 top-2 cursor-pointer">
                {showRegisterPassword ? "👁️" : <AiOutlineEyeInvisible className='text-xl' />}
                </span>
               {errors.password && <p className="text-red-500 absolute text-xs top-10">{errors.password}</p>}
            </div>

            <div className="mb-6">
            <div className="flex relative border-none border-gray-300 rounded">
           <PhoneInput
            className=""
            defaultValue={user.countryCode}
            value={user.countryCode}
            country="in" 
            onChange={(code) => setUser({ ...user, countryCode: `+${code}` })}        
             />
             <input
            type="phone"
            placeholder="Phone"
            name="mobileNumber"
            maxLength="15"
            value={user.mobileNumber}
            onChange={registerDataChange}
           className="p-1 absolute left-24 border-t-[1px] border-gray-300 rounded  focus:outline-none"
           />
         </div>
         {errors.mobileNumber && <span className="text-red-500 text-xs">{errors.mobileNumber}</span>}
            </div>

           <div className="flex registerImage mb-8 relative">
             <img src={avatarPreview} alt="profile" className='h-10 w-10' />
             <input
              type="file"
              name='avatar'
              accept='image/*'
              onChange={registerDataChange}
              
               className='text-xs rounded-sm w-full'
             />
             {errors.avatar && <p className="text-red-500 absolute text-xs top-10">{errors.avatar}</p>}
           </div>

           <button
            type="submit"
            className="w-full bg-primary text-white p-2 hover:bg-secordary transition duration-300 border border-blue-500 rounded-sm"
            >
            Register
            </button>
            </form>
          
          )}
        
      
          {isLogin ? (
            <p className="mt-4 text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </p>
          )}
      </div>
    </div>
      </div>
    </div>
  </>
  }
  </>
  );
};

export default LoginSignup;

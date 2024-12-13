import { useState } from "react";
import profilelogo from '../images/Profile.png'
import { Link } from "react-router-dom";

const LoginSignup = ({ onClose }) => {
  
    const [isLogin, setIsLogin] = useState(true);
    const [avatarPreview, setAvatarPreview] = useState(profilelogo);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6 md:px-60">
      <div className="bg-white w-full rounded-lg shadow-lg relative">
        {/* Close Button in Top-Right Corner */}
        <button
          onClick={onClose}
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

        {/* Form */}
        <form className="w-full border-t-[1px] border-primary px-8">
            {!isLogin ? 
            (<h3 className="text-[#262626] font-light1 text-[20px] mt-3">Create Your Account</h3>) 
            :
            (<h3 className="text-[#262626] font-light1 text-[20px] my-3">Login Into In Your Account</h3>)
            }
             
          {!isLogin && (
            <div className="my-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
              />
            </div>
          )}

          <div className="mb-4">    
            <input
              type="email"
              placeholder="Email"
              className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
            />
          </div>

        
           <div className="">
           <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="p-2 block w-full border rounded border-gray-300 focus:outline-none focus:border-primary sm:text-sm"
              />
            </div>
            <div className="">
                <Link to="/"></Link>
            </div>
           </div>

          {!isLogin && (
             <div className="flex registerImage mb-4">
             <img src={avatarPreview} alt="profile" className='h-10 w-10' />
             <input type="file" name='avatar' accept='image/*'
               className='text-xs rounded-sm w-full'
             />
           </div>

          )}
         
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-sm font-museo font-bold1  hover:bg-secordary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

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
        </form>
      </div>
    </div>
      </div>
    </div>
  );
};

export default LoginSignup;

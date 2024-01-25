import { useEffect, useRef, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
// import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import {Helmet} from "react-helmet";




const Login = () => {
  const captchaRef = useRef(null);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const Navigate = useNavigate(); 
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const captcha = e.target.captcha.value;

    try {
      const result = await signInUser(email, password, captcha);
      console.log(result);
      setLoginError('');
      // setSuccess('Login Successful');
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
      });
    } catch (error) {
      console.error(error);
      setLoginError('Invalid email or password. Please try again.');
      setSuccess('');
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Invalid email or password. Please try again.',
      });
    }
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log('Please provide an email', emailRef.current.value);
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please Check Your Email');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      alert('Captcha Matched');
    } else {
      setDisabled(true);
      alert('Captcha Does Not Match');
    }
  };



return (
   <>
   
    <Helmet><title>Contest Creation Platform || Login</title></Helmet>        
       
    

   <div>
            <div>
     
         </div>
      <div className="hero min-h-screen bg-lime-200" >
        <div className="hero-content lg:flex-cols-reverse">
        <div className="w-full h-96 hover:scale-90 transition-all ">
      <img src="https://i.ibb.co/8bCTLq6/img-8.png" alt="" />
      <img className="w-96 h-16 " src="https://i.ibb.co/RvgL1RK/logs-rem.png" alt="" />
      </div>
      


     <div className="card max-w-lg w-full bg-blue-100 shadow-2xl shadow-red-800" >
     <form onSubmit={handleLogin} className="card-body"> 
      <div className="form-control">
        <label className="label">
          <span className="label-text text-sm font-bold text-black font-serif">Email</span>
        </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="input input-bordered"
          required
                />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-sm font-bold text-black font-serif">Password</span>
    </label>
    <input
      type="password"
      name="password"
      placeholder="Password"
      className="input input-bordered"
      required
    />
    <label className="label">
      <a onClick={handleForgetPassword} href="#" className="label-text-alt text-red-600 font-serif text-sm link link-hover">
        Forgot password?
      </a>
    </label>
  </div>








  <div className="form-control">
    <label className="label font-mono text-center mb-1"><LoadCanvasTemplate /></label>
    <input type="text" ref={captchaRef} name="captcha"
      placeholder="Type the captcha above"
      className="input input-bordered font-mono "/>
    <button onClick={handleValidateCaptcha} className='btn-outline btn-xs text-black font-mono mt-2'>Validate</button>
  </div>


  <div className="form-control">
  <input disabled={disabled} className='btn bg-green-600 text-black' type='submit' value='Login'/>
    {/* <button className="btn bg-black text-black">Login</button> */}
    <p className="font-serif text-center">
    <i>  New here? <Link className="font-serif text-orange-600 font-bold" to="/register"> 
          Create an Account
      </Link></i>
    </p>

{/* <p className="   font-mono py-5 font-semibold text-orange-800 text-center items-center" >Or Login With</p> <p>
        <button onClick={handleGoogleSignIn}
          className="btn bg-black rounded-s-3xl rounded-e-3xl px-28 ml-24 py-2  text-orange-300"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
      </p> */}
              </div>
            </form>
            {loginError && <p className="text-red-700">{loginError}</p>}
            {success && <p className="text-green-700">{success}</p>}
          </div>
        </div>
  
         </div>
         
      </div>
   </>
  );
};

export default Login;

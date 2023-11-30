import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";





const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    
//reset error////////////////////////////

setRegisterError('');
setSuccess('');


   if(password.length < 6 ) {
    setRegisterError(
              'Password should be at best six characters.'
            );
            return;
   }
    else if (!/[a-z]/.test(password)) {
        setRegisterError(
            'Password should be at least one uppercase.'
          );
          return;
    }

    else if (!/[!@#$%^&*]/.test(password)) {
        setRegisterError(
            'Password should be at least one special character.'
          );
          return;
    }

   

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterError('');
        setSuccess('User Created Successfully');
        // Toast.success('User Created Successfully');
        updateProfile(result.user, {
    
            displayName: name,
            photoURL: photo,
            })
            .then(()=> {
              // Toast.success('User Created Successfully');
                window.location.reload();
                setSuccess('User Created Successfully');
                return Swal.fire({
                  icon: "success",
                  title: "Successfully registered",
                  text: "Thank you!",
                });
            })
            .catch(error => {
                console.log(error)
            })
      
      })
      .catch((error) => {
        console.error(error);
        setRegisterError('Failed to create user. Please try again.');
        setSuccess('');
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




    return (
     
      // <div className='grid  md:grid-cols-2 items-start'>
      // <div className="hero man-w-screen  rounded-e-3xl">
      // <div className="text-center lg:text-left w-1/2">
      //  <div className="card flex-shrink-0 w-full max-w-lg shadow-3xl ml-96 mr-52 bg-base-200  shadow-red-600 rounded-e-3xl rounded-s-md">
      // <div className="card flex-shrink-0 w-full max-w-lg shadow-3xl mr-52 bg-white  shadow-red-600 rounded-e-3xl rounded-s-md">
      
      <div className="hero min-h-screen">
        <div className="hero-content lg:flex-cols-reverse">
        <div className="w-96 hover:scale-110 transition-all aos-init aos-animate">
       <img className='justify-start w-4/5 ' src="https://i.ibb.co/WHrNMdP/jjk.png" alt="" />   
       </div>
       
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <form onSubmit={handleRegister} className="card-body mr-5 mt-2 shadow-2xl shadow-red-800 py-8 px-16 mb-2 rounded-e-full rounded-ss-full bg-cyan-300">
         <div className="form-control">
                <label className="label">
                  <span className="label-text ml-3 text-base  text-blue-900  font-sans">Your Name</span>
                </label>
                <input
                      type="text"
                      placeholder="User Name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
    
                  <label className="label">
                    <span className="label-text ml-3 text-base  text-blue-900  font-sans">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Your Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
    
                  <label className="label">
                    <span className="label-text ml-3 text-base  text-blue-900  font-sans">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text ml-3 text-base  text-blue-900 font-sans">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
    
    
    
    
    {/* <span className="relative  -right-60" onClick={() => setShaowPassword(!showPassword)}>
              {
                showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
              }
              </span>  */}
    
    
    
    
                    <label className="label">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="label-text-alt link text-center font-serif text-red-500 link-hover"
                          >
                            Forgot password?
                          </a>
                        </li>
                        <li>
                          <input
                            className="font-sans"
                            type="checkbox"
                            name="terms"
                            id="terms"
                          />
                          <label className="textarea bg-cyan-300" htmlFor="terms">
                            Accept our <a href="#">Terms & Condition</a>
                          </label>
                        </li>
                      </ul>
                    </label>
                  </div>
                  <div className="form-control">
                    <button className="btn bg-green-700 text-white font-semibold">
                      Submit
                    </button>
                  </div>
    
              </form>
              {registerError && <p className="text-red-700">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>} 
            
        </div>
        <div>
                   
       <div className="stats bg-yellow-500 mt-48 rounded-e-full rounded-s-full hover:scale-110 transition-all w-full aos-init aos-animate shadow-2xl">
       <div className="stat">
       <div className="stat-title text-black font-sans text-center">Already have an account? <Link className="font-serif" to="/login">
       <button className="btn text-green-800 bg-yellow-500 border-y-yellow-500  border-x-yellow-500 font-bold">Login</button>
      </Link></div>
      <p className="font-mono font-semibold text-white text-center items-center mb-1">Or Login With</p>
       <button onClick={handleGoogleSignIn}
          className="btn bg-black rounded-s-3xl mb-1 rounded-e-3xl px-32 py-2 text-orange-300"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
    {/* <div className="stat-desc">21% more than last month</div> */}
  </div>
  
</div>
            
        </div>
      </div>

            
            
            
              {/* <p className="font-serif text-start ml-10">
              <i>  Already have an account? So

            <Link className="font-serif" to="/login">
        <button className="btn btn-link text-green-700 font-bold">Login</button>
      </Link>

    first.</i>
    </p>

    <p className="   font-mono py-5 font-semibold  text-orange-800 text-center items-center" >Or Login With</p> <p>
        <button onClick={handleGoogleSignIn}
          className="btn bg-black rounded-s-3xl mb-5 rounded-e-3xl px-32 ml-10 mr-5 py-2 text-orange-300"
        >
          <FcGoogle className='w-8 h-6'></FcGoogle>
        </button>
      </p>
 */}

    
      </div>
          </div>
           {/* <ToastContainer></ToastContainer>  */}
       </div>
      
    );
};

export default Register;
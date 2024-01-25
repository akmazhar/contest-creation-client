import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const emailRef = useRef(null);

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;

    // Reset errors
    setRegisterError('');
    setSuccess('');

    if (password.length < 6) {
      setRegisterError('Password should be at least six characters.');
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError('Password should have at least one lowercase letter.');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('Password should have at least one uppercase letter.');
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegisterError('Password should have at least one special character.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            window.location.reload();
            setSuccess('User Created Successfully');
            Swal.fire({
              icon: "success",
              title: "Successfully registered",
              text: "Thank you!",
            });
          })
          .catch((error) => {
            console.log(error);
          });
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
    <>
      <Helmet><title>Contest Creation Platform || Sign Up</title></Helmet>

      <div className="hero min-h-screen bg-slate-300">
        <div className="hero-content lg:flex-cols-reverse">
          <div className="w-96 hover:scale-90 transition-all aos-init aos-animate">
            <img className="ml-52 w-full" src="https://i.ibb.co/jRjPj8X/rh.png" alt="" />
            <div className="stats bg-yellow-500 hover:scale-90 transition-all w-full shadow-inner rounded-s-full rounded-b-full shadow-green-800 ml-48">
              <div className="stat">
                <div className="stat-title text-black font-sans text-center">Already have an account?
                  <Link to="/login" className="font-serif text-green-800 font-bold"> Login</Link></div>
                <p className="font-mono text-blue-800 font-semibold text-center items-center mb-1 mt-2">---- Or ----</p>

                <button onClick={handleGoogleSignIn} className="btn btn-block bg-black rounded-s-3xl mb-1 rounded-e-3xl py-2 text-white font-serif">
                Login With Google<FcGoogle className='w-6 h-6'></FcGoogle>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl shadow-red-800 py-2 px-10 w-full bg-white ml-48">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-blue-900 font-semibold ml-1 font-serif"> Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="User Name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <label className="label">
                    <span className="label-text text-base text-blue-900 font-semibold font-serif">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    {...register("photo")}
                    placeholder="Your Photo URL"
                    name="photo"
                    className="input input-bordered"
                  />
                  {/* <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" /> */}

                  <label className="label">
                    <span className="label-text text-base  text-blue-900 font-semibold font-serif">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter Your Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-blue-900 font-semibold font-serif">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password")}
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />

                    <label className="label">
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="label-text-alt link text-center font-sans text-sm font-medium text-red-500 link-hover"
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
                          <label className="textarea bg-white" htmlFor="terms">
                            Accept our <a href="#">Terms & Condition</a>
                          </label>
                        </li>
                      </ul>
                    </label>
                  </div>

                  <div className="form-control">
                    <button type="submit" className="btn bg-green-700 text-white font-semibold">
                      Submit
                    </button>
                  </div>
                </form>
                {registerError && <p className="text-red-700">{registerError}</p>}
                {success && <p className="text-green-700">{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

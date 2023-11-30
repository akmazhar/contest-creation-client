
import { useContext } from "react";
import { TbUserCircle } from "react-icons/tb";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";








const Navbar = () => {


  const {user, logOut} = useContext(AuthContext)
  // console.log(user);
  const handleLogout = () => {
    logOut()
        .then(() => {
            toast.success('log Out Successfully');
        })
        .catch(error => {
            console.log(error.message)
        })
}
  

  return (
    <div className="bg-[#030712] text-white">
      <nav className="flex flex-wrap justify-between items-center py-2 shadow-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Logo />
     
        <div className="w-full md:w-auto ml-80 mr-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-wrap gap-10 text-center mr-5 font-serif text-sm font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-rose-600" : ""
                }
              >
                Home
              </NavLink>
            </li>

          
    
                    {
                       user ?  <li>
                        <NavLink
                          to="/login"
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white" : ""
                          }
                        >
                          <span>{user.email}</span>
                          <span>{user.displayName}</span>
                          <span>{user.photoURL}</span>
                        {/* <img src={user.email}" at="" /> */}
                        <button onClick={handleLogout}>Logout</button>
                        </NavLink>
                      </li>
                      :
                      <li>
                      <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "text-white" : ""
                        }
                      >
                        Login
                      </NavLink>
                      </li>
                      }
               <li > 
                   <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               <div className="w-10 rounded-full"> 
                                <TbUserCircle className='h-8 w-7'></TbUserCircle>
                                </div> 
                                </label>
                            <ul tabIndex={0} className="ml-2 z-[2] p-2 shadow font-serif text-lg menu menu-sm dropdown-content bg-lime-100 rounded-b-full rounded-s-full text-white rounded-box w-64">
                            <li className='text-green-600'><a>User</a></li>
                            <Link to="/dashboard"><li><a className='text-blue-600'>Dashboard</a></li></Link>
                                <Link to="/logout"><li><a className='text-red-600'>Log Out</a></li></Link>
                                {/* <Link to="/pagination"><li><a className='text-black'>Pagination</a></li></Link> */}
                            </ul>
                        </div>
                    </div>
                    </li>
                </ul>
       
                </div>
              </nav>
            </div>
          );
        };

        export default Navbar;

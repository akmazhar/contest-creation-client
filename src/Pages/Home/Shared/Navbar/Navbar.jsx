import './Navbar.css'
import { useContext } from "react";
import { TbUserCircle } from "react-icons/tb";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";







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
      <nav className="flex flex-wrap justify-between items-center px-16 py-2 shadow-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Logo />
     
        <div className="w-full md:w-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-wrap text-center font-serif text-sm font-semibold gap-5">
            <li>
       
         <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-600" : "text-white"
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
                            isPending ? "pending" : isActive ? "text-green-600" : "text-white"
                          }
                        >
                          <span className="font-s text-green-600">{user.displayName}<br/></span>
                          <span className="font-sans text-yellow-400 mr-2">{user.email}</span>
                          <span>{user?.photo}</span>
                   {/* <img src={user.email}" at="" /> */}
                        {/* <button onClick={handleLogout}>Logout</button> */}
                        </NavLink>
                      </li>
                      :
                      <li>
                      <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "text-green-600" : "text-white"
                        }
                      >
                        Login
                      </NavLink>
                      </li>
                      }
              
                   
               <li > 
               {/* <li>
            <Link to="/" >
              <button className="btn bg-black border-black">
            <FaShoppingCart className="text-white w-1/3 h-6"></FaShoppingCart>
              <div className="badge badge-secondary bg-black border-black mb-5 text-rose-500">+0</div>
              </button>
            </Link>
            </li> */}
     <div className="flex-none bg-[#030712]">
    {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator gap-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item text-rose-500 bg-[#030712] border-[#030712]">+0</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-rose-800 shadow-inner rounded-t-full">
        <div className="card-body">
          <span className="font-bold text-lg"> 6 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="/AllContest" className="btn bg-yellow-400 btn-block">View Contest</Link>
          </div>
        </div>
      </div>
    </div> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ml-2">
        <TbUserCircle  className='h-8 w-7 text-white'></TbUserCircle>
          {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
        </div>
        
      </div>
      <ul tabIndex={0} className="z-[2] font-mono text-sm menu menu-sm dropdown-content border-t-orange-500 bg-red-300 rounded-e-full text-white rounded-box w-60 shadow-green-600 shadow-inner">
        <li><a className="font-mono text-bold text-green-600"><span className="text-black">User Name : </span> {user?.displayName} </a></li>       
        {/* <Link to="/user"><li><a className='text-pink-300 font-sans'>User Name : </a></li></Link>          */}
        {/* <Link to="/UserDashboard"><li><a className='text-blue-600 ml-5'>Dashboard</a></li></Link>   */}
        <div className="dropdown dropdown-left mr-2">
        <Link to="/Dashboard"><li tabIndex={0} role="button" className=" text-teal-950 font-mono ml-10">Dashboard</li></Link>
  <ul tabIndex={0} className="dropdown-content z-[1] menu px-3 py-2 bg-emerald-700 text-white w-52 rounded-3xl rounded-s-full font-mono ml-20 text-lg shadow-black shadow-2xl">
  <Link to="/UserDashboard"><li><a>1. User Dashboard</a></li></Link> 
  <Link to="/CreatorDashboard"><li><a>2. Creator Dashboard</a></li></Link> 
  </ul>
</div>
   
        {/* <Link to="/setting"><li><a className='text-black ml-12'>Settings</a></li></Link> */}
        <Link onClick={handleLogout}><li><a className='text-blue-900 font-mono font-bold ml-20 '>Logout</a></li></Link>
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


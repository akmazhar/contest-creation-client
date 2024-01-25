import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Notice = () => {

    return (
      <div>
        <div className="max-w-7xl mx-auto">

       <div>
       {/* <div className="items-center justify-center font-sans text-xl bg-white text-green-800 text-center font-extrabold hover:scale-110 transition-all tracking-widest ">
            <p>{moment().format('llll')}</p>
            </div> */}
        <div className="flex ml-5 mr-5 mb-5 ">
        <button className="btn bg-blue-900 text-white font-serif text-base border-red-500 rounded-s-full rounded-b-full shadow-2xl">Update Info</button>
        <Marquee pauseOnHover={true} speed={50}>
         <Link className="mr-5 font-serif text-pink-400 " to="/">Calling all designers to participate in our creativity-fueled design contest and bring innovative concepts to life.</Link>
         <Link className="mr-5 font-serif text-green-600" to="/">Join the React Rally, where developers can engage in a friendly competition to demonstrate their React skills and build cutting-edge applications..</Link>
         <Link className="mr-5 font-serif text-red-700 " to="/">Our annual meeting will be held on December 31, 2024.</Link>
         <Link className="mr-5 font-serif text-yellow-600" to="/">Unleash your JavaScript prowess in our coding contest and showcase your mastery of the language!</Link>
         <Link className="mr-5 font-serif text-cyan-800" to="/">Dive into the Coding Conundrum Championship and test your coding skills across various domains to claim the title of coding champion!</Link>
         </Marquee>
         </div>
         </div>
       
          </div>
          </div>
          
 
    );
};

export default Notice;
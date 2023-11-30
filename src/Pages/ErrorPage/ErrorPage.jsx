import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
      
        
        <div>
           
            <div>
            <div className="items-center justify-center w-full h-full">
            <video autoPlay muted loop className="video w-full h-full mt-28 mb-2 ml-32 mr-28 rounded-e-full shadow-2xl shadow-white" >
            <source src="/src/assets/error.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            {/* <img src="/src/assets/1.png" alt="" /> */}
            </div>
      
            </div>
            <Link className="flex justify-center w-250 border-red-600 h-150" to={'/'}>
            {/* <button className="btn w-25 h-25 "><img src="https://i.ibb.co/tqWpFH2/po.png" alt="" /></button> */}
            <button className="btn bg-white w-25 h-25 "><img src="https://i.ibb.co/ZdHMdPr/rsz-1wwwabrarcom.png" alt="" /></button>
            </Link>
            {/* <Helmet>
          <title> It's 404 | Click Go Home </title>
        </Helmet> */}
        </div>
        
    );
};

export default ErrorPage;
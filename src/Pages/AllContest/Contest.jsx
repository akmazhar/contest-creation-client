import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Contest = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('https://contest-creation-server.vercel.app/sixcard')
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  const oneCart = {
    image: data.image,
    contest: data.contest,
    count: data.count,
    info: data.info,
  };

  const registration = () => {
    fetch("https://contest-creation-server.vercel.app/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oneCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Registration is selected",
            icon: "success",
            confirmButtonText: "Thank You!",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const contestFee = () => {
    fetch("https://contest-creation-server.vercel.app/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oneCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Paid!",
            text: "Your Contest Fee is Paid",
            icon: "success",
            confirmButtonText: "Good Job!",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    
    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto shadow-inner border-red-600 ml-10 mr-10 mb-5 mt-10 gap-5">
      {data.map((data, index) => (
        <div key={index} className="card w-96 bg-yellow-900 shadow-2xl border-pink-500 ">
          <figure className="h-60 overflow-hidden">
            <img
              src={data.image}
              alt=""
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body px-2 text-center py-4 bg-cyan-500 shadow-2xl border-pink-500 rounded-b-3xl">
            <div className="flex">
              <div>
                <h2 className=" text-rose-600 text-center bg-yellow-300 border-white font-semibold font-serif">{data.contest}</h2>
                <p className="font-mono  text-white text-center mb-1">Participant: {data.count}</p>
                
                <p className="font-serif font-base text-violet-950 m-1">Info: <span className="text-black font-normal font-serif">{data.info}</span></p>
               
             
                {/* <div className="btn btn-group btn-group-vertical justify-center">
                  <Link to="/UserDashboard">
                    <button onClick={contestFee} className="btn bg-red-600 text-white font-sans border-black ">
                      Contest Fee : $ {data.contestFee}
                    </button>
                  </Link>
                </div>
                <div className="btn-group btn-group-vertical mt-1 ml-5 mr-5 px-14 space-y-3 justify-center">
                  <Link to="/allcontest">
                    <button onClick={registration} className="btn btn-block bg-black px-3 shadow-amber-600 text-white font-mono border-white border-spacing-2">
                      Click for Register
                    </button>
              </Link>
              </div> */}



            <div className="join join-vertical lg:join-horizontal gap-2 rounded-e-full rounded-t-full ">

              <Link to="/UserDashboard"><button onClick={contestFee}  className="btn join-item bg-green-800 text-white font-sans border-white">Contest Fee : $ {data.contestFee}</button></Link>

              <Link to="/allcontest"><button onClick={registration}  className="btn join-item bg-black px-3 shadow-amber-600 text-white font-mono border-white border-spacing-8 ">Click for Register</button></Link> 
              
            </div>



              </div>
              </div>
              </div>
              </div>
            ))}
        </div>
    );
};

export default Contest;

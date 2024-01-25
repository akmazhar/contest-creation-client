import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const Details = () => {
  const { id } = useParams();
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch(`https://contest-creation-server.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJsonData(data);
      })
  }, [id]);
 console.log(jsonData)
  const oneCart = {
    image: jsonData.image,
    name: jsonData.name,
    count: jsonData.count,
    info: jsonData.info,
    prize: jsonData.prize,
    winner: jsonData.winner,
    win: jsonData.win,
    deadline: jsonData.deadline,
  };


  const registration = () => {
    fetch("https://contest-creation-server.vercel.app/contestant", {
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
            text: "You are selected for contest",
            icon: "success",
            confirmButtonText: "Thank You!",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>  
    <Helmet><title> Contest Creation Platform || Details </title></Helmet>
    

    <div className="card card-side mb-1 mt-1 ml-52 mr-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lime-500 rounded-e-3xl rounded-s-full shadow-2xl">
    
      <figure className="ml-3">
        <img className="mr-4 shadow-2xl" src={jsonData.image} alt="image" />
      </figure>
      
      <div className="card-body  bg-black px-10 py-5 rounded-s-3xl shadow-inner shadow-yellow-500 ">
        <div className="grid">
          <div>
              <h2 className="font-bold text-pink-700 font-serif">{jsonData.name}</h2>
              <figure className="ml-3">
              <img className="rounded-e-3xl rounded-s-3xl mr-4 w-1/2 h-72" src={jsonData.win} alt="image" />
              </figure>
              <h3 className="font-bold text-yellow-400 font-serif text-center mt-2">Winner : {jsonData.winner}</h3>
           
            <p className="font-sans font-semibold text-blue-500 text-center">Participant : {jsonData.count}</p>
            <p className="font-mono text-white">Info : {jsonData.info}</p>
            <h2 className="font-mono text-red-600 font-lg text-center">Prize : $ {jsonData.prize}</h2>
            <p className="font-sans text-white text-center bg-green-700 rounded-full">Deadline :  {jsonData.deadline}</p>
        
           
          </div>
          <div className="btn-group btn-group-vertical mt-4  space-y-2 justify-end">
          {/* <Link to="/myOrder"><button
              onClick={myOrderHandle} 
              className="btn bg-green-800 mr-92 shadow-amber-600 text-white font-mono border-red-600 border-spacing-8 px-10"
            >
              Order
            </button> */}
          <Link to="/allContest"><button
              onClick={registration} 
              className="btn btn-block bg-pink-800 shadow-white text-white font-mono border-white border-spacing-8"
            >
              Contest Registration is Done
            </button></Link>
          </div>
        </div>
      </div>
      {/* <Helmet>
          <title>Contest Creation Platform | Contest Details</title>
        </Helmet> */}
    </div>
    </>
  );
};

export default Details;

import { Link } from "react-router-dom";



const ContestCard = ({ service }) => {
    const {_id, contest, image, count, info } = service;

    return (
        <div className="bg-yellow-200 card w-96" data-aos="flip-down">
        <figure className="px-2 pt-5">
        <img src={image} alt=""/>
        </figure>
        <div className="rounded-e-full">
        <div className="card-body text-center items-center bg-white px-10">
        <h2 className="card-title font-sans font-bold text-red-600">{contest}</h2>
        <p className="font-serif text-yellow-950 text-center font-semibold">Participants: {count}</p>
        </div>
        <p className="font-sans rounded-e-full font-semibold text-violet-700 ml-5 mr-2 mb-2">InShort: <span className="text-black font-normal font-serif">{info}</span></p>
        </div>
       
        <Link to={`/details/${_id}`}> <button className="btn ml-28 mr-28 font-mono bg-green-950 text-white px-14 mb-2">Details</button></Link>
        </div>

    );
};

export default ContestCard;

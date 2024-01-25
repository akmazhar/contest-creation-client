    import { Link } from "react-router-dom";



    const ContestCard = ({ service }) => {
    const {_id, contest, image, count, info } = service;

    return (

        <div className="card bg-yellow-200 w-96 mb-5 shadow-2xl shadow-violet-950" data-aos="flip-down">
        <figure><img src={image} alt=""/></figure>    
        <h2 className="font-sans font-bold text-lg text-red-600 text-center mb-1 mt-2">{contest}</h2>
        <p className="font-serif text-yellow-700 font-semibold text-center mb-1">Participants: {count}</p>
        <p className="font-sans font-bold text-violet-700 ml-5 mr-2 mb-1">InShort: <span className="text-black font-normal font-serif">{info}</span></p>
        <Link to={`/details/${_id}`}><button className="btn rounded-e-full rounded-b-full ml-28 mr-28 px-14 font-mono bg-green-950 text-white mb-1">Details</button></Link>
        </div>

        );
    };

    export default ContestCard;

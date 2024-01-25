import { useEffect, useState } from "react";
import ContestCard from './../ContestCard/ContestCard';


const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://contest-creation-server.vercel.app/sixcard')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);



    return (
        <div>
        
           
            <div className="ml-96 mt-2 mb-2 " >
            <img src="https://i.ibb.co/cXkfdFy/GROUP.png" alt="" />
            </div>
            
      



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 aos-init aos-animate mx-auto w-full p-5 gap-4 lg:-top-20 shadow-3xl shadow-lime-600"  >
           
                {service.map((item) => (
                    <ContestCard key={item._id} service={item} />
                ))}
            </div>
        </div>
        
    );
};

export default Service;

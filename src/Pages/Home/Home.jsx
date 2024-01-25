// import { Helmet } from "react-helmet-async";

import {Helmet} from "react-helmet";
import Divide from "../Divide/Divide";
import Notice from "../Notice/Notice";
import Time from "../Notice/Time";
import Service from "../Service/Service";
import Mar from "./Mar";
import Banner from "./Shared/Banner/Banner";




const Home = () => {

    return (

        <div>
 
        <Helmet><title>Contest Creation Platform || Home </title></Helmet>
        
        
        <Banner></Banner>
        <Notice></Notice>
        <Service></Service>
        <Divide></Divide>
        <Mar></Mar>
        <Time></Time>
    
        </div>
    );
};

export default Home;
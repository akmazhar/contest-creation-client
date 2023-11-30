// import { Helmet } from "react-helmet-async";


import Divide from "../Divide/Divide";
import Notice from "../Notice/Notice";
import Time from "../Notice/Time";
import Service from "../Service/Service";
import Banner from "./Shared/Banner/Banner";




const Home = () => {

    return (

        <div>
 
      {/* <Helmet>
          <title>Appetite | Home </title>
        </Helmet> */}
        <Banner></Banner>
        <Notice></Notice>
        <Service></Service>
        <Divide></Divide>
        <Time></Time>
    
        </div>
    );
};

export default Home;
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/home/1.png'
import img2 from '../../../../assets/home/2.png'
import img3 from '../../../../assets/home/3.png'
import img4 from '../../../../assets/home/4.png'
import img5 from '../../../../assets/home/5.png'
import img6 from '../../../../assets/home/6.png'
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";




const Banner = () => {
    const [data, setData] = useState([]);

    const apiItem = useLoaderData();
  
    const handleSearch = e =>{
      e.preventDefault();
      const inputValue = e.target.text.value;
      const dataResult = apiItem.filter(data => data.name === inputValue)
      setData(dataResult)
  }
  
    useEffect(()=>{
      setData(apiItem)
    },[apiItem])


    return (

<div>

            {/* <Carousel>
            
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel> */}


{/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */}










       <div className='max-w-screen-2xl mx-auto'>
    {/* <div className="hero h-[600px] mb-1" style={{ backgroundImage: "linear-gradient(rgba(2,2,2,0.8), rgba(2,2,2,0.8)), url(https://i.ibb.co/4P669Tj/All.png)", }}>    */}
    <div className="hero h-[600px] mb-1" style={{ backgroundImage: "linear-gradient(rgba(9,9,9,0.2), rgba(8,8,8,0.2)), url(https://i.ibb.co/s5zyfK9/uyyu.png)", }}>   
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="text-black flex data-center justify-center">
                   <div>
                   {/* <h1 className="flex justify-center font-serif data-center text-green-500 text-7xl font-extrabold">All Contest Are Here </h1> */}
                    <form onSubmit={handleSearch} className="flex font-mono text-lg justify-center data-center mb-60 mr-28 ml-28">
                    <input type="text" placeholder="Please Search by Contest Name..." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px] p-3 mt-32 rounded-t-xl px-7 from-neutral-800 border-black" />
                        <input className="btn bg-[rgb(244,13,5)] mt-32 p-3 text-white rounded-tl-none rounded-bl-none rounded-xl px-7 font-medium font-mono text-base border-black" type="submit" value="Search" />

                    </form>
                   </div>
                   <div>
         {/* <Helmet>
          <title>Contest Creation Platform | All Contest</title>
        </Helmet> */}
         </div>
   
                </div>

            </div>
            <div>
                <video autoPlay muted loop className="video w-2/5 h-full mt-52 ml-96 mr-2">
      <source src="/src/assets/Welcome.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>
        </div>
        
      </div>   
         
</div>

    );
};

export default Banner;


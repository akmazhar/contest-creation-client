import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/home/1.png'
import img2 from '../../../../assets/home/2.png'
import img3 from '../../../../assets/home/3.png'
import img4 from '../../../../assets/home/4.png'
import img5 from '../../../../assets/home/5.png'
import img6 from '../../../../assets/home/6.png'




const Banner = () => {

    return (

<div>

            <Carousel>
           
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
            </Carousel>
         
         
</div>

    );
};

export default Banner;
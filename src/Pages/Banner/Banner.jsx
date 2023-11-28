import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
 

const Banner = () => {
    return (
       <div className='mt-6 mb-10'>
          <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
  </AutoplaySlider>
       </div>
    );
};

export default Banner;
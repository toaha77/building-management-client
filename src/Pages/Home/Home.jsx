import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Coupon from "./Coupon";
import Location from "./Location";
import Faq from "../../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> RentalPlace - Home</title> 
      </Helmet>
      <div>
        <Banner></Banner>
        <Coupon></Coupon>
        <About></About>
        <Location></Location>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;

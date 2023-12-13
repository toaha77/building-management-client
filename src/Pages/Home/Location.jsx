import { FaCalendar, FaLocationArrow, FaPhone } from "react-icons/fa";

const Location = () => {
  return (
    <div className="mt-6">
        <h2 className="text-center font-bold text-4xl mb-6">Venue location</h2>
     <div className="hero-content flex-col lg:flex-row justify-between">
     <div className="space-y-12 mx-auto">
        <h2 className="font-bold text-2xl">RENTALPLACE Call Center</h2>
        <div className="flex gap-1">
          <FaCalendar className="text-3xl"></FaCalendar>
          <h2 className="text-2xl">10.00 am - 5.00 pm</h2>
        </div>
        <div className="flex items-center gap-1">
          <FaLocationArrow className="text-3xl"></FaLocationArrow>
          <h2 className="text-2xl">Gulshan,Dhaka</h2>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone className="text-3xl"></FaPhone>
          <h2 className="text-2xl">+880181xxxxxx</h2>
        </div>
      </div>
      <div>
       <iframe className="md:w-[520px] md:h-[400px]"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gulshan,%20Dhaka+(Rental%20place%20Call%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
      </div>
     </div>
    </div>
  );
};

export default Location;

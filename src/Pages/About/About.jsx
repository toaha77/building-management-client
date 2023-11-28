import { AiOutlineArrowRight, AiOutlineHome } from "react-icons/ai";
import { TbHomeDollar } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-8">
      <div className="container mx-auto text-center ">
        <h2 className="text-green-500 btn btn-sm  rounded-full text-xl">
          About Us
        </h2>
        <h3 className="mt-2 text-4xl font-bold">Our Main Focus</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="mt-4 bg-gray-100 rounded-lg">
        <div className="card  shadow-2xl">
          <figure className="px-10 pt-10">
            <AiOutlineHome className="text-6xl"></AiOutlineHome>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-center text-2xl font-semibold">Buy a home</h2>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <div className="flex items-center justify-center gap-1">
              <h2 className="text-green-500">Find a Home </h2>
              <AiOutlineArrowRight className="text-green-500"></AiOutlineArrowRight>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-gray-100 rounded-lg">
        <div className="card  shadow-2xl">
          <figure className="px-10 pt-10">
            <TbHomeDollar className="text-6xl"></TbHomeDollar>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-center text-2xl font-semibold">Rent a home</h2>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <div className="flex items-center justify-center gap-1">
              <h2 className="text-green-500">Find a Home </h2>
              <AiOutlineArrowRight className="text-green-500"></AiOutlineArrowRight>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-gray-100 rounded-lg">
        <div className="card  shadow-2xl">
          <figure className="px-10 pt-10">
            <FaHandshake className="text-6xl"></FaHandshake>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-center text-2xl font-semibold">Sell a home</h2>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <div className="flex items-center justify-center gap-1">
              <h2 className="text-green-500">Find a Home </h2>
              <AiOutlineArrowRight className="text-green-500"></AiOutlineArrowRight>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

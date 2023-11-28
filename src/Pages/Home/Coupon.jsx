import { AiFillStar } from "react-icons/ai";

const Coupon = () => {
  return (
    <div className="pt-6 mx-auto md:w-[420px]">
      <div className="flex  justify-between  ">
        <AiFillStar className="text-6xl text-green-500 "></AiFillStar>
        <h2 className="text-4xl font-bold text-green-500 uppercase">Coupon</h2>
        <AiFillStar className="text-6xl text-green-500"></AiFillStar>
      </div>
      <div className="bg-green-500 flex justify-between px-10 py-8">
        <div>
          <h3 className="text-3xl">25% OFF</h3>
          <span className=" text-3xl font-bold uppercase">discount</span>
        </div>
        <div className="font-bold text-3xl flex items-center justify-center">
            $250
        </div>
      </div>
    </div>
  );
};

export default Coupon;

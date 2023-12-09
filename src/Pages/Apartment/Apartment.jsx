import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ApartmentCard from "./ApartmentCard";
import { useEffect, useState } from "react";

 
const Apartment = () => {
    // const apartments = useLoaderData()
    const [apartments, setApartments] = useState([])

 
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const { count } = useLoaderData();
 
    const numberOfPages = Math.ceil(count / itemsPerPage);
     
    const pages = [...Array(numberOfPages).keys()];
    useEffect(()=>{
       fetch(`http://localhost:3000/page-apartment?page=${currentPage}&size=${itemsPerPage}`)
       .then(res => res.json())
       .then(data => setApartments(data))
    }, [currentPage,itemsPerPage])

    useEffect(()=>{
        fetch('http://localhost:3000/apartments')
        .then(res => res.json())
        .then(data => setApartments(data))
     }, [])
  
    const handleLevel = (e) => {
      const val = parseInt(e.target.value);
      setItemsPerPage(val);
      setCurrentPage(0);
    };
     return (
        <div>
            <Helmet>
                <title>RENTALPLACE  -  Apartment</title>
            </Helmet>

           <div className="mt-6 text-center">
           <h2 className="text-4xl text-green-500  ">Find Your <span className="text-black">Dream House By Us</span></h2>
           </div>
           <div>
            <ApartmentCard apartments={apartments}></ApartmentCard>
        
           </div>
           <div className="flex items-center justify-center mt-6">
        {pages.map((page, index) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={
              currentPage === page
                ? "btn mr-2 bg-green-500   hover:bg-green-500 "
                : "btn"
            }
          >
            {page+1}
            
          </button>
        ))}
        <select
          value={itemsPerPage}
          onChange={handleLevel}
          className="input input-bordered"
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
        </div>
    );
};

export default Apartment;
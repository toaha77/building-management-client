import { useEffect, useState } from "react";
import SingleApartment from "./SingleApartment";
import { useLoaderData } from "react-router-dom";

 
const ApartmentCard = ({apartments}) => {
     
    return (
       <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                apartments.map(apartment => <SingleApartment key={apartment._id}
                apartment={apartment}
                ></SingleApartment>)
            }
        </div>
       
       </>
    );
};

export default ApartmentCard;
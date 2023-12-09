import { useEffect, useState } from "react";
 
const ShowAnnounce = () => {
   const [announce, setAnnounce] = useState([]);
   
   useEffect(()=>{
    fetch('http://localhost:3000/announcement')
    .then(res => res.json())
    .then(data => setAnnounce(data))
   }, [])

  return (
    <>
      <h2 className="text-3xl text-center my-6">Important <span className="text-green-500">Announcement</span> </h2>

      
        {announce?.map((item) => (
          <div key={item._id} className="text-center">
            <h2 className="text-2xl btn btn-sm bg-green-500 mb-4">{item.title}</h2>
            <p className="m-4">{item.description}</p>
          </div>
        ))}
      
    </>
  );
};

export default ShowAnnounce;

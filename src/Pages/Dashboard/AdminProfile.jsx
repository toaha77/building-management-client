import UseAuth from "../../Hooks/useAuth";

  
 
const AdminProfile = () => {
  const { user } = UseAuth();
  

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
       
    </div>
  );
};

export default AdminProfile;

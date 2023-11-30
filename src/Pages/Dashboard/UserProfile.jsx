import { IoMdMail } from "react-icons/io";
import UseAuth from "../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = UseAuth();
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="mt-4">
        {user?.photoURL ? <img className="w-[200px] object-cover " src={user.photoURL} alt="" /> : "image"}</div>

        <div>
        <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="flex items-center gap-1">
            <IoMdMail />
            
            <h3>
                 {user?.email}
            </h3>
            </div>
        </div>
    </div>
  );
};

export default UserProfile;

import UseAuth from "../../Hooks/useAuth";

 

const UserProfile = () => {
    const {user} = UseAuth();
    return (
        <div>
            <h2 className="text-3xl text-center">
                <span>Hi, Welcome </span> 
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserProfile;
import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

 
const useAdmin = () => {
    const {user, loading} = UseAuth()
    const axiosSecure = UseAxiosSecure()
     const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled : !loading && !!localStorage.getItem("token"),
        queryFn: async()=>{
          const res = await axiosSecure.get(`/users/admin/${user?.email}`)
          return res.data?.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;
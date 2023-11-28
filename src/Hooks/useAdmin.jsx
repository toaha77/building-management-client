import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./UseAxiosSecure";

 
const useAdmin = () => {
    const {user} = UseAuth()
    const axiosSecure = UseAxiosSecure()

    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
          const res = await axiosSecure.get(`/users/admin/${user?.email}`)
          return res.data?.admin
        }
    })
    return [isAdmin]
};

export default useAdmin;
 import {useQuery} from "@tanstack/react-query"
 import  UseAxiosSecure from "./UseAxiosSecure";
const UseCart = () => {
    const axiosSecure = UseAxiosSecure()
   const {refetch, data: cart = []} = useQuery({
    queryKey: ['cart'],
    queryFn: async()=>{
        const res = await axiosSecure.get('/carts')
        return res.data
    }
   })

   return [cart, refetch]
};

export default UseCart;
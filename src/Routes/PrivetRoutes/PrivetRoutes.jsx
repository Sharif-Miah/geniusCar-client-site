import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation()

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} />
    }

    return children;
};

export default PrivetRoutes;
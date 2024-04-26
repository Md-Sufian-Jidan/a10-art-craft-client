import PropTypes from 'prop-types';

import { useContext } from "react";
import { Navigate ,useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user , isLoading} = useContext(AuthContext);
    let location = useLocation();
    console.log(location);

    if(isLoading){
        return <span className="loading loading-bars loading-lg flex justify-center items-center my-10"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
}
export default ProtectedRoute;
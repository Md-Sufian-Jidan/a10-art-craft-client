import PropTypes from 'prop-types';

import { useContext } from "react";
import { Navigate ,useLocation } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthProvider';

const ProtectedRoute = ({children}) => {
    const {user , load} = useContext(AuthContext);
    let location = useLocation();
    console.log(location);

    if(load){
        return <span className="loading loading-bars loading-2xl flex justify-center items-center"></span>;
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
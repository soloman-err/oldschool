import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdminLoading] = useAdmin();
  const location = useLocation()

  console.log(user);

  if (loading || isAdminLoading) {
    <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={'/login'} state={{ from: location }} replace />;
};

export default PrivateRoute;

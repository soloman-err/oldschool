import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  let queryPermissions = false;
  if (user && !loading) {
    queryPermissions = true;
  }

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: queryPermissions || !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });

  // Checkpoint:
  {
    isAdmin && console.log('Admin:', isAdmin);
  }

  return [isAdmin, isAdminLoading];
};

export default useAdmin;

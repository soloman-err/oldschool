import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  let queryPermissions = false;
  if (user && !loading) {
    queryPermissions = true;
  }

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: queryPermissions || !!user?.email,

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });

  //   Checkpoint:
  {
    isInstructor && console.log('Instructor', isInstructor);
  }

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;

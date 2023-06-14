import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !!user?.email,

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

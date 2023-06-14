import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], isLoading: loading } = useQuery({
    queryKey: ['instructor'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get('/users/instructors');
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return [instructors];
};

export default useInstructors;

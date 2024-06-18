import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from './apiAuth';

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user_86'],
    queryFn: getCurrentUser,
  });

  const isAuthenticated = user?.role === 'authenticated';

  return { user, isLoading, isAuthenticated };
};

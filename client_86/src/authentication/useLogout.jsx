import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from './apiAuth';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/Logout', { replace: true });
    },
  });

  return { logout, isLoading };
};

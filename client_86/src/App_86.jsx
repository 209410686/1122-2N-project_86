import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import {HomeLayout_86,HomePage_86} from './pages';
//import {Mid1SupaBlog_86,Mid2NodeBlog_86}from './pages/mid1_86'
import SupaGetBlog_86 from './pages/demo_xx/SupaGetBlog_86';
import CRUD from './pages/CRUD/Projects';
import Other from './pages/Other/Uncard';
import Login from './pages/Login_86';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router =createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout_86/>,
    children:[
      {
        index: true,
        element: <HomePage_86/>
      },
      {
        path :'demoGetblog_86',
        element:<SupaGetBlog_86/>
      },
      {
        path :'CRUD',
        element:<CRUD/>
      },
      {
        path :'Other',
        element:<Other/>
      },
      {
        path :'login',
        element:<Login/>
      }
    ]
  }
])

const App_86 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_86;

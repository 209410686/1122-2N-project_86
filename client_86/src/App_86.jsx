
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


import {HomeLayout_86,HomePage_86} from './pages';

import {Mid1SupaBlog_86,Mid2NodeBlog_86}from './pages/mid1_86'
import SupaGetBlog_86 from './pages/demo_xx/SupaGetBlog_86';
import CRUD from './pages/CRUD/Projects';
import Other from './pages/Other/Uncard';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000 * 60 * 5,
    },
  }
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
        path :'mid1blog_86',
        element:<Mid1SupaBlog_86/>
      },
      {
        path :'mid2blog_86',
        element:<Mid2NodeBlog_86/>
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
      }
    ]
  }
])

const App_86 = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
   
  )
   // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<HomePage_xx />} />
    //     <Route path='/mid2Blog_xx' element={<Mid2NodeBlog_xx />} />
    //     <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
    //     <Route path='/demoGetBlog_xx' element={<SupaGetBlog_xx />} />
    //   </Routes>
    // </BrowserRouter>
};

export default App_86;

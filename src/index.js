import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter  , RouterProvider} from 'react-router-dom';

const routes=createBrowserRouter([

{
  path : '/' ,
  element: <Home/>
},
// {
//   path : '/' ,
//   element: <pay/>
// },
// {
//   path : '/' ,
//   element: <Login/>
// },
// {
//   path : '/' ,
//   element: <Order/>
// },


])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(




  <>
    <  RouterProvider router={routes} />
  </>
 
     

);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pay } from './View/Pay/pay';
import { Signin } from './View/Sign/signin';
import {Store} from './View/Store/Store'
import { createBrowserRouter  , RouterProvider} from 'react-router-dom';
import {Home} from './View/Home/home'

const routes=createBrowserRouter([

{
  path : '/' ,
  element: <Home/>
},
{
  path : '/Pay' ,
  element: <Pay/>
},
{
  path : '/Signin' ,
  element: <Signin/>
},
// {
//   path : '/Order' ,
//   element: <Order/>
// },
{
  path : '/Store' ,
  element: <Store/>
},


])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(




  <>
    <  RouterProvider router={routes} />
  </>
 
     

);


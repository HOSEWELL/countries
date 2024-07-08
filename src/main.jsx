import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryProfile from './components/countryprofile.jsx';
import CountryContainer from './components/countrycontainer.jsx';
import ContinentProfile from './components/continentprofile.jsx';
import Errorpage from './components/errorpage.jsx';
import Border from './components/borders.jsx';

const router =  createBrowserRouter([
{
  path:"/",
  element:<CountryContainer/>,
  errorElement:<Errorpage/>
},
{
  path:"/countryprofile",
  element:<CountryProfile/>
},
{
  path:"/countrycontainer",
  element:<CountryContainer/>
},
{
  path:"/continentprofile",
  element:<ContinentProfile/>
},
{
  path:"/App",
  element:<App/>
},
{
  path:"/border",
  element:<Border/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<RouterProvider router={router}/>
  </React.StrictMode>,
)


import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/NotFound';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import Layout from './pages/global/Layout';


//HOC 
//HOC
const UserDashboardHOC = Layout(UserDashboard);
//const UserJobsHistoryHOC = Layout(UserJobsHistory);

const App = () => {
  return (
    <>
        <ToastContainer/>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <ProSidebarProvider>
            < BrowserRouter>
             <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/search/location/:location' element={<Home />} />
               <Route path='/search/:keyword' element={<Home />} />
               <Route path='/login' element={<LogIn />} />
               <Route path='/user/dashboard' element={<UserRoute><UserDashboardHOC /></UserRoute>} />
               <Route path='*' element={<Notfound/>}/>
             </Routes>
          
             </BrowserRouter>
         </ProSidebarProvider>
        
        </ThemeProvider>
    </>
  )
}

export default App

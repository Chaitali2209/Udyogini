import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Supplier from './pages/Supplier';
import BusinessPage from './pages/BusinessPage';

import Community from './pages/community';
import CommunityPostsState from "./context/CommunityPost/CommunityPostsState"
import CurrentUserState from './context/LoggedInUser/CurrentUserState';
import Learn from './pages/Learn';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CurrentUserState>    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
        <Route path='/businessPage' element={<BusinessPage/>}/>

        <Route path='/community' element={<CommunityPostsState><Community/></CommunityPostsState>}/>
        <Route path='/learn' element={<Learn />}></Route>

      </Routes>
    </BrowserRouter>
    </CurrentUserState>    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import './App.css';
import React, { useState } from 'react';
import FeedPage from './pages/FeedPage/FeedPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostPage from './pages/PostPage/PostPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Router from './routes/Router';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonRight, setButtonRight] = useState(token ? "Logout" : "Login")
  
  return (
    <ThemeProvider theme={theme}> 
      <BrowserRouter>
        <Header buttonRight={buttonRight} setButtonRight={setButtonRight}/>
        <Router setButtonRight={setButtonRight}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
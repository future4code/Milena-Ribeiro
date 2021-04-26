import './App.css';
import React from 'react';
import FeedPage from './pages/FeedPage/FeedPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostPage from './pages/PostPage/PostPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Router from './routes/Router';
import theme from './constants/theme';
import { ThemeProvider } from '@material-ui/core/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
      {/* <h1>LabEddit</h1> */}
      {/* <FeedPage />
      <LoginPage/>
      <PostPage/>
      <SignUpPage/> */}
    </ThemeProvider>
  );
}

export default App;
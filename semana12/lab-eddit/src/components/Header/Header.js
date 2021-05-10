import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToLogin, goToFeed } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom'

const Header = ({buttonRight, setButtonRight}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
  
  const logout = () => {
    localStorage.removeItem("token")
  }

  const buttonRightAction = () => {
    if (token) {
      logout()
      setButtonRight("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeed(history)} color="inherit">LabEddit</Button>
          <Button onClick={buttonRightAction} color="inherit">{buttonRight}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
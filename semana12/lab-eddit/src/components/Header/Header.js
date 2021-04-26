import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToLogin, goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const Header = () => {
//   const classes = useStyles();
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolbar>
          {/* <Typography variant="h6" className={classes.title}>
            LabEddit
          </Typography> */}
          <Button onClick={() => goToPost(history)} color="inherit">LabEddit</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
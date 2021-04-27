import React from 'react';
import Button from '@material-ui/core/Button';
import { ScreenContainer, SignUpContainer } from './styled';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../../routes/coordinator';
import useUnProtectedPage from '../../hooks/useUnProtectedPage'


const LoginPage = ({setButtonRight}) => {
    useUnProtectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <h1>Login Page</h1>
            <LoginForm setButtonRight={setButtonRight}/>
            <SignUpContainer>
                <Button 
                    onClick={() => goToSignUp(history)}
                    fullWidth 
                    variant="text" 
                    color="primary">
                    Criar nova conta
                </Button>
            </SignUpContainer>
        </ScreenContainer>
    )
}

export default LoginPage
import React from 'react';
import { ScreenContainer } from './styled';
import SignUpForm from './SignUpForm';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';

const SignUpPage = ({setButtonRight}) => {
    useUnProtectedPage()
    return (
        <ScreenContainer>
            <h1>Fazer cadastro</h1>
            <SignUpForm setButtonRight={setButtonRight}/>
        </ScreenContainer>
    )
}

export default SignUpPage
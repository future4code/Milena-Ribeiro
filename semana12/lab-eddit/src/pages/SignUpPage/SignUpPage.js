import React from 'react';
import { ScreenContainer } from './styled';
import SignUpForm from './SignUpForm'

const SignUpPage = () => {
    return (
        <ScreenContainer>
            <h1>Fazer cadastro</h1>
            <SignUpForm/>
        </ScreenContainer>
    )
}

export default SignUpPage
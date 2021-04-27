import React from 'react';
import Button from '@material-ui/core/Button';
import { InputsContainer, SignUpContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../services/user';

const SignUpForm = ({setButtonRight}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
    
    const formSubmit = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setButtonRight)
    }

    return (
        <form onSubmit={formSubmit}>
            <SignUpContainer>
                <InputsContainer>
                    <TextField 
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome de usuário"}
                        variant={"outlined"}
                        required
                        type={"text"}
                        margin={"normal"}
                        // autoFocus
                        fullWidth
                    />
                    <TextField 
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        required
                        type={"email"}
                        margin={"normal"}
                        fullWidth
                    />
                    <TextField 
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin={"normal"}
                        required
                        type={"password"}
                        fullWidth
                    />
                    <Button 
                        type={"submit"} 
                        variant={"contained"} 
                        color={"primary"}
                        fullWidth>
                        Cadastrar
                    </Button>
                </InputsContainer>
            </SignUpContainer>
        </form>
    )
}

export default SignUpForm
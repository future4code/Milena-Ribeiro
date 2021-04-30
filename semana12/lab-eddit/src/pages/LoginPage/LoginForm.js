import React from 'react';
import Button from '@material-ui/core/Button';
import { InputsContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { login } from '../../services/user';
import { useHistory } from 'react-router-dom'

const LoginForm = ({setButtonRight}) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()
    
    const formSubmit = (event) => {
        event.preventDefault()
        login(form, clear, history, setButtonRight)
    }

    return (
        <InputsContainer>
            <form onSubmit={formSubmit}>
                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    required
                    type={"email"}
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
                    Entrar
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm
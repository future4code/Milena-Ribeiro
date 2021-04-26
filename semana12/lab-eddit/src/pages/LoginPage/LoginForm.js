import React from 'react';
import Button from '@material-ui/core/Button';
import { InputsContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    
    const formSubmit = (event) => {
        console.log(form)
        event.preventDefault()
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
                        // margin={"normal"}
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
import React from 'react';
import Button from '@material-ui/core/Button';
import { InputsContainer, SignUpContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm'

const SignUpForm = () => {
    const [form, onChange, clear] = useForm({name: "", email: "", password: ""})
    
    const formSubmit = (event) => {
        console.log(form)
        event.preventDefault()
    }

    return (
        <SignUpContainer>
        <InputsContainer>
            <form onSubmit={formSubmit}>
                <TextField 
                    name={"username"}
                    value={form.email}
                    onChange={onChange}
                    label={"Nome de usuário"}
                    variant={"outlined"}
                    required
                    type={"email"}
                    margin={"normal"}
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
            </form>
        </InputsContainer>
        </SignUpContainer>
    )
}

export default SignUpForm
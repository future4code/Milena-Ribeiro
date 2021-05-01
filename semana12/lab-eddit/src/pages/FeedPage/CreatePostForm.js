import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { InputsContainer } from './styled'

const CreatePostForm = () => {
    const [form, onChange, clear] = useForm({text: "", title: ""})
    const history = useHistory()
    
    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
    })
    .then((res) => {
        console.log(res)
        alert(res.data.message)
        clear()
      })
      .catch((err) => {
          console.log(err)
        alert(err.response.message)
      })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        createPost()
        console.log(form)
    }

    return (
        <InputsContainer>
            <form onSubmit={formSubmit}>
                <TextField 
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    label={"TÍtulo"}
                    variant={"outlined"}
                    type={"title"}
                    margin={'normal'}
                    fullWidth
                />
                <TextField 
                    name={"text"}
                    value={form.text}
                    onChange={onChange}
                    label={"Escreva seu post"}
                    variant={"outlined"}
                    type={"text"}
                    fullWidth
                    margin={'normal'}
                />
                <Button 
                    type={"submit"} 
                    variant={"contained"} 
                    color={"primary"}
                    fullWidth
                    >
                    Postar
                </Button>
            </form>
        </InputsContainer>
    )
}

export default CreatePostForm
import React from 'react';
import Button from '@material-ui/core/Button';
import { CommentContainer } from './styled';
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import { createComment } from '../../services/user';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls';

const CommentPostForm = () => {
    const [form, onChange, clear] = useForm({text: ""})
    const history = useHistory()
    const params = useParams()
    
    const createComment = (id) => {
        axios.post(`${BASE_URL}/posts/${params.id}/comment`, form, {
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
        createComment()
        console.log(form)
    }

    return (
        <CommentContainer>
            <form onSubmit={formSubmit}>
                <TextField 
                    name={"text"}
                    value={form.text}
                    onChange={onChange}
                    label={"Escreva seu comentário"}
                    variant={"outlined"}
                    type={"text"}
                    margin={"normal"}
                    fullWidth
                />
                <Button 
                    type={"submit"} 
                    variant={"contained"} 
                    color={"primary"}
                    fullWidth>
                    Comentar
                </Button>
            </form>
        </CommentContainer>
    )
}

export default CommentPostForm
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (form, clear, history, setButtonRight) => {
    axios.post(`${BASE_URL}/login`, form)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
        setButtonRight("Logout")
    })
    .catch((error) => alert(error.response.data.message))
}

export const signUp = (form, clear, history, setButtonRight) => {
    axios.post(`${BASE_URL}/signup`, form)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(history)
        alert("Cadastrado")
        setButtonRight("Logout")
    })
    .catch((error) => alert(error.response.data.message))
}
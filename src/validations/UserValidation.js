import * as yup from 'yup'
import "../Components/App.css"

export const userSchema=yup.object().shape({

    name:yup.string().required(),
    email:yup.string().email().required(),
    password:yup.string().min(6).max(10).required()




});
import axios from 'axios'

let myUrl = 'https://bashobankapp.onrender.com/api'

if(process.env.NODE_ENV === 'production'){
   myUrl = '/api'
}

export const Api = axios.create({
   baseURL:myUrl
})
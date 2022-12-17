import axios from 'axios'

let myUrl = 'https://bank-a8n2.onrender.com/api'

if(process.env.NODE_ENV === 'production'){
   myUrl = '/api'
}

export const Api = axios.create({
   baseURL:myUrl
})
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kg6uM-fENJe_8xvPwHK-hm6ALfc1EbipJGAmBzBQZBs'
    }
})
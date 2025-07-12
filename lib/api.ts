import axios from "axios"

const getProducts = async () => {
    try {
        const res = await axios.get('/products.json')
    } catch (error) {
        
    }
} 
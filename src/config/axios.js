import axios from "axios";

const clienteAxios = axios.create({
    baseURL:"http://localhost:5600"
});


export default clienteAxios;
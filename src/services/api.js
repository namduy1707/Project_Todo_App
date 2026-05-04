import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = () => axios.get(API);

import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";
// const API = "http://localhost:8000/users";
export const getTodos = () => axios.get(API);

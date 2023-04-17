import axios from "axios";

export const getRepos = () => 
    axios.get("https://api.github.com/users/saimoNN37/repos")
        .then(response => response.data);
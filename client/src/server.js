const axios = require("axios")

export default function getUsers() {
    return axios.get("http://localhost:3000/users").then((res) =>
    {
        return res.data;
    }).catch(error => {
       
        return ("error:ouch")
    });
}
// axios.get("http://localhost:3000/posts")
// .then(response => console.log(response))
// .catch(err => console.log(err))


axios({
    url: "/posts",
    baseURL: "http://localhost:3000",
    method: "get"
})
.then(response => console.log(response))
.catch(err => console.log(err))
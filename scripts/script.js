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


const myForm = document.getElementById("myForm")
const title = document.getElementById("title")
const author = document.getElementById("author")
const btnSave = document.getElementById("btnSave")

myForm.addEventListener("submit", e => {
    e.preventDefault()
})

const makePost = () => {
    return {
        title: title.value,
        author: author.value
    }
}

// Método post con axios.post, then y catch
// btnSave.addEventListener("click", () => {
//     const data = makePost()
//     axios.post("http://localhost/posts", data)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// })

//Método post con axio, async await y try catch
btnSave.addEventListener("click", async () => {
    const data = makePost()
    try {
    const response = await axios({
        metodh: "post",
        url: "http://localhost/posts", 
        data: data,
        validateStatus: function (status) {
            return status >= 200 && status < 500
        },
    })
    if (response === 404){
        console.log("Págona no encontrada", response)
        return
    }
    console.log(response)
    } catch (error){
        console.log(error)
    }
})
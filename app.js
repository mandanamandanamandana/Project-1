const apiKey = "live_0Fn60Y8Y2D4ZP0ZJG9tXABVNC5WRW4lKeQDDvkREoaXMWb17Dldpm8Z4z4OTAHer"

const baseURL = "https://api.thecatapi.com/v1/images/search"

$.ajax("https://api.thecatapi.com/v1/images/search")
.then((data) => {
    console.log(data)
    console.log(data[0].url)

    //let's render the data to the screen
    const $main = $('main')
    $main.empty()

    $main.html(`<img src="${data[0].url}">`)
})

$("form").on("submit", (event) => {
    event.preventDefault()
    inputRequest = $("input[type=text]").val()

    imageRequest(inputRequest)
})

const $main = $("main")

console.log($main)
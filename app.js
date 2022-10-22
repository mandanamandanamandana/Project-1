const apiKey = "live_0Fn60Y8Y2D4ZP0ZJG9tXABVNC5WRW4lKeQDDvkREoaXMWb17Dldpm8Z4z4OTAHer"

const baseURL = "https://api.thecatapi.com/v1/images/search"

$.ajax("https://api.thecatapi.com/v1/images/search")
.then((data) => {
    console.log(data)
    console.log(data[0].url)
})


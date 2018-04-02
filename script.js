// READ the giphy API docs: https://developers.giphy.com/
//declare variables
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_Key = 'ayB8eQ5SSqcwKZzKibVOTwBx5QeWj7rz'
var searchForm = document.querySelector("#search-form")
var searchInput = document.querySelector("#search-form input")
var results = document.querySelector(".results")

//define functions
function getGifs(term, path){
    $.ajax({
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_Key}&q=${term}`,
        dataType: "json",
        success: function(data){
            //console.log(data.data[0].images.preview_gif.url)
            results.innerHTML = ''
            for(var i = 0; i < data.data.length; i++){
                results.innerHTML += `
                <img class="image" src="${data.data[i].images.preview_gif.url}">
                `
            }
            
        },
        error: function(error){
            console.log(error)
        }
    })
}

//call functions and add event listeners
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    results.innerHTML = ''
    getGifs(searchInput.value, "search")
})




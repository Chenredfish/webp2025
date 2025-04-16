var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';
var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&text=apple&per_page=10&format=json&nojsoncallback=1';
var img_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';
// function getimg(){
//     fetch(dataUrl)
//         .then(response => response.json())
//         .then(data => add_new_img(data))
//         .catch(error => console.error('Error:', error));
// }
// function add_new_img(dataset){
//     var gal = document.getElementById("gallery");
//     dataset.forEach(function(item) {
//         console.log(item);
//         var img = document.createElement("img");
//         img.setAttribute("src", item.urls.small);
//         gal.appendChild(img);
//     });
// }

function getimg(){
    fetch(imglist_Url)
        .then(response => response.json())
        .then(data => add_new_img(data))
        .catch(error => console.error('Error:', error));
}
function add_new_img(dataset){
    var gal = document.getElementById("gallery");
    dataset.photos.photo.forEach(function(item) {
        console.log(item);
        var img = document.createElement("img");
        img.setAttribute("src", "https://live.staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg");
        gal.appendChild(img);
    });
}
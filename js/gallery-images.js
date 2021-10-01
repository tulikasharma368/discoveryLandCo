window.onload = gallery_images();

function gallery_images(){
    gal_images = [
        {
            id: 1,
            src:"/assets/gallery/2.jpg",
            text: "Outdoor Pursuits"
        },
        {
            id: 2,
            src:"/assets/gallery/3.jpg",
            text: "Golf"
        },
        {
            id: 3,
            src:"/assets/gallery/4.jpeg",
            text: "Lifestyle",
        },
        {
            id: 4,
            src:"/assets/gallery/5.jpg",
            text: "Landscapes"
        },
        {
            id: 5,
            src:"/assets/gallery/6.jpg",
            text: "Clubhouses"
        },
        {
            id: 6,
            src:"/assets/gallery/7.jpg",
            text: "Wellness"
        }
    ]
    
    var contents = '';
    
    gal_images.forEach(element => {
        contents += `<div class="item-gallery">
        <img src="${element.src}" alt="">
        <h3>${element.text}</h3>
    </div>`
    });
    
    document.querySelector('#gallery').innerHTML = contents;   
}


window.onload = home_images();

function home_images(){
    images = [
        {
            id: 1,
            src: "/assets/home/c1.jpg",
            text: "Madison",
            subtext: "La Quinta, California"
        },
        {
            id: 2,
            src:"/assets/home/c2.jpg",
            text: "James Island",
            subtext: "Southern Gulf Islands, British Columbia, Canada"
        },
        {
            id: 3,
            src:"/assets/home/c3.jpg",
            text: "CostaTerra",
            subtext: "Comporta, Portugal"
        },
        {
            id: 4,
            src:"/assets/home/c4.jpg",
            text: "Barbuda Ocean Club",
            subtext: "Barbuda, West Indies"
        },
        {
            id: 5,
            src:"/assets/home/c5.jpg",
            text: "Driftwood",
            subtext: "Austin, Texas"
        },
        {
            id: 6,
            src:"/assets/home/c6.jpg",
            text: "Troubadour",
            subtext: "Nashville, Tennessee"
        },
        {
            id: 7,
            src:"/assets/home/c7.jpg",
            text: "Playa Grande",
            subtext: "Rio San Juan, Dominican Republic"
        },
        {
            id: 8,
            src:"/assets/home/c8.jpg",
            text: "Chileno Bay",
            subtext: "Cabo San Lucas, Mexico"
        },
        {
            id: 9,
            src:"/assets/home/c9.jpg",
            text: "The Summit",
            subtext: "Las Vegas, Nevada"
        },
        {
            id: 10,
            src:"/assets/home/c10.jpg",
            text: "Dune Deck",
            subtext: "Westhampton Beach, NY"
        },
        {
            id: 11,
            src:"/assets/home/c11.jpg",
            text: "Silo Ridge",
            subtext: "Amenia, New York"
        },
        {
            id: 12,
            src:"/assets/home/c12.jpg",
            text: "Mākena",
            subtext: "Maui, Hawaii"
        },
        {
            id: 13,
            src:"/assets/home/c13.jpg",
            text: "Yellowstone Club",
            subtext: "Big Sky, Montana"
        },
        {
            id: 14,
            src:"/assets/home/c14.jpg",
            text: "Gozzer Ranch",
            subtext: "Coeur d’Alene, Idaho"
        },
        {
            id: 15,
            src:"/assets/home/c15.jpg",
            text: "El Dorado",
            subtext: "Los Cabos, Mexico"
        },
        {
            id: 16,
            src:"/assets/home/c16.jpg",
            text: "Madison",
            subtext: "La Quinta, California"
        },
        {
            id: 17,
            src:"/assets/home/c17.jpg",
            text: "Baker's Bay",
            subtext: "Great Guana Cay, Bahamas"
        },
        {
            id: 18,
            src:"/assets/home/c18.jpg",
            text: "Hideaway",
            subtext: "La Quinta, California"
        },
        {
            id: 19,
            src:"/assets/home/c19.jpg",
            text: "Mountaintop",
            subtext: "Cashiers, North Carolina"
        },
        {
            id: 20,
            src:"/assets/home/c20.jpg",
            text: "Mirabel",
            subtext: "Scottsdale, Arizona"
        },
        {
            id: 21,
            src:"/assets/home/c21.jpg",
            text: "Kūki'o",
            subtext: "Kohala, Hawaii"
        },
        {
            id: 22,
            src:"/assets/home/c22.jpeg",
            text: "Vaquero",
            subtext: "Westlake, Texas"
        },
        {
            id: 23,
            src:"/assets/home/c23.jpg",
            text: "Iron Horse",
            subtext: "Whitefish, Montana"
        },
        {
            id: 24,
            src:"/assets/home/c24.jpg",
            text: "CordeValle",
            subtext: "Silicon Valley, California"
        },
        {
            id: 25,
            src:"/assets/home/c25.jpg",
            text: "Estancia",
            subtext: "Scottsdale, Arizona"
        }
    ]

    var content = '';
    
    images.forEach(element => {
        content += `<div class="slide">
        <img src="${element.src}"  alt="" />
        <div class="slider-text-home">
            <h1 class="text-home">${element.text}</h1>
            <p class="sub-home">${element.subtext}</p>
        </div>
    </div>`
    });
    
    document.querySelector('.slide-track').innerHTML = content;

}

function video1(){
    const content = `<img class="cross" src="/assets/our-world/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Experiences</div>
        <div class="inner">Experince the ultimate round of golf on championship</div>
        <div class="inner">courses designed by the world’s most highly acclaimed</div>
        <div class="inner">architects or take a thrilling adventure with limitless</div>
        <div class="inner">activities for everyone to enjoy.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#div6').classList.remove('div6');
    document.querySelector('#div6').innerHTML = ''; 
}

function video2(){
    const content = `<img class="cross" src="/assets/our-world/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Lifestyle</div>
        <div class="inner">Relish the very best times of your life with the ones you</div>
        <div class="inner">love in our bespoke communities that cater to a family</div>
        <div class="inner">orientated lifestyle through unparalleled amenities and</div>
        <div class="inner">inspired experiences.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#div6').classList.remove('div6');
    document.querySelector('#div6').innerHTML = ''; 
}


function video3(){
    const content = `<img class="cross" src="/assets/our-world/close.png" alt="" onclick="noVideo()">
    <div class="video1-text">
        <div class="title">Welness</div>
        <div class="inner">Relax and refresh your body and your mind in exquisite</div>
        <div class="inner">surroundings. Escape to our stunning pools, unwind in</div>
        <div class="inner">relaxing spas and explore innovative international</div>
        <div class="inner">culinary offerings.</div>
        <div class="explore-button">Explore</div>
    </div>
    <video class="video-home" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236" autoplay loop="" muted></video>`
    document.querySelector('.video-div').innerHTML=content;
    document.querySelector('#div6').classList.remove('div6');
    document.querySelector('#div6').innerHTML = ''; 
}


function noVideo(){
    document.querySelector('.video-div').innerHTML='';
    document.querySelector('#div6').classList.add('div6');
    document.querySelector('#div6').innerHTML = `<div class="end-img">
    <img class="img" src="/assets/home/end1.jpg" alt="">
        <h1 class="experiences">Experiences</h1>
        <img class="arrow" src="/assets/home/right.png" alt="" onclick="video1()">
    </div>
    <div class="end-img">
        <img class="img" src="/assets/home/end2.jpg" alt="">
        <h1 class="lifestyle">Lifestyle</h1>
        <img class="arrow" src="/assets/home/right.png" alt="" onclick="video2()">
    </div>
    <div class="end-img">
        <img class="img" src="/assets/home/end3.jpg" alt="">
        <h1 class="wellness">Welness</h1>
        <img class="arrow" src="/assets/home/right.png" alt="" onclick="video3()">
    </div>`; 

}

// https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236
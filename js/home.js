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
            text: "Baker's Bay",
            subtext: "Great Guana Cay, Bahamas"
        },
        {
            id: 3,
            src:"/assets/home/c3.jpg",
            text: "Hideaway",
            subtext: "La Quinta, California"
        },
        {
            id: 4,
            src:"/assets/home/c4.jpg",
            text: "Mountaintop",
            subtext: "Cashiers, North Carolina"
        },
        {
            id: 5,
            src:"/assets/home/c5.jpg",
            text: "Mirabel",
            subtext: "Scottsdale, Arizona"
        },
        {
            id: 6,
            src:"/assets/home/c6.jpg",
            text: "Kūki'o",
            subtext: "Kohala, Hawaii"
        },
        {
            id: 7,
            src:"/assets/home/c7.jpg",
            text: "Vaquero",
            subtext: "Westlake, Texas"
        },
        {
            id: 8,
            src:"/assets/home/c8.jpg",
            text: "Iron Horse",
            subtext: "Whitefish, Montana"
        },
        {
            id: 9,
            src:"/assets/home/c9.jpg",
            text: "CordeValle",
            subtext: "Silicon Valley, California"
        },
        {
            id: 10,
            src:"/assets/home/c10.jpg",
            text: "Estancia",
            subtext: "Scottsdale, Arizona"
        },
        {
            id: 11,
            src:"/assets/home/c11.jpg",
            text: "North Shore Reserve",
            subtext: "Kaua'i, Hawaii"
        },
        {
            id: 12,
            src:"/assets/home/c12.jpg",
            text: "James Island",
            subtext: "Southern Gulf Islands, British Columbia, Canada"
        },
        {
            id: 13,
            src:"/assets/home/c13.jpg",
            text: "CostaTerra",
            subtext: "Comporta, Portugal"
        },
        {
            id: 14,
            src:"/assets/home/c14.jpg",
            text: "Barbuda Ocean Club",
            subtext: "Barbuda, West Indies"
        },
        {
            id: 15,
            src:"/assets/home/c15.jpg",
            text: "Driftwood",
            subtext: "Austin, Texas"
        
        },
        {
            id: 16,
            src:"/assets/home/c16.jpg",
            text: "Troubadour",
            subtext: "Nashville, Tennessee"
        },
        {
            id: 17,
            src:"/assets/home/c17.jpg",
            text: "Playa Grande",
            subtext: "Rio San Juan, Dominican Republic"
        },
        {
            id: 18,
            src:"/assets/home/c18.jpg",
            text: "Chileno Bay",
            subtext: "Cabo San Lucas, Mexico"
        
        },
        {
            id: 19,
            src:"/assets/home/c19.jpg",
            text: "The Summit",
            subtext: "Las Vegas, Nevada"
        },
        {
            id: 20,
            src:"/assets/home/c20.jpg",
            text: "Dune Deck",
            subtext: "Westhampton Beach, NY"
        },
        {
            id: 21,
            src:"/assets/home/c21.jpg",
            text: "Silo Ridge",
            subtext: "Amenia, New York"
        },
        {
            id: 22,
            src:"/assets/home/c22.jpeg",
            text: "Makena",
            subtext: "Maui, Hawaii"
        },
        {
            id: 23,
            src:"/assets/home/c23.jpg",
            text: "YellowStone Club",
            subtext: "Big Sky, Montana"
        },
        {
            id: 24,
            src:"/assets/home/c24.jpg",
            text: "Gozzer Ranch",
            subtext: "Coeur d’Alene, Idaho"
        },
        {
            id: 25,
            src:"/assets/home/c25.jpg",
            text: "El Dorado",
            subtext: "Los Cabos, Mexico"
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
    <video class="video-home2" src="https://dxaurk9yhilm4.cloudfront.net/experiences_190722_093236.mp4?mtime=20190722023236" autoplay loop="" muted></video>`
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
    <video class="video-home2" src="https://dxaurk9yhilm4.cloudfront.net/lifestyle.mp4?mtime=20190609070318" autoplay loop="" muted></video>`
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
    <video class="video-home2" src="https://dxaurk9yhilm4.cloudfront.net/wellness.mp4?mtime=20190609070447" autoplay loop="" muted></video>`
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
        <div class="r-arrow arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91" onclick="video1()">
                    <path
                        d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z">
            
                    </path>
                </svg>
            </div>
    </div>
    <div class="end-img">
        <img class="img" src="/assets/home/end2.jpg" alt="">
        <h1 class="lifestyle">Lifestyle</h1>
        <div class="r-arrow arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91" onclick="video2()">
                    <path
                        d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z">
            
                    </path>
                </svg>
            </div>
    </div>
    <div class="end-img">
        <img class="img" src="/assets/home/end3.jpg" alt="">
        <h1 class="wellness">Welness</h1>
        <div class="r-arrow arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91" onclick="video3()">
                    <path
                        d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z">
            
                    </path>
                </svg>
            </div>
    </div>`; 

}


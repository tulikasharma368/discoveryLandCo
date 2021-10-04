window.onload = about_images();

function about_images(){
    images = [
        {
            id: 1,
            src: "/assets/home/c1.jpg",
            text: "Luxury bespoke homes",
            subtext: "Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles."
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

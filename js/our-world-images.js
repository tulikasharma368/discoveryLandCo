images = [
    {
        id: 1,
        src: "/assets/our-world/1.jpg",
        text: "North Shore Preserve",
        subtext: "Kaua'i, Hawaii"
    },
    {
        id: 2,
        src:"/assets/our-world/2.jpg",
        text: "James Island",
        subtext: "Southern Gulf Islands, British Columbia, Canada"
    },
    {
        id: 3,
        src:"/assets/our-world/3.jpg",
        text: "CostaTerra",
        subtext: "Comporta, Portugal"
    },
    {
        id: 4,
        src:"/assets/our-world/4.jpg",
        text: "Barbuda Ocean Club",
        subtext: "Barbuda, West Indies"
    },
    {
        id: 5,
        src:"/assets/our-world/5.jpg",
        text: "Driftwood",
        subtext: "Austin, Texas"
    },
    {
        id: 6,
        src:"/assets/our-world/6.jpg",
        text: "Troubadour",
        subtext: "Nashville, Tennessee"
    },
    {
        id: 7,
        src:"/assets/our-world/7.jpg",
        text: "Playa Grande",
        subtext: "Rio San Juan, Dominican Republic"
    },
    {
        id: 8,
        src:"/assets/our-world/8.jpg",
        text: "Chileno Bay",
        subtext: "Cabo San Lucas, Mexico"
    },
    {
        id: 9,
        src:"/assets/our-world/9.jpg",
        text: "The Summit",
        subtext: "Las Vegas, Nevada"
    },
    {
        id: 10,
        src:"/assets/our-world/10.jpg",
        text: "Dune Deck",
        subtext: "Westhampton Beach, NY"
    },
    {
        id: 11,
        src:"/assets/our-world/11.jpg",
        text: "Silo Ridge",
        subtext: "Amenia, New York"
    },
    {
        id: 12,
        src:"/assets/our-world/12.jpg",
        text: "Mākena",
        subtext: "Maui, Hawaii"
    },
    {
        id: 13,
        src:"/assets/our-world/13.jpg",
        text: "Yellowstone Club",
        subtext: "Big Sky, Montana"
    },
    {
        id: 14,
        src:"/assets/our-world/14.jpg",
        text: "Gozzer Ranch",
        subtext: "Coeur d’Alene, Idaho"
    },
    {
        id: 15,
        src:"/assets/our-world/15.jpg",
        text: "El Dorado",
        subtext: "Los Cabos, Mexico"
    },
    {
        id: 16,
        src:"/assets/our-world/16.jpg",
        text: "Madison",
        subtext: "La Quinta, California"
    },
    {
        id: 17,
        src:"/assets/our-world/17.jpg",
        text: "Baker's Bay",
        subtext: "Great Guana Cay, Bahamas"
    },
    {
        id: 18,
        src:"/assets/our-world/18.jpg",
        text: "Hideaway",
        subtext: "La Quinta, California"
    },
    {
        id: 19,
        src:"/assets/our-world/19.jpg",
        text: "Mountaintop",
        subtext: "Cashiers, North Carolina"
    },
    {
        id: 20,
        src:"/assets/our-world/20.jpeg",
        text: "Mirabel",
        subtext: "Scottsdale, Arizona"
    },
    {
        id: 21,
        src:"/assets/our-world/21.jpg",
        text: "Kūki'o",
        subtext: "Kohala, Hawaii"
    },
    {
        id: 22,
        src:"/assets/our-world/22.jpg",
        text: "Vaquero",
        subtext: "Westlake, Texas"
    },
    {
        id: 23,
        src:"/assets/our-world/23.jpg",
        text: "Iron Horse",
        subtext: "Whitefish, Montana"
    },
    {
        id: 24,
        src:"/assets/our-world/24.jpg",
        text: "CordeValle",
        subtext: "Silicon Valley, California"
    },
    {
        id: 25,
        src:"/assets/our-world/25.jpg",
        text: "Estancia",
        subtext: "Scottsdale, Arizona"
    }
]

var content = '';

images.forEach(element => {
    content += `<div class="item">
    <img src="${element.src}" alt="">
    <h2 class="text">${element.text}</h2>
    <p class="subtext">${element.subtext}</p>
</div>`
});

document.querySelector('#main').innerHTML = content;

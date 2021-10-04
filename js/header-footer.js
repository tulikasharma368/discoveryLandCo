window.onload = header();
window.onload = footer();

function header(){
    const headerHtml = `<a href='/pages/home.html'><img src="/assets/our-world/logo-discoveryland.png" alt=""></a>
<div>
    <ul class="header-list">
        <a class="link" href="/pages/about.html" ><li class="und1">About DLC</li></a>
        
        <a class="link" href="/pages/ourWorlds.html" ><li class="und2">Our Worlds</li></a>        
        <li class="und3">Experiences</li>
        <a class="link" href="/pages/gallery.html" ><li class="und4">Gallery</li></a>
        <li class="und5">Press</li>
        <li>
            <img src="/assets/our-world/menu.png" onclick="dropdown()" alt="">
        </li>
    </ul>
    <ul>
        <li class="header-list1"><img src="/assets/our-world/menu.png" onclick="dropdown()" alt=""></li>
    </ul>
</div>`

document.querySelector('#header').innerHTML = headerHtml;
}

function footer(){
    const footerHtml = `<div class="footer-content">
<img src="/assets/our-world/logo_new.svg" alt="" srcset="">
<div class="footer-lists">
    <ul class="list1">
        <li class="ele">GET IN TOUCH</li>
        <li class="ele">(480)624-5200</li>
        <a class="link" href="mailto:mail@discoverylandco.com"><li class="ele underline">mail@discoverylandoco.com</li></a>
        
    </ul>
    <div class="inner-lists">
        <ul class="list2">
            <a class="link" href="/pages/about.html"><li class="ele under1">About DLC</li></a>
            <a class="link" href="/pages/ourWorlds.html"><li class="ele under2">Our Worlds</li></a>
            <li class="ele under3">Experiences</li>
            <a class="link" href="/pages/gallery.html"><li class="ele under4">Gallery</li></a>
            <li class="ele under5">Press</li>
        </ul>
        <ul class="list3">
            <li class="ele">Magazine</li>
            <li class="ele">Careers</li>
            <li class="ele">Foundation</li>
            <li class="ele">Company</li>
            <li class="ele">Contact</li>
            <li class="ele">Privacy</li>
        </ul>
    </div>
</div>

</div>
<p class="copyright">© Discovery Land Company.All rights reserved.</p>`

document.querySelector('#footer').innerHTML = footerHtml;
}

function dropdown(){
    const content = `<div class="menu-dropdown">
    <div class="menu-top">
        <img class="menu-image1" src="/assets/our-world/logo-discoveryland.png" alt="">
        <img class="menu-image2" src="/assets/our-world/close.png" alt="" onclick="document.querySelector('#menu').innerHTML=''">
    </div>
    <div class="menu-part1">
        <ul>
            <li>About DLC</li>
            <li>Our worlds</li>
            <li>Experience</li>
            <li>Gallery</li>
            <li>Press</li>
        </ul>
    </div>
    <div class="menu-part2">
        <ul>
            <li>Magazine</li>
            <li>Company</li>
            <li>Foundation</li>
            <li>Carrer</li>
            <li class="con">Contact</li>
        </ul>
    </div>
    
</div>`
document.querySelector('#menu').innerHTML = content;
}
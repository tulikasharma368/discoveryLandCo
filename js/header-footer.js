window.onload = header();
window.onload = footer();

function header(){
    const headerHtml = `<img src="/assets/our-world/logo-discoveryland.png" alt="">
<div>
    <ul class="header-list">
        <li class="und1">About DLC</li>
        <a class="link" href="/pages/ourWorlds.html" ><li class="und2">Our Worlds</li></a>
        
        <li class="und3">Experiences</li>
        <a class="link" href="/pages/gallery.html" ><li class="und4">Gallery</li></a>
        <li class="und5">Press</li>
        <li><img src="/assets/our-world/menu.png" alt=""></li>
        <!-- <ul><i class="fas fa-bars"></i></ul> -->
    </ul>
    <ul>
        <li class="header-list1"><img src="/assets/our-world/menu.png" alt=""></li>
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
            <li class="ele under1">About DLC</li>
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
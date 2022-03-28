$(document).ready(function () {

    $('#main--nav').append(mainDiv)

    $('#content-header').append(header)

    $('#projects-section').append(projects)

    $('footer').append(getFooter)
    $('#language-section').append(getLanSection)
})

//language=HTML
function mainDiv() {
    return `
        <ul class="nav--list">
            <li class="list--items" title="Uziel's LinkedIn Profile"><a
                    href="https://www.linkedin.com/in/uziel-carranza-charro"
                    target="_blank">About</a></li>

            <li class="list--items" title="Go to Projects Section"><a href="#projects">Projects</a></li>

            <li class="list--items" title="Go to Uziel's Stack"><a href="#language-section">technologies</a></li>

            <li class="list--items" title="Send a Direct Email"><a
                    href="mailto: uziel.carranzacharro@gmail.com">Contact</a></li>

            <li class="list--items" title="Light Mode/Dark Mode" onclick="toggleMode()"><a href="#"><i
                    class="fas fa-adjust"></i
            ></a></li>
        </ul>
    `
}

function header() {
    //language=HTML
    return `
        <div class="header--content animate__animated animate__backInUp">
            <h1>Hello There</h1>
            <h1>I'm <strong class="yellow">Uziel Carranza</strong></h1>
            <p class="header--para">A <strong class="yellow">front-end developer</strong>
                with a strong passion for <br>building
                responsive web applications</p>
            <p class="header--para">get to <a title="Uziel's LinkedIn Profile"
                                              href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank"
                                              class="header--a">know me</a> <span class="hand wave">&#128075&#127997</span></p>
        </div>
        <div class="social--links animate__animated animate__backInUp">
            <a title="Uziel's LinkedIn Profile" class="link-element click"
               href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank"><i
                    class="fa-brands fa-linkedin"></i></a>
            <a title="Uziel's Github" class="link-element click" href="https://github.com/UzielCarranza"
               target="_blank"><i
                    class="fa-brands fa-github-square"> </i></a>
            <a title="Download Resume" class="link-element click" href="#" target="_blank"><i
                    class="fas fa-file-pdf"></i></a>
        </div>
    `
}
function projects() {
    //language=HTML
    return `
        <div class="card">
            <div class="card-front">
                <img class="card-img" src="../img/weather.png" alt="weather app"></div>
            <div class="card-back">
                <h3>Weather App</h3>
                <p>A web application developed with BootStrap,javaScript, CSS3, and HTML5</p>
                <a title="Get myWeather App" class="element-card click" href="https://github.com/UzielCarranza"
                   target="_blank"><i
                        class="fa-brands fa-github-square" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="card">
            <div class="card-front">
                <img class="card-img" src="../img/coffee.png" alt="weather app"></div>
            <div class="card-back">
                <h3>Coffee Project</h3>
                <p>A pair programming project developed with javaScript, CSS3, and HTML5</p>
                <a title="Coffe Project Website" class="element-card click"
                   href="https://uziel-jordan.github.io/coffee-project-1/" target="_blank"><i
                        class="fa-brands fa-github-square" aria-hidden="true"></i></a>
            </div>

        </div>
    `
}

function getFooter() {
    //language=HTML
    return `
        
        <h5 class="signature-footer">&#64;2022 Uziel Carranza Charro
        </h5>
        <ul class="footer-ul">
            <li title="Go to Uziel's Github Page" class="list--items"><a href="https://github.com/UzielCarranza"
                                                                         target="_blank">Github</a></li>

            <li title="Uziel's LinkedIn Profile" class="list--items"><a
                    href="https://www.linkedin.com/in/uziel-carranza-charro"
                    target="_blank">LinkedIn</a></li>
            <li title="Send a Direct Email" class="list--items"><a href="mailto: uziel.carranzacharro@gmail.com">Send
                Email</a></li>
            <li title="Download Resume" class="list--items"><a href="#">Resume</a></li>
        </ul>
    `;
}


function getLanSection() {
    // language=HTML
    return `
        <h1>Technologies</h1>
        <div class="row" id="technologies">
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4  tech-imgs-section ">
                <img title="HTML" class="col-8 col-md-6 col-lg-5 tech-imgs" src="../img/html.png" alt="HTML language">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4  tech-imgs-section ">
                <img title="CSS" class="col-8 col-md-6 col-lg-5 tech-imgs" src="../img/css.png" alt="css language"
                     style="height: 90%">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="JavaScript" class="col-8 col-md-6 col-lg-5 tech-imgs" src="../img/js.png" alt="JavaScript language">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="Bootstrap" class="col-8 col-md-6 col-lg-5 tech-imgs" src="../img/bootstrap.png"
                     alt="bootStrap library">
            </div>
        </div>

    `;
}


//light mode

let contrastToggle = false;

function toggleMode() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += "light-theme"
    } else {
        document.body.classList.remove("light-theme")
    }
}


//go back up

let myBtn = document.getElementById('btn')
window.onscroll = function () {
    scrollBtn()
};

//destroy btm
let destroyBtn = document.getElementById('destroy')

function scrollBtn() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

function goTop() {
    document.documentElement.scrollTop = 0
}





// animate__animated animate__bounce

$('#destroy').click(function (){
    $('body').addClass('animate__animated animate__zoomOutDown')
})

$('#projects').hover(function (){
    $(this).addClass('animate__animated animate__rubberBand')
}, function (){
    $(this).removeClass('animate__animated animate__rubberBand')
})



// $('#language-section').hover(function (){
//     $(this).addClass('animate__animated animate__lightSpeedInLeft')
// })


//
// destroyBtn.style.display = "block"
//
// destroyBtn.style.display = "none"
$('footer').hover(function (){
    $('#destroy').css({'position': 'absolute', 'display': 'block'})

    $('#destroy').addClass('animate__animated animate__lightSpeedInLeft')
}, function (){

    $('#destroy').css({'position': 'fixed', 'display': 'none'})
})

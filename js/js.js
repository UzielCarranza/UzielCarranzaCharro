$(document).ready(function () {

    $('#main--nav').append(mainDiv)

    $('#content-header').append(header)

    $('#projects-section').append(projects)

    $('footer').append(getFooter)
})

//language=HTML
function mainDiv() {
    return `
        <ul class="nav--list">
            <li class="list--items"><a href="https://www.linkedin.com/in/uziel-carranza-charro"
                                       target="_blank">About</a></li>

            <li class="list--items"><a href="#">Projects</a></li>

            <li class="list--items"><a href="#">Contact</a></li>

            <li class="list--items"><a href=""><i class="fas fa-adjust"></i
            ></a></li>
        </ul>
    `
}

function header() {
    //language=HTML
    return `
        <div class="header--content">
            <h1>Hello There</h1>
            <h1>I'm <strong class="yellow">Uziel Carranza</strong></h1>
            <p class="header--para">A <strong class="yellow"> end software engineer</strong>
                with a strong passion for building responsive web application</p>
            <p class="header--para">get to <a href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank"
                                              class="header--a">know me</a></p>
        </div>
        <div class="social--links">
            <a class="link-element click" href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank"><i
                    class="fa-brands fa-linkedin"></i></a>
            <a class="link-element click" href="https://github.com/UzielCarranza" target="_blank"><i
                    class="fa-brands fa-github"></i></a>
            <a class="link-element click" href="#" target="_blank"><i class="fas fa-file-pdf"></i></a>
        </div>
    `
}

function projects() {
    //language=HTML
    return `
        <div class="card mb-4">
            <div class="card-front">
                <img class="card-img" src="../img/weather.png" alt="weather app"></div>
            <div class="card-back">
                <h3>Weather App</h3>
                <p>A web application developed with BootStrap,javaScript, CSS3, and HTML5</p>
                <a class="link-element click" href="https://github.com/UzielCarranza" target="_blank"><i
                        class="fa-brands fa-github" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="card mt-4">
            <div class="card-front">
                <img class="card-img" src="../img/coffee.png" alt="weather app"></div>
            <div class="card-back">
                <h3>Coffee Project</h3>
                <p>A front-end pair programming project developed with javaScript, CSS3 and HTML5</p>
                <a class="link-element click" href="https://uziel-jordan.github.io/coffee-project-1/" target="_blank"><i
                        class="fa-brands fa-github" aria-hidden="true"></i></a>
            </div>

        </div>
    `
}

function getFooter(){
    //language=HTML
    return `
        <ul class="footer-ul">
            <li class="list--items"><a  href="https://github.com/UzielCarranza" target="_blank">Github</a></li>

            <li class="list--items"><a  href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank">LinkedIn</a></li>
            <li class="list--items"><a href="mailto: uziel.carranzacharro@gmail.com">Send Email</a></li>
            <li class="list--items"><a href="#">Resume</a></li>
        </ul>
    `;
}

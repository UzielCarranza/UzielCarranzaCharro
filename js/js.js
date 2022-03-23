$(document).ready(function () {

    $('#main--nav').append(mainDiv)

    $('#content-header').append(header)
})

//language=HTML
function mainDiv() {
    return `
        <ul class="nav--list">
            <li class="list--items"><a href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank" >About</a></li>

            <li class="list--items"><a href="#">Projects</a></li>

            <li class="list--items"><a href="#">Contact</a></li>

            <li class="list--items"><i class="fas fa-adjust"></i
            ></li>
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
            <p class="header--para">get to <a href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank" class="header--a">know me</a></p>
        </div>
        <div class="social--links">
            <a href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-github"></i></a>
        </div>
    `
}

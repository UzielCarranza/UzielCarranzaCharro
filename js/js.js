const developmentProjects = {
    frontEnd:
        [
            {
                id: 1,
                title: 'bomb reporter',
                url: 'img/bomb-reporter.png',
                description: 'A full-stack application developed by a team of four developers focusing to give Ukrainians the tools to report bombs near their area.',
                github_location: `https://github.com/Team-4-capstone`
            },

            {
                id: 2,
                title: 'GetMyWeather',
                url: 'img/weather.png',
                description: 'A web application developed with BootStrap, vanilla javaScript, CSS3, and HTML5',
                github_location: 'https://github.com/UzielCarranza/weather-app'
            },
            {
                id: 2,
                title: 'Pokemon Lister ',
                url: 'img/pokemons-lister.png',
                description: 'A React web application that displays Pokemons in card format. Some of the features include pagination, sorting options, etc...',
                github_location: 'https://github.com/UzielCarranza/pokemon-lister'
            },

            {
                id: 3,
                title: 'Coffee Project',
                url: 'img/coffee.png',
                description: 'A pair programming project developed with vanilla javaScript, CSS3, and HTML5',
                github_location: 'https://uziel-jordan.github.io/coffee-project-1/'
            },
        ],
    backEnd: [
        {
            id: 1,
            title: 'Microservice API Music Store Catalog',
            url: 'img/music-store-catalog.png',
            description: 'A microservice with a REST API that provides CRUD functionality for a database hosted and deployed on Heroku using Docker to containerize the application.',
            github_location: 'https://github.com/UzielCarranza/music-store-catalog'
        },
        {
            id: 2,
            title: 'Microservice API Music Store Recommendations',
            url: 'img/music_store_recommendation.png',
            description: 'A microservice with a REST API that provides CRUD functionality for a database hosted and deployed on Heroku using Docker to containerize the application.',
            github_location: 'https://github.com/UzielCarranza/music-store-recommendation'
        },
        {
            id: 3,
            title: 'Contacts Manager App',
            url: 'img/contactsManager.png',
            description: 'A pair programming project developed with vanilla javaScript, CSS3, and HTML5',
            github_location: 'https://github.com/Uziel-Daniel/contacts-manager'
        }, {
            id: 4,
            title: 'Hangman Game',
            url: 'img/hangman.png',
            description: 'One of the populars games, the hangman game developed using Java',
            github_location: 'https://github.com/UzielCarranza/hangman-project'
        }
    ],
    fullStack: [
        {
            id: 1,
            title: 'Underground Movies Madness',
            url: 'img/moviesApp.png',
            description: 'A pair programming project developed with vanilla javaScript, CSS3, and HTML5',
            github_location: 'https://github.com/uziel-tyreik/movies'
        }
    ]

}

$(document).ready(function () {

    $('#main--nav').append(mainDiv)

    $('#content-header').append(header)

    $('#projects-section').append(frontEndProjects)


    $('footer').append(getFooter)
    $('#language-section').append(getLanSection)
})

//language=HTML
function mainDiv() {
    return `
        <div>
            <h1 class="update" >New site update coming soon!!!</h1>
        </div>
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
                                              class="header--a">know me</a> <span
                    class="hand wave">&#128075&#127997</span></p>
        </div>
        <div class="social--links animate__animated animate__backInUp">
            <a title="Uziel's LinkedIn Profile" class="link-element click"
               href="https://www.linkedin.com/in/uziel-carranza-charro" target="_blank"><i
                    class="fa-brands fa-linkedin"></i></a>
            <a title="Uziel's Github" class="link-element click" href="https://github.com/UzielCarranza"
               target="_blank"><i
                    class="fa-brands fa-github-square"> </i></a>
            <a title="Download Resume" class="link-element click" href="../Files/Uziel_Carranza_Resume.pdf"
               target="_blank"><i
                    class="fas fa-file-pdf"></i></a>
        </div>
    `
}

function frontEndProjects() {
    //language=HTML
    return `
        <div class="projects-wrapper">
            <div id="carousel-frontend" class="carousel slide spacer" data-ride="carousel">

                <ol class="carousel-indicators">
                    ${developmentProjects.frontEnd.map(project => `<li data-target="#carouselExampleIndicators" data-slide-to='${project.id}'></li>`).join('')
                    }
                </ol>
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <h1>Front end Projects</h1>
                        <img class="carousel-img" src="img/Front-end-Projects.png" alt="First slide">
                    </div>
                    ${developmentProjects.frontEnd.map(project => `
                 <div class="carousel-item">
                 <div class="carousel-content">
                    <a title="${project.title}" href="${project.github_location}" target="_blank">
                      <i class="fa-brands fa-github-square carousel-links" aria-hidden="true"></i></a>
                   
                    <h1>${project.title}</h1>
                 <p>${project.description}</p>
                    </div>
                    <img class="carousel-img" src="${project.url}" alt="${project.id} slide">
                </div>`).join('')}
                </div>

                <a class="carousel-control-prev" href="#carousel-frontend" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-frontend" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <!--        backend projects-->
            <div id="carousel-backend" class="carousel slide spacer" data-ride="carousel">

                <ol class="carousel-indicators">
                    ${developmentProjects.backEnd.map(project => `<li data-target="#carouselExampleIndicators" data-slide-to='${project.id}'></li>`).join('')
                    }
                </ol>
                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <h1>Back end Projects</h1>
                        <img class="carousel-img" src="img/back-end.png" alt="First slide">
                    </div>
                    ${developmentProjects.backEnd.map(project => `<div class="carousel-item">
                   <div class="carousel-content">
                      <a title="${project.title}" href="${project.github_location}" target="_blank">
                      <i class="fa-brands fa-github-square carousel-links" aria-hidden="true"></i></a></h1>
                    <h1>${project.title}</h1>
                   <p>${project.description}</p>
                    </div>
                    <img class="carousel-img" src="${project.url}" alt="${project.id} slide">
                </div>`).join('')}
                </div>

                <a class="carousel-control-prev" href="#carousel-backend" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-backend" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <!--        full-stack projects-->
            <div id="carousel-fullstack" class="carousel slide spacer" data-ride="carousel">

                <ol class="carousel-indicators">
                    ${developmentProjects.fullStack.map(project => `<li data-target="#carouselExampleIndicators" data-slide-to='${project.id}'></li>`).join('')
                    }
                </ol>
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <h1>Full stack Projects</h1>
                        <img class="carousel-img" src="img/full-stack.png" alt="First slide">
                    </div>
                    ${developmentProjects.fullStack.map(project => `<div class="carousel-item">
                     <div class="carousel-content">
                         <a title="${project.title}" href="${project.github_location}" target="_blank">
                      <i class="fa-brands fa-github-square carousel-links" aria-hidden="true"></i></a></h1>
                   
                    <h1>${project.title}
                  <p>${project.description}</p>
                    </div>
                    <img class="carousel-img" src="${project.url}" alt="${project.id} slide">
                </div>`).join('')}
                </div>

                <a class="carousel-control-prev" href="#carousel-fullstack" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel-fullstack" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
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

        <h1 id="lan">Technologies</h1>
        <div class="row" id="technologies">
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4  tech-imgs-section ">
                <img title="HTML" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/html.png" alt="HTML language">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4  tech-imgs-section ">
                <img title="CSS" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/css.png" alt="css language"
                     style="height: 90%">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="JavaScript" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/js.png"
                     alt="JavaScript language">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="Bootstrap" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/bootstrap.png"
                     alt="bootStrap library">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="Java" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/java.png"
                     alt="Java programming language">
            </div>

            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="Jquery" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/Jquery.png"
                     alt="jquery">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="React" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/react.png"
                     alt="React">
            </div>
            <div class="col-5 text-center col-md-5 col-lg-4 col-xl-4 tech-imgs-section ">
                <img title="tailwind" class="col-8 col-md-6 col-lg-5 tech-imgs" src="img/tailwind.png"
                     alt="tailwind CSS">
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
        $('#body').css("background-color", "#fff");
    } else {
        document.body.classList.remove("light-theme")
        $('#body').css("background-color", "#242424");
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

$('#destroy').click(function () {
    $('body').addClass('animate__animated animate__zoomOutDown')
})

$('#projects').hover(function () {
    $(this).addClass('animate__animated animate__rubberBand')
}, function () {
    $(this).removeClass('animate__animated animate__rubberBand')
})

$('#language-section').hover(function () {
    $('#language-section>h1').addClass('animate__animated animate__rubberBand')
}, function () {
    $('#language-section>h1').removeClass('animate__animated animate__rubberBand')
})

// $('#language-section').hover(function (){
//     $(this).addClass('animate__animated animate__lightSpeedInLeft')
// })


//
// destroyBtn.style.display = "block"
//
// destroyBtn.style.display = "none"
$('footer').hover(function () {
    $('#destroy').css({'position': 'absolute', 'display': 'block'})

    $('#destroy').addClass('animate__animated animate__lightSpeedInLeft')
}, function () {

    $('#destroy').css({'position': 'fixed', 'display': 'none'})
})


$(document).ready(function (){

    $('#main--nav').append(mainDiv)
})

//language=HTML
function mainDiv(){
    return `
        <ul class="nav--list">
            <li class="list--items"><a href="#">About</a></li>

            <li class="list--items"><a href="#">Projects</a></li>

            <li class="list--items"><a href="#">Contact</a></li>

            <li class="list--items"><i class="fas fa-adjust"></i
            ></li>
        </ul>
    `
}
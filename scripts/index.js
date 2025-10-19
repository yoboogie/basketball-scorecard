let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")

home = 0
away = 0


function p1Home(){
    home++
    homeScore.textContent = home
}

function p2Home(){
    home += 2
    homeScore.textContent = home
}

function p3Home(){
    home += 3
    homeScore.textContent = home
}

function p1Away(){
    away++
    awayScore.textContent = away
}

function p2Away(){
    away += 2
    awayScore.textContent = away
}

function p3Away(){
    away += 3
    awayScore.textContent = away
}
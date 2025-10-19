let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")

let home = 0
let away = 0

window.p1Home = function(){
    home++
    homeScore.textContent = home
}

window.p2Home = function(){
    home += 2
    homeScore.textContent = home
}

window.p3Home = function(){
    home += 3
    homeScore.textContent = home
}

window.p1Away = function(){
    away++
    awayScore.textContent = away
}

window.p2Away = function(){
    away += 2
    awayScore.textContent = away
}

window.p3Away = function(){
    away += 3
    awayScore.textContent = away
}
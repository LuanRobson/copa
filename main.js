function creatGame(player1, hour, player2) {
  return `
      <li>
      <img src="./assets/${player1}.svg" alt="Bandeira do qatar" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}.svg" alt="Bandeira equador" />
      </li>
  `
}

function creatCard(date, day, games) {
  return `
          <div class="card">
          <h2>${date}<span>${day}</span></h2>

          <ul>
          ${games}
          </ul>
          
        </div>
  `
}

document.querySelector("#cards").innerHTML = 
       creatCard("20/10", "Quinta-feira", creatGame('qatar','13:00','equador'))
       +
      creatCard(
        "21/10", "Sexta-feira", creatGame('inglaterra','10:00','ira') + creatGame('holanda','13:00','senegal') + creatGame('estadosunidos','16:00','gales')
       ) +

       creatCard("21/10", "Sexta-feira", creatGame('holanda','13:00','senegal'))
     


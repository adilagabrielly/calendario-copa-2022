function createGame (player1, hour, player2){
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
    </li>
    `
}


function createCard (date,day, games){
    return `
    <div class="card">
    <h2>${date}  <span>${day}</span> </h2> <!-- span: diferenciação entre data e dia-->
    <ul>
        <!-- Criar uma regra para os nomes dos icones-->
        ${games}


        <!-- comentário -->
        <!-- <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li>
        <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li>
        <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li>
        <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li>
        <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li>
        <li>
            <img src="assets/icon-brazil.svg" alt="Suiça">
            <strong>07:00</strong>
            <img src="assets/icon-servia.svg" alt="Camarões">
        </li> -->
    </ul>
</div>
     `
}
document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="">
</header>
<main id="cards">
    ${createCard("24/11","quinta", createGame("brazil","16:00","serbia") + createGame("portugal","17:00","switzerland")
    
    
    )} 
    ${createCard("28/11","segunda", createGame("brazil","13:00","switzerland"))}
    ${createCard("02/12","sexta", createGame("brazil","16:00", "cameroon"))}
</main>
`
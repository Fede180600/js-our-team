const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// 1 - Visualizzazione del team
const teamContainer = document.querySelector(".team-container");

printTeamMembers(teamContainer, team);

// 2 - Gestione dell'aggiunta del nuovo utente
    document
    .getElementById("addMemberButton")
    .addEventListener("click", function() {
    // Prendere i dati degli input e salvarli all'interno dell'oggetto
    const addedMember = getNewTeamMember();
    // Aggiungere il nuovo membro nell'array del team
    team.push(addedMember);
    // Rimettere (aggiornare) tutto il team nella pagina
    printTeamMembers(teamContainer, team);
    // Ripulire i campi dell form
    clearFormFields();
});

// FUNCTIONS
function clearFormFields() {
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("image").value = "";
}


/**
 * Description: Stamp l'array del team nella pagina
 * @param {any} container -> il container dove vanno inserite le card di ogni membro
 * @param {any} arrayToPrint -> I membri del team da stampare
 */
function printTeamMembers(container, arrayToPrint) {
    container.innerHTML = "";

    for (let i = 0; i < arrayToPrint.length; i++) {
        const currentMember = arrayToPrint[i];
        const memberItem = createMemberElement(currentMember);
        // Appendo questo elemento alla lista
        container.append(memberItem);
    }
}

/**
 * Description Prendere i dati degli input e salvarli all'interno dell'oggetto
 * @returns {object} -> oggetto che rappresenta il membro del team
 */
function getNewTeamMember() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;

    return {
        name,
        role,
        image,
    };
}

/**
 * Description Crea un elemento DOM che rappresenta un membro del team
 * @param {Object} member -> l'oggetto che rappresenta le informazioni del membro del team da visualizzare
 * @returns {any} elemento del DOM 
 */
function createMemberElement(member) {
    // Creo il DOM element (li) per il membro 
    const newElement = document.createElement("div");
    newElement.classList.add("team-card")
    newElement.innerHTML = `
        <div class="card-image">
            <img src="img/${member.image}" alt="${member.name}"/>
        </div>
        <div class="card-text">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    `;

    return newElement
}
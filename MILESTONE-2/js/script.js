// Viene fornito un array di oggetti che rappresentano i membri del team.
//Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
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

// [*] MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// Imposto un ciclo per scorrere tutti gli oggetti dell'arrey
for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const memberName = member.name;
    console.log("Nome membro del team:", memberName);
    const memberRole = member.role;
    console.log("Ruolo:", memberRole);
    const memberImage = member.image;
    console.log("Foto profilo", memberImage);
    // [] MILESTONE 2:
    // stampare le stesse informazioni su DOM sottoforma di stringhe
    const memberBox= document.createElement('div');
    memberBox.innerHTML = `Nome membro del team: ${memberName}, Ruolo: ${memberRole}, immagine: ${memberImage}`;
    document.querySelector('.container').append(memberBox);

};




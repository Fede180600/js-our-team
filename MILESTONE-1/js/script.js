// Viene fornito un array di oggetti che rappresentano i membri del team.
//Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

// [] MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
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

// Imposto un ciclo per scorrere tutti gli oggetti dell'arrey
for (let i = 0; i < team.length; i++) {
  const member = team[i];
  for (let key in member) {
    if (key === 'name') {
      console.log("Nome membro del Team:", member[key]);
    } else if (key === 'role') {
      console.log("Ruolo:", member[key]);
    } else {
      console.log("Foto profilo:", member[key]);
    }
  }
};

  
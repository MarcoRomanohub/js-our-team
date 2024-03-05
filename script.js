/*
creo un array di oggetti (membri del team)  
ogni oggetto (membro) ha 3 proprietà : nome ruolo e foto
console log di ogni oggetto 
stampare le informazioni in output
*/
const output = document.getElementById('output')
const membri = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
  }
  
]
// console.log(membri);

// for(let i = 0; i < membri.length; i++){
//   const membro = membri[i];
//   console.log(membro);
//   output.innerHTML += `
//   <li>
//   <p>Name: ${membro.name}, Role: ${membro.role}, ${membro.img}</p>
//   </li>
//   `
// }

for(let membro of membri){
  output.innerHTML += `
  <li>
    <p>Name: ${membro.name}, Role: ${membro.role}, ${membro.img}</p>
  </li>
  `
}
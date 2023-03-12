export const participants = [];
let lastIndexPrinted = -1; // initialize to -1 so we print everything in the first loop

function addParticipant(event) {
  event.preventDefault();  
  const pname = document.querySelector("#pname").value;
  participants.push({ pname });
  lastIndexPrinted++;
  printNewParticipant(lastIndexPrinted);
  document.forms[0].reset(); //clear the form for the next entries
  localStorage.setItem('ParticipantsList', JSON.stringify(participants)) // Saving to local storage
}

function printNewParticipant(index) {
  const myListElm = document.querySelector("#myList");
  const itemElem = document.createElement("li");
  itemElem.textContent = participants[index].pname;
  myListElm.appendChild(itemElem);
}

//Waits for content to load and triggers functions based on click event.
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addParticipant);
});


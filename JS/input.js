let participants = [];

const addPart = (ev)=>{
    ev.preventDefault(); //to stop the form submitting (don't lose data)
    let parts = {
        id: Date.now(),
        pname: document.getElementById('pname').value
    }
    participants.push(parts);
    document.forms[0].reset(); //clear the form for the next entries

    //for display purposes only
    console.warn('added', {participants} );
    //currently printing duplicates - will update to print each name 
    //once.   
    const myListElm = document.querySelector("#myList");

    participants.forEach(item => {
        const itemElem = document.createElement("li");
        itemElem.textContent = item.pname;
        myListElm.appendChild(itemElem);
    });

    //Saving to local storage
    localStorage.setItem('ParticipantsList', JSON.stringify(participants))
}
    

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addPart);
});
import { agrees } from './fakeData';

var htmlElement = document.getElementById('agrees-container');

let newHTML = "";

function createModal(agrees) {
    for (let index = 0; index < agrees.length; index++) {
        const elements = `<div>
                                <input type="checkbox" name="DeepInsightConsent" value="1"></input>
                                <input type="hidden" name="DeepInsightConsent" value="0"></input>
                                <label>${agrees[index].agree}
                                    <a href="#" style="cursor: pointer" class="modal-btn" id="modal-btn">Vis detaljer</a>
                                </label>
                                <div id="consent_dialog_${index}" class="modal centered" style="width:70%;background-color:#F4FFEF;border:1px dotted black;">
                                    <p></p>
                                    <h2 class="title">${agrees[index].modalHeading}</h2>
                                    <p>This Privacy Policy describes Our polici. <a href="http://privacy.entraos.io/" target="_blank">Vis detaljer</a></p>
                                    <p></p>
                                    <button style="cursor: pointer" class="hide-consent" id="consent_hide_${index}">Close</button>
                                </div>
                            </div>`;             
        newHTML += elements;
    }
    htmlElement.innerHTML = newHTML;
}
   
createModal(agrees);

    let modalOpen = document.querySelectorAll('.modal-btn');
    
    for(let i = 0; i < modalOpen.length; i++) {
        modalOpen[i].onclick = function(e) {
            let modal = document.querySelector(`#consent_dialog_${i}`); 
            modal.style.display = "block";
            e.preventDefault();

            let closeBtn = document.querySelector(`#consent_hide_${i}`);
        
            closeBtn.addEventListener('click', (e) => {
            modal.style.display = "none";
            e.preventDefault();
        })
        }
    }
   

   


       
       
  


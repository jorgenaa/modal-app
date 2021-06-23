import { agrees } from './fakeData';


var htmlElement = document.getElementById('agrees-container');

let newHTML = "";

for (let index = 0; index < agrees.length; index++) {
    const elements = `<div>
                        <input type="checkbox" name="DeepInsightConsent" value="1"></input>
                        <input type="hidden" name="DeepInsightConsent" value="0"></input>
                        <label>${agrees[index].agree}
                            <a href="#" style="cursor: pointer" class="modal-btn" id="modal-btn">Vis detaljer</a>
                        </label>
                        <div id="consent_dialog_0" class="modal centered" style="width:70%;background-color:#F4FFEF;border:1px dotted black;">
                            <p></p>
                            <h2>${agrees[index].modalHeading}</h2>
                            <p>This Privacy Policy describes Our polici. <a href="http://privacy.entraos.io/" target="_blank">Vis detaljer</a></p>
                            <p></p>
                            <button style="cursor: pointer" class="hide-consent" id="consent_hide_0">Close</button>
                        </div>
                    </div>`;
    newHTML += elements;
}

htmlElement.innerHTML = newHTML;


let modalOpen = document.getElementById('modal-btn');
let modal = document.querySelector('.modal');

modalOpen.addEventListener('click', function(e) {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}, false)

let modalClose = document.querySelector('.hide-consent');
        
modalClose.addEventListener('click', function() {
    modal.style.visibility = "invisible";
    modal.style.opacity = "0";
}, false)    
       
       
  


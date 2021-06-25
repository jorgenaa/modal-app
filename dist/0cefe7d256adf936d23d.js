import { agrees } from './fakeData';
var htmlElement = document.getElementById('agrees-container');
let newHTML = "";
let newHTML2 = "";

for (let index = 0; index < agrees.length; index++) {
  console.log(agrees[index].modalHeading);
  const elements = `<div>
                            <input type="checkbox" name="DeepInsightConsent" value="1"></input>
                            <input type="hidden" name="DeepInsightConsent" value="0"></input>
                            <label>${agrees[index].agree}
                                <a href="#" style="cursor: pointer" class="modal-btn" id="modal-btn">Vis detaljer</a>
                            </label>
                            <div id="consent_dialog_0" class="modal centered" style="width:70%;background-color:#F4FFEF;border:1px dotted black;">
                                <p></p>
                                <h2 class="title">${agrees[index].modalHeading}</h2>
                                <p>This Privacy Policy describes Our polici. <a href="http://privacy.entraos.io/" target="_blank">Vis detaljer</a></p>
                                <p></p>
                                <button style="cursor: pointer" class="hide-consent" id="consent_hide_0">Close</button>
                            </div>
                        </div>`;
  newHTML += elements;
}

var modalContainer = document.getElementById('consent_dialog_0');

for (let i = 0; i < agrees.length; i++) {
  const modal = `
            <div id="consent_dialog_0" class="modal centered" style="width:70%;background-color:#F4FFEF;border:1px dotted black;">
            <p></p>
            <h2 class="title">${agrees[index].modalHeading}</h2>
            <p>This Privacy Policy describes Our polici. <a href="http://privacy.entraos.io/" target="_blank">Vis detaljer</a></p>
            <p></p>
            <button style="cursor: pointer" class="hide-consent" id="consent_hide_0">Close</button>
   </div>`;
  newHTML2 += modal;
}

htmlElement.innerHTML = newHTML;
modalContainer.innerHTML = newHTML2;
let modalOpen = document.querySelectorAll('.modal-btn');

for (let i = 0; i < modalOpen.length; i++) {
  modalOpen[i].onclick = function (e) {
    let modal = document.querySelector('.modal');
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    e.preventDefault();
    let modalClose = document.querySelector('.hide-consent');
    modalClose.addEventListener('click', e => {
      modal.style.visibility = "invisible";
      modal.style.opacity = "0";
      e.preventDefault();
    }, false);
  };
}
var htmlElement = document.getElementById('agrees-container');
let modalBtn = document.getElementById('modal-btn');
var modal = document.querySelector('.modal');
let newHTML = "";

for (let index = 0; index < 7; index++) {
  const elements = `<div>
                        <input type="checkbox" name="DeepInsightConsent" value="1"></input>
                        <input type="hidden" name="DeepInsightConsent" value="0"></input>
                        <label>Samtykke til full innsynsrett - typisk bruk kan være kundesupport/debugging og operer på vegne av brukstilfeller 
                            <a href="#" style="cursor: pointer" class="modal-btn" id="modal-btn">Vis detaljer</a>
                        </label>
                        <div id="consent_dialog_0" class="modal centered" style="width:70%;background-color:#F4FFEF;border:1px dotted black;">
                                <p>
                                    </p><h2>Samtykke til full in</h2>
                                    <h4>Sist oppdatert: 27. November 2020</h4>
                                    <h4>Valid from: 2021-06-21T13:27:20.661224Z - to: 2021-07-28T14:20:40.661225Z</h4>
                                    <p>We use Your Personal data to provide acc</p>
                                    <p>This Privacy Policy describes Our polici. <a href="http://privacy.entraos.io/" target="_blank">Vis detaljer</a></p>
                                <p></p>
                                <button style="cursor: pointer" class="hide-consent" id="consent_hide_0">Close</button>
                        </div>
                    </div>`;
  newHTML += elements;
}

htmlElement.innerHTML = newHTML;

if (modalBtn) {
  modalBtn.addEventListener('click', function (e) {
    console.log("hello world");
    modal.classList.add('modal-active');
  }, false);
}
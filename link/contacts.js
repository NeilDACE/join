const contactsList = document.getElementById("contacts-list");
let contacts = [];

async function init() {
  const response = await fetch("contacts.json");
  contacts = await response.json();
  renderContactsList();
}

function renderContactsList() {
  contactsList.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    contactsList.innerHTML += contactTemplate(i);
  }
}

function contactTemplate(index) {
  const contact = contacts[index];
  return `
        <div>
            <h4>${contact.lastName}, ${contact.firstName}</h4>
            <p>${contact.email}</p>
        </div>
    `;
}

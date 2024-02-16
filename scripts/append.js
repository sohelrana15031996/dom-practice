const bodyContainer = document.getElementById
('body-container');


const newSection = document.createElement('section');
bodyContainer.appendChild(newSection);

const newHead = document.createElement('h1');
newHead.innerText = "Parent name list"
newSection.appendChild(newHead);

const namelist = document.createElement('ul');
newSection.appendChild(namelist);

const name1 = document.createElement('li');
name1.innerText = 'Naharul';
namelist.appendChild(name1);

const name2 = document.createElement('li');
name2.innerText = 'Helena';
namelist.appendChild(name2);

const name3 = document.createElement('li');
name3.innerText = 'Altaf';
namelist.appendChild(name3);

const name4 = document.createElement('li');
name4.innerText = 'Forida';
namelist.appendChild(name4);

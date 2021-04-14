import './style.scss';

let number = 1;

const addContent = () => {
  const year = document.getElementsByClassName("year");
  const month = document.getElementsByClassName("month");
  const day = document.getElementsByClassName("day");
  const start = document.getElementsByClassName("start");
  const end = document.getElementsByClassName("end");

  const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for (let i = 2022; i > 1900; i--) {
    const option = document.createElement("option");
    const text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${year}`);

    for (let item of year) {
      item.appendChild(option)
    }
  }

  for (let i = 0; i < 12; i++) {
    const option = document.createElement("option");
    const text = document.createTextNode(`${monthsArr[i]}`);
    option.appendChild(text);
    option.setAttribute("value", `${monthsArr[i]}`);

    for (let item of month) {
      item.appendChild(option)
    }
  }

  for (let i = 1; i < 32; i++) {
    const option = document.createElement("option");
    const text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${i}`);

    for (let item of day) {
      item.appendChild(option)
    }
  }

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j+=3) {
      const option = document.createElement("option");
      const text = document.createTextNode(`${i}:${j}0`);
      option.appendChild(text);
      option.setAttribute("value", `${i}`);

      for (let item of start) {
        item.appendChild(option)
      }
    }
  }

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j+=3) {
      const option = document.createElement("option");
      const text = document.createTextNode(`${i}:${j}0`);
      option.appendChild(text);
      option.setAttribute("value", `${i}`);

      for (let item of end) {
        item.appendChild(option)
      }
    }
  }
}

const termComponent = (number) => {
  const body = document.getElementById('main');
  const article = document.createElement("article");
  article.className = "term__article";

  const header = document.createElement("h2");
  header.className = "term__article__header";
  const text = document.createTextNode(`Termin #${number}`);
  header.appendChild(text);
  article.appendChild(header);

  const section = document.createElement("section");
  section.className = "term__article__dropdowns";
  
    
  const classesArr = ["year", "month", "day", "start", "end"];

  setTimeout(() => {
    classesArr.forEach(el => {
      const select = document.createElement("select");
      select.className = el;

      section.appendChild(select);
    });
    article.appendChild(section);
    body.appendChild(article);
    setTimeout(() => addContent());
  })
}

termComponent(number);

const body = document.getElementById('btn-container');

let addBtn = document.createElement("button");
let text = document.createTextNode('Dodaj još jedan termin');
addBtn.setAttribute("id", "btn");
addBtn.appendChild(text);
body.appendChild(addBtn);   

document.querySelector("#btn").addEventListener('click', () => {
  number++;
  termComponent(number);
})
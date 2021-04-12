const addContent = () => {
  console.log("addContent");
  const year = document.getElementsByClassName("year");
  const month = document.getElementsByClassName("month");
  const day = document.getElementsByClassName("day");
  const start = document.getElementsByClassName("start");
  const end = document.getElementsByClassName("end");

  const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  for (let i = 2022; i > 1900; i--) {
    let option = document.createElement("option");
    let text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${year}`);

    year.appendChild(option);  
  }

  for (let i = 0; i < 12; i++) {
    let option = document.createElement("option");
    let text = document.createTextNode(`${monthsArr[i]}`);
    option.appendChild(text);
    option.setAttribute("value", `${monthsArr[i]}`);

    month.appendChild(option);  
  }

  for (let i = 1; i < 32; i++) {
    let option = document.createElement("option");
    let text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${i}`);

    day.appendChild(option);  
  }

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j+=3) {
      let option = document.createElement("option");
      let text = document.createTextNode(`${i}:${j}0`);
      option.appendChild(text);
      option.setAttribute("value", `${i}`);

      start.appendChild(option);   
    }
  }

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 4; j+=3) {
      let option = document.createElement("option");
      let text = document.createTextNode(`${i}:${j}0`);
      option.appendChild(text);
      option.setAttribute("value", `${i}`);

      end.appendChild(option);   
    }
  }
}

const termComponent = () => {
  const body = document.querySelector('body');
  const article = document.createElement("article");
  const classesArr = ["year", "month", "day", "start", "end"];

  classesArr.forEach(el => {
    const select = document.createElement("select");
    select.setAttribute("class", el);

    article.appendChild(select);
  });
  
  body.appendChild(article);
  addContent();
}

termComponent();

const body = document.querySelector('body');

let addBtn = document.createElement("button");
let text = document.createTextNode('Dodaj još jedan termin');
addBtn.setAttribute("id", "btn");
addBtn.appendChild(text);
body.appendChild(addBtn);   


document.querySelector("#btn").addEventListener('click', () => {
  console.log('click');
})
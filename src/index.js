import './style.scss';

let number = 1;

const addContent = (data) => {
  const year = document.getElementsByClassName("year");
  const month = document.getElementsByClassName("month");
  const day = document.getElementsByClassName("day");
  const start = document.getElementsByClassName("start");
  const end = document.getElementsByClassName("end");

  for (let i = 2022; i > 1900; i--) {
    const option = document.createElement("option");
    const text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${i}`);

    for (let item of year) {
      item.appendChild(option)
    }
  }

  for (let i = 1; i < 13; i++) {
    const option = document.createElement("option");
    const text = document.createTextNode(`${i}`);
    option.appendChild(text);
    option.setAttribute("value", `${i}`);

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
      option.setAttribute("value", `${i}:${j}0`);

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
      option.setAttribute("value", `${i}:${j}0`);

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

    setTimeout(() => {
      addContent();
      selectListener();
    });
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

const selectListener = () => {
  let year = 2022;
  let month = 1;
  let day = 1;
  let start = '00:00';
  let end = '00:00';

  const select = document.getElementsByTagName('select');
  const selectArr = Array.from(select);

  selectArr.map(item => {
    item.addEventListener('change', e => {
      switch (e.target.className) {
        case "year":
          year = e.target.value;
          break;
        case "month":
          month = e.target.value;
          break;
        case "day":
          day = e.target.value;
          break;
        case "start":
          start = e.target.value;
          break;
        case "end":
          end = e.target.value;
          break;
      }

      const monthStr = month.toString();
      monthStr.length > 1 ? month = monthStr : month = `0${parseInt(monthStr)}`;

      let terms;
      fetch(`data/${year}-${month}-${day}.json`)
        .then(res => res.json())
        .then(data => terms = data);
      
      setTimeout(() => {
        let date = `${day}.${month}.${year}`
        let termsObj = terms.data[date];
        let data = termsObj[0];

        console.log(date);

        setTimeout(() => {
          const start = document.querySelector('.start');
          const end = document.querySelector('.end');

          const startArr = Array.from(start.options);
          const endArr = Array.from(end.options);

          startArr.map(el => {
            let item = el;
            data.map(el => {
              el === item.value ? item.innerHTML = `${el} - zauzeto` : '';
              el === item.value ? item.disabled = true : '';
            })
          });

          endArr.map(el => {
            let item = el;
            data.map(el => {
              el === item.value ? item.innerHTML = `${el} - zauzeto` : '';
              el === item.value ? item.disabled = true : '';
            })
          });
        })
      },100)
    }
    )
  })
}

window.onload = function () {
  selectListener();
}
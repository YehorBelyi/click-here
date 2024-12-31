let clicks = 0;
const MAX_CLICKS = 50;

const hereButton = document.querySelector(".content button");
const clicksInfo = document.querySelector("#clicks");

clicksInfo.innerHTML = `${clicks}/${MAX_CLICKS}`;

// Основная логика кликов
hereButton.addEventListener('click', e => {
    if (clicks < MAX_CLICKS) {
        clicks++;
        clicksInfo.innerHTML = `${clicks}/${MAX_CLICKS}`;
    }
    if (clicks === MAX_CLICKS) {
        hereButton.setAttribute("disabled", "true");

        setTimeout(executePart, 3000);
    }
});

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const parts = [
    () => {
        const container = document.querySelector(".container");
        const body = document.querySelector("body");
        body.style.backgroundImage = "url('back.jpg')";
        container.innerHTML = `
        <div class="congrats">
            <h1>Виольчик!! поздравляю тебя с новым годом!</h1>
        </div>
        <div class="treeImg">
            <img src="new-year-tree.png" alt="Елочка">
        </div>
        <div class="nxtBtn">
            <button id="next">Сюда</button>
        </div>
        <div class="sound">
            <audio controls autoplay loop>
                <source src="Jingle Bell Rock.mp3" type="audio/mpeg">
            </audio>
        </div>`;
    },
    () => {
        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".congrats"));
        container.removeChild(document.querySelector(".treeImg"));

        const newContainer = document.createElement("div");
        newContainer.classList.add("new-congrats");
        newContainer.innerHTML = `<h2>Ты любишь работать, и всегда тратишь много усилий на это<br>В этом году ты попробовала себя в разных сферах</h2>
        <h3>И это очень важно, потому что в жизни понадобиться все</h3>
        <p>А так-же, ты нашла то, что тебе приносит удовольствие, а именно менеджмент проектов</p>`;
        container.prepend(newContainer);
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h2>Так-же, этот год выдался для тебя очень насыщенным<br>в плане путешествий</h2>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="images">
        <h1>Ты побывала в:</h1>
        <div class="item">
        <img src="Screenshot_1.png" alt=""></img>
        <h2>В Румынии</h2>
        </div>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="images">
        <div class="item">
        <img src="Screenshot_2.png" alt=""></img>
        <h2>Во Львове</h2>
        </div>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="images">
        <div class="item">
        <img src="images.jpg" alt=""></img>
        <h2>В Германии</h2>
        </div>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>упс, не та фотка</h1>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="images">
        <div class="item">
        <img src="Screenshot_3.png" alt=""></img>
        </div>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>Какие плюсы от этого?</h1>
        <div class="list">
        <ul>
            <li>ты побывала за границей</li>
            <li>нашла новые знакомства</li>
            <li>нашла для себя открытия и сделала определенные выводы</li>
        </ul>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>минусы?</h1>
        <div class="list">
        <ul>
            <li>мало путешествий, надо больше</li>
            <li>ты все еще не долларовый миллионер</li>
        </ul>
        </div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>вообщем, хочу тебе пожелать</h1>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="text1">чтобы новый год был не менее<br>насыщенным чем прошлый</div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="text2">не болеть!!! запрещаю</div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="text3">так-же, чтобы все к чему ты стремишься,<br>все что ты планируешь,<br>обязательно сбылось в новом году</div>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h2>иииииии......</h2>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<div class="text4">
        <div class="new-year-img"><img src="new.png" alt=""></img></div>
        <span id="thanks">спасибо тебе за этот год :)</span>
        <br>дальше - больше, увидимся в новом году!!
        </div>`;
        const gameItem = $("#thanks");
        setInterval(() => {
            gameItem.each(function () {
                $(this).css("color", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                $(this).css("color", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                $(this).css("color", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
                $(this).css("color", `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
            });
        }, 400);

    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>тут дальше ничего нет</h1>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>правда ничего нет</h1>`;
    },
    () => {
        const newContainer = document.querySelector(".new-congrats");
        newContainer.innerHTML = `<h1>...</h1>`;
    },
    () => {
        window.location.reload();
    }
];

let currentPartIndex = 0;

const executePart = () => {
    if (currentPartIndex < parts.length) {
        parts[currentPartIndex]();
        const nextButton = document.querySelector("#next");
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentPartIndex++;
                executePart();
            }, { once: true });
        }
    }
};

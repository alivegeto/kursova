const planets = [
    {
        id: 1,
        name: "Комета",
        src: "../public/cometa.png",
        description: "Льодяне небесне тіло з довгим світним хвостом, що пролітає через Сонячну систему.",
        section: "heder"

    },
    {
        id: 2,
        name: "Земля",
        src: "/public/eath.png",
        description: "Третя планета від Сонця та єдина відома, де існує життя.",
        section: "comet-section"

    },
    {
        id: 3,
        name: "Венера",
        src: "../public/venera.png",
        description: "Друга планета від Сонця, часто названа «сестрою Землі».",
        section: "eath-section"

    },
    {
        id: 4,
        name: "Марс",
        src: "../public/mars.png",
        description: "Четверта планета від Сонця, відома як «червона планета».",
        section: "venera-section"

    },
    {
        id: 5,
        name: "Меркурій",
        src: "../public/merkuriy.png",
        description: "Найближча до Сонця планета та найменша в Сонячній системі.",
        section: "mars-section"

    },
    {
        id: 6,
        name: "Нептун",
        src: "../public/neptyn.png",
        description: "Восьма й найдальша від Сонця планета, відома своїм синім кольором.",
        section: "merkuriy-section"

    },
    {
        id: 7,
        name: "Сатурн",
        src: "../public/saturn.png",
        description: "Шоста планета від Сонця, славиться своїми кільцями з льоду та каміння.",
        section: "neptyn-section"

    },
    {
        id: 8,
        name: "Сонце",
        src: "../public/sun.png",
        description: "Зірка в центрі Сонячної системи, джерело світла та тепла для всіх планет.",
        section: "saturn-section"

    },
    {
        id: 9,
        name: "Уран",
        src: "../public/uran.png",
        description: "Сьома планета від Сонця, має блакитно-зелений відтінок через метан в атмосфері.",
        section:"sun-section"

    },
    {
        id: 10,
        name: "Юпітер",
        src: "../public/upiter.png",
        description: "Найбільша планета Сонячної системи з потужними штормами, як Велика червона пляма.",
        section: "uran-section"

    },
];
const container = document.getElementById("cards-container");

planets.forEach((planet) => {
    console.log('hello')
    const card = document.createElement("div");
    card.addEventListener("click", event => {
        window.location.href = `News.html#${planet.section}`;
    })
    card.classList.add(`card`);

    const img = document.createElement("div");
    img.style.backgroundImage = `url(${planet.src})`;
    img.classList.add("image-in__container");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = planet.name;

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = planet.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    container.appendChild(card);
});

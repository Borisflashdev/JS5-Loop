const divBox = document.getElementById('div-box');

const carsList = [
    {
        image: "images/1-bmwx8.jpg",
        title: "BMW x8"
    },
    {
        image: "images/2-bmwi8.jpg",
        title: "BMW i8"
    },
    {
        image: "images/3-lamborghini.jpg",
        title: "Lamborghini"
    },
    {
        image: "images/4-jugo.jpg",
        title: "Yugo"
    },
    {
        image: "images/5-audia6.jpg",
        title: "Audi A6"
    },
    {
        image: "images/6-mercedesgclass.jpg",
        title: "Mercedes G Class"
    },
];

const elements = [];

for (let index in carsList) {
    elements.push(`
    <div class="con-box mt-3">
    <div class="border border-secondary rounded-3 title-box">${carsList[index].title}</div>
    <div class="border border-secondary img-box rounded-3"><img src="${carsList[index].image}" alt="" width="100%" height="100%"></div>
    </div>
    `);
}

divBox.innerHTML = elements;
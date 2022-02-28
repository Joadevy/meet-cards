const containerData = document.querySelector('.data');
const btnPrevious = document.getElementById('previous');
const btnRandom = document.getElementById('random');
const btnNext = document.getElementById('next');
let index = 0;

btnNext.addEventListener('click', () => {
    changePerson ('next');
})

btnPrevious.addEventListener('click', () => {
    changePerson ('previous');
})

btnRandom.addEventListener('click', () => {
    let newIndex;
    do {
        newIndex = Math.round(Math.random()*6);
    } while (newIndex == index);
    index = newIndex;
    showInfo(index);
})


// Gets the information from the JSON using a fetch request.
const getInfo = async() => {
    try {
        let request = await fetch('data/information.json'); // Accesing to the returned info of the fetch.
        let result = await request.json(); // Transforming the returned info of the fetch into JSON and accesing to the data.
        return result
    } catch (error) {
        console.log(error);
    }
}

const showInfo = async(index) => {
    let info = await getInfo();
    let personalData;
    personalData = info[index];
    createCard(personalData)
}

const createCard = (info) => {
    let card = `<div class="img-person">
                    <img src="${info.url}" alt="person name">
                </div>
                <h2 class"name">${info.name}</h2>
                <h3 class='role'>${info.role}</h3>
                <p class="description">${info.text}</p>`;
    containerData.innerHTML = card;
}

const changePerson = (button) => {
    if (button === 'next') {
        index++;
        if (index == 7) {
            index = 0;
        }
    } else if (button === 'previous') {
        index--;
        if (index == -1) {
            index = 6;
        }
    }
    showInfo(index);
}

showInfo(index);



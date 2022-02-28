const containerData = document.querySelector('.data');
const btnPrevious = document.getElementById('previous');
const btnRandom = document.getElementById('random');
const btnNext = document.getElementById('next');

const getInfo = async(role) => {
    try {
        let request = await fetch('data/information.json');
        let result = await request.json();
        for (let data in result){
            if (result[data].role == role) {
                return result[data];
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const showInfo = async(role) => {
    let info = await getInfo(role);
    createCard(info)
    //printInfo(info.url,info.text);
}

showInfo('ceo');
/* const printInfo = (url,text) => {
    const image = containerData.firstElementChild.firstElementChild;
    const paragraph = containerData.lastElementChild;
    image.src = url;
    paragraph.textContent = text; */
//}

const createCard = (info) => {
    let card = `<div class="img-person">
                    <img src="${info.url}" alt="person name">
                </div>
                <p class="description">${info.text}</p>`;
    containerData.innerHTML = card;
}



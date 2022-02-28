const getInfo = async(role) => {
    try {
    let request = await fetch('data/information.json')
    let result = await request.json();
    for (let data in result){
        if (result[data].role == role) {
            return result[data];
        }
    }
   /*  
    .then (response => response.json())
    .then (data => {
        for (let element in data) {
            if(data[element].role == role){
                return data[element];
            };
        }
    }) */
    } catch (error) {
        console.log(error);
    }
}

const showInfo = async() => {
    let ceo = await getInfo('ceo');
    console.table(ceo);
}

showInfo();

/* 
No se puede asi, es una operacion asincrona XD
let ceo = getInfo('ceo');
console.log(typeof ceo); */

const btn1 = document.getElementById('btn');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const span = document.getElementById('span')


btn1.addEventListener('click', ()=>{
    let hash = '#';
    for(let i = 0; i < 6; i++){
        hash += hex[getRandomNumbers()];
    }

    document.body.style.backgroundColor = hash;
    span.textContent = hash
})

function getRandomNumbers(){
    return Math.floor(Math.random() * hex.length)
}
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let somas = []

function dados() {
    const valorUm = Math.floor(1+6*Math.random() )
    const valorDois = Math.floor(1+6*Math.random() )
    let total = valorUm+valorDois
    
    return total
}

function contagem() {
    for (let i = 1; i <= 1000; i++){
        somas.push(dados())
    }

    for (let j = 0; j < somas.length; j++){
        for (let index = 2; index <=12; index++) {
            if (index == somas[j]) {
                count[index] = count[index] + 1 
            }
        }
    }
}

function lancar() {
    contagem()
    const resp = document.getElementById('resp')

    for (let x = 2; x < count.length; x++) {
        const span = document.createElement('span');
        span.style.padding = '10px'
        span.style.border = '1px solid white'
        const textContent = `${x}: ${count[x]} `;
        span.innerText = textContent;
        resp.appendChild(span);
    }

    resp.innerText = total
}



const botao = document.getElementById('rolar')
 
botao.addEventListener('click', lancar)


// grafico
// const graf = document.getElementById('col')
// const col = document.createElement('div')

// col.style.width = '50px'
// col.style.height = '${'
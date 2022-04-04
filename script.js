corClass = 'color-Amarelo';

document.querySelector('.post-it').addEventListener('dragstart', dragstart);
document.querySelector('.post-it').addEventListener('dragend', dragend);

document.querySelectorAll('.cores').forEach(cores =>{
    cores.addEventListener('click', (item)=>{

        elemento = document.querySelector('.blocks textarea');
        cor = item.target.classList[0];
        corClass = cor;
        console.log(cor);
        limpar();
        elemento.classList.add(cor);        
    });
});

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragover);
    area.addEventListener('dragleave', dragleave);
    area.addEventListener('drop', drop);
});


function dragstart(e){
    console.log("ok")
    e.currentTarget.classList.add('dragging');
}

function dragend(e){
    e.currentTarget.classList.remove('dragging');
}

function dragover(e){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
}

function dragleave(e){
    e.currentTarget.classList.remove('hover');
}

function drop(e){
        elemento = document.querySelector('.blocks textarea');
        console.log(elemento);        
        let x = document.querySelector('.dragging');
        console.log(x);
        e.currentTarget.appendChild(x);
        e.currentTarget.classList.remove('hover');
        testar();
}

function testar(){
    let text = document.querySelector('.blocks').innerHTML += `<textarea name="" class="post-it ${corClass}" cols="30" rows="10" draggable="true"></textarea>`;
    document.querySelectorAll('.post-it').forEach(postado =>{
        postado.addEventListener('dragstart', dragstart);
        postado.addEventListener('dragend', dragend);
    });
    document.querySelectorAll('.cores').forEach(cores =>{
        cores.addEventListener('click', (item)=>{
    
            elemento = document.querySelector('.blocks textarea');
            cor = item.target.classList[0];
            corClass = cor;
            console.log(cor);
            limpar();
            elemento.classList.add(cor);        
        });
    });
}

function limpar(){
    document.querySelector('.blocks textarea').classList.remove('color-azul');
    document.querySelector('.blocks textarea').classList.remove('color-Amarelo');
    document.querySelector('.blocks textarea').classList.remove('color-verde');
    document.querySelector('.blocks textarea').classList.remove('color-rosa');
}

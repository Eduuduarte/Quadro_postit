document.querySelector('.post-it').addEventListener('dragstart', dragstart);
document.querySelector('.post-it').addEventListener('dragend', dragend);

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
        let x = document.querySelector('.dragging');
        e.currentTarget.appendChild(x);
        e.currentTarget.classList.remove('hover');
        testar();
}

function testar(){
    let text = document.querySelector('.blocks').innerHTML = '<textarea name="" class="post-it" cols="30" rows="10" draggable="true"></textarea>';
    document.querySelectorAll('.post-it').forEach(postado =>{
        postado.addEventListener('dragstart', dragstart);
        postado.addEventListener('dragend', dragend);
    });
    
}

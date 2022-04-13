# Task Frame (Quadro de tarefas)

![Post-It](image/post-its.jpeg)


<h4 align="center">
✏️ Readme it is in development...✏️
</h4>

<p>

* [About](#About)
* [TheProject](#the-project)

</p>



### About
<p>This project illustrate a task frame with post-it. The user can dragging the object post-it to area "to do", "doing" and "done".</p>

### The Project

##### HTML
~~~html
<textarea name="" class="post-it color-Amarelo" cols="30" rows="10" draggable="true"></textarea>
~~~

##### Javascript
~~~javascript
document.querySelector('.post-it').addEventListener('dragstart', dragstart);
document.querySelector('.post-it').addEventListener('dragend', dragend);

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragover);
    area.addEventListener('dragleave', dragleave);
    area.addEventListener('drop', drop);
});
~~~

In the events "dragstart" and "dragend", you can adding class to follow the movement.
For example:

##### Javascript
~~~javascript
function dragstart(e){
    e.currentTarget.classList.add('dragging');
}

function dragend(e){
    e.currentTarget.classList.remove('dragging');
}
});
~~~

The event "dragover" it is when the object it is over the area.

##### Javascript
~~~javascript
function dragover(e){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
}
~~~

The event "dragleave" it is when the object leave the area.
##### Javascript
~~~javascript
function dragleave(e){
    e.currentTarget.classList.remove('hover');
}
~~~

The event "drop" it is when the object it was loose in the area.

##### Javascript
~~~javascript
function drop(e){
        elemento = document.querySelector('.blocks textarea');
        console.log(elemento);        
        let x = document.querySelector('.dragging');
        console.log(x);
        e.currentTarget.appendChild(x);
        e.currentTarget.classList.remove('hover');
        testar();
}
~~~
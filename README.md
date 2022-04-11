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
~~~
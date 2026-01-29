const todoList=[];

const todoListWithDate=[];

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name= inputElement.value;
    // console.log(name);
    todoList.push(name);
    console.log(todoList);
    inputElement.value='';
}

function addTodoLists(){
    const inputElement=document.querySelector('.js-name-input-2');
    const name=inputElement.value;
    todoList.push(name);
    inputElement.value='';
    renderTodoList();
}
renderTodoList();
function renderTodoList(){
    let todoListHTML='';
    for(let i=0; i<todoList.length;i++){
        const todo =todoList[i];
        const html=`
        <p>
        ${todo}
        </p>`;
        todoListHTML+=html;
    }
    // console.log(todoListHTML);
    document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
}

function addTodoListWithDate(){
    const inputElement=document.querySelector('.js-list-input');
    const name=inputElement.value;
    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value
    todoListWithDate.push({
        name,
        dueDate //shorthand prpoperty
    });
    inputElement.value='';
    renderTodoListWithDate();
}
renderTodoListWithDate();
function renderTodoListWithDate(){
    let todoListHTML='';
    for(let i=0;i< todoListWithDate.length; i++){
        const todoObject=todoListWithDate[i];
        // const name=todoObject.name;
        // const dueDate=todoObject.dueDate;
        const {name , dueDate}=todoObject;  //destrucure in object
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
         todoListWithDate.splice(${i},1);
         renderTodoListWithDate();   
        " class="js-delete-button">Delete</button>
        `;
         todoListHTML+=html;
    }
    // console.log(todoListHTML);
    document.querySelector('.js-list-with-date')
    .innerHTML=todoListHTML;
}
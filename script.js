const textBox = document.querySelector(".main-input-text");
const todoListNotice = document.querySelector(".main-ul-todolist");
const Template = document.querySelector("template");

textBox.addEventListener("keypress",function(e){
    if(e.keyCode == 13)
    {
        Add();
    }
});

function Add(){
    let TodoList = document.importNode(Template.content,true);
    let spanElement = TodoList.querySelectorAll("span");
    if(textBox.value == ""){
        alert("Todo 内容を入力してください。");
        return;
    }
    spanElement[0].textContent = textBox.value;
    todoListNotice.append(TodoList);
    textBox.value="";
}



todoListNotice.addEventListener("click",function(e){
    if(e.target.className != "span-list-object"){
        return;
    }else if(e.target.style.textDecoration != "line-through"){
        e.target.style.textDecoration = "line-through"
    }else{
        e.target.style.textDecoration = "none";
    }
});

todoListNotice.addEventListener("click",function(e){
    if(e.target.textContent != "☓"){
        return;
    }
    e.target.parentElement.remove();
});


todoListNotice.addEventListener("click",function(e){
    if(e.target.textContent != "↑"){
        return;
    }else{
        let CurrentNode = e.target.parentElement;
        let PreviousNode = CurrentNode.previousElementSibling;   
        if(PreviousNode == null){
            alert("移動できません。");
        }else{
            CurrentNode.insertAdjacentElement("afterend",PreviousNode);
        }
    }
});

todoListNotice.addEventListener("click",function(e){
    if(e.target.textContent != "↓"){
        return;
    }else{
        let CurrentNode = e.target.parentElement;
        let NextNode = CurrentNode.nextElementSibling;   
        if(NextNode == null){
            alert("移動できません。");
        }else{
            CurrentNode.insertAdjacentElement("beforebegin",NextNode);
        }
    }
});
const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

filter_todo=(todos,value)=>{
    return todos.filter((todo)=>{
        return (todo.text).includes(value)
    })
}
document.querySelector('button').addEventListener('click',(e)=>{
    document.querySelector('#todo-list').innerHTML=''
    let text_box_value=document.getElementById('inputbox').value;
    let todos_value=filter_todo(todos,text_box_value)
    todos_value.forEach((todo)=>{
        let p=document.createElement('p')
        p.textContent=todo.text;
        document.querySelector('#todo-list').appendChild(p)
    })
    
})
//console.log(filter_todo(todos,'food'))
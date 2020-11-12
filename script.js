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

todos.forEach((todo) => {
    let p=document.createElement('p')
    p.textContent=todo.text
    document.querySelector('#todo-list').appendChild(p)
})

filter_todo = (todos, value) => {
    return todos.filter((todo) => {
        return (todo.text).includes(value)
    })
}

document.querySelector('#inputbox').addEventListener('input',(e)=>{
    document.querySelector('#todo-list').innerHTML='';
    (filter_todo(todos,e.target.value)).forEach((todo)=>{
        let p=document.createElement('p')
        p.textContent=todo.text;
        document.querySelector('#todo-list').appendChild(p)
    })
})
//console.log(filter_todo(todos,'food'))
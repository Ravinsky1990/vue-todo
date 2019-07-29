export const select = (todosArr, {text, done, undone, asc, desc}) =>{
    let output = todosArr.filter((todo)=>{
        return todo.title.toLowerCase().includes(text.toLowerCase()) 
    });
    if(done){
        output = output.filter((todo)=>{
            return todo.done === true
        })
    }else if(undone){
        output = output.filter((todo)=>{
            return todo.done === false
        })
    }

    if(asc){
        output = output.sort((a, b)=>{
            return a.priority - b.priority
        })
    }else if(desc){
        output = output.sort((a, b)=>{
            return b.priority - a.priority
        })
    }

    return [...output]
}
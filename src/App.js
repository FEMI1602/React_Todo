import axios from 'axios'
import {useState} from 'react'
import './App.css'


function App() {
  const[todos,setTodos]=useState([])
  const[todo,setTodo]=useState('')
  const deleteTodo = (id) => {
    let newTodos = todos;
    newTodos = newTodos.filter(todoItem => todoItem.id !== id);
    setTodos(newTodos)
}
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos,{id: Date.now(),text:todo, status:false}])} className="fas fa-plus"></i>
        
      </div>
      <div className="todos">
       { todos.map((obj)=>{
         return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(todos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))

            }

            } 
            value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i onClick={()=>setTodos([])} className="fas fa-times"></i>
          </div>
        </div>  )
          
       })
        }
        {todos.map((obj)=>{
            if(obj.status){
              return(<h3>{obj.text}</h3>)
            }
            return null
        })}
      </div>
    </div>
  );
}

export default App;

// MOUNTING :Load new component
// UPDATING  value maatta
// UNMOUNTING component poova

// function Hello(){
//   return (  <h1 className='hello'>Hello, Welocme to React</h1>)
// }

// const arr=[1,2,3,4]
// const[j,k,l,m]=arr
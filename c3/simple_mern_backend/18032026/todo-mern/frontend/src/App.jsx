import {useState,useEffect} from "react";
  import axios from "axios";
  function App(){
    const[todos ,setTodos]=useState([]);
    const[title,setTitle]=useState("");
    const[editId,setEditId]=useState(null);
    const API="http://localhost:5000/api/todos";
    const fetchTodos=async()=>{
      const res=await axios.get(API);
      setTodos(res.data);
    };
    useEffect(()=>{ fetchTodos();},[]);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(editId){
      await axios.put('${API}/${edited}',{title});
      setEditId(null);
    }setTitle("");
      fetchTodos();
  };
  const handleEdit=(todo)=>{
    setTitle(todo.title);
    setEditId(todo._id);
  };
 const handleDelete = async (id) => {
  await axios.delete(`${API}/${id}`);
  fetchTodos();
};

return (
  <div>
    <h1>Todo App</h1>

    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>{editId ? "Update" : "Add"}</button>
    </form>

    {todos.map((t) => (
      <div key={t._id}>
        {t.title}
        <button onClick={() => handleEdit(t)}>Edit</button>
        <button onClick={() => handleDelete(t._id)}>Delete</button>
      </div>
    ))}
  </div>
);


export default App;

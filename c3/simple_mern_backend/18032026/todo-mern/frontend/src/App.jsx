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
      await axios.put()
    }
  }

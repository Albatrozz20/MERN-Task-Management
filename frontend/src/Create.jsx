import { useState } from 'react';
import './App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Submit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3001/create", {title, description}).then(result => {console.log(result);
      navigate("/");
    }).catch(err => console.log(err))
  }

  return (
    <div>
    <h4 className="text-center mb-4 bg-primary text-white p-3">Create Your Task</h4>
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={Submit}>
        <div className="d-flex inputs gap-2">
          <input className="" type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
          <input className=""type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}} />
        </div>
        <br />
        <div className="submitBtn d-flex justify-content-center align-items-center">
            <button className="btn btn-success">Submit</button>
          </div>
      </form>
    </div>
    </div>
  )
}

export default Create
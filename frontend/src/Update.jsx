import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:3001/getTask/' + id)
      .then( result => {console.log(result)
        setTitle(result.data.title);
        setDescription(result.data.description);
      })
      .catch((err) => {console.log(err)});
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/update/"+id, {title, description})
      .then(result =>{
        console.log(result);
        navigate('/');
    }).catch( err => console.log(err) );
  }

  return (
    <div>
      <h4 className="text-center mb-4 bg-primary text-white p-3">
        Update Your Task
      </h4>
      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={Update}>
          <div className="d-flex inputs gap-2">
            <input className="" type="text" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <input className="" type="text" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
          </div>
          <br />
          <div className="submitBtn d-flex justify-content-center align-items-center">
            <button className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;

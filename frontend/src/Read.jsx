import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css'
const Read = () => {
    const [data, setData] = useState([{title: "", desc: ""}]);
    useEffect(()=>{
        axios.get("http://localhost:3001/read").then((result)=>{
            setData(result.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])

    const Delete = (id) => {
        axios.delete('http://localhost:3001/deleteTask/'+id).then(result=> {console.log(result)
            const confirmDelete = window.confirm("Do you want to delete this task?");
            if (confirmDelete) {
                axios.delete('http://localhost:3001/deleteTask/'+id)
                    .then(result => {
                        console.log(result);
                        window.location.reload();
                    })
                    .catch(err => console.log(err));
            }
            return;
        }).catch(err=> console.log(err))
    }
  return (
    <div>
        <h4 className="text-center mb-4 bg-primary text-white p-3">Your Task to be done</h4>
        <div className="container d-flex align-items-center justify-content-center"><Link className="addBtn btn btn-success mb-3" to='/create'>Create +</Link></div>
        <div className="container d-flex flex-column gap-3 justify-content-center align-items-center">
            {
                data.map((item) =>{
                    return (
                            <div className="card d-flex flex-row py-2 px-4 gap-2 align-items-center justify-content-center" key={item.id}>
                            <h3>{item.title}</h3>
                            <h5><i>{item.description}</i></h5>
                            <div className="buttons d-flex justify-content-center align-items-center gap-1">
                            <Link className="addBtn btn btn-primary" to={`/update/${item._id}`}>Edit</Link>
                                <button className="btn btn-danger" onClick={()=> Delete(item._id)}>Delete</button>
                            </div>
                            </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Read
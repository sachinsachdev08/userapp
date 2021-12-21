import React , {  useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./homepage.css";


export default function Homepage(){
    const [users , setUsers] = useState([]);
    const baseUrl = "https://reqres.in/api/users";
    useEffect(()=>{
        axios.get(baseUrl)
        .then(res=>setUsers(res.data.data),()=>{console.log('Promise Got Rejected');})
    },[])
    return(
        <>
            <div className="flexbox">
                {
                    users.map((user)=>(
                        <div className="user-container">
                            <NavLink to={`/users/${user.id}`}>
                                <img className="user-avatar" src={user.avatar} alt="Avatar"/>
                            </NavLink>
                            <p className="username">{user.first_name}</p>
                        </div>
                    ))
                }
            </div>

            <NavLink to="/users/add">Add New User</NavLink>
        </>
    )
}

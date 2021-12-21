import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./userprofile.css"

function UserProfile(props){
    const [user,setUser] = useState([]);
    const [addjobinput , setaddjobinput] = useState(false);
    const [ addjob , setAddjob ] = useState("")
    const { match } = props;
    const id = match.params.id;

    function handleInput(e){
        setAddjob(e.target.value)
    }

    function editProfile(){
        const userAlert = user.filter(value=>value.id===+id);
        axios.put(`https://reqres.in/api/users/${id}`)
        .then(res=>alert(`Name : ${userAlert[0]['first_name']}
    Updated At : ${res.data.updatedAt}`));
    }


    function handleInputField(){
        setaddjobinput(!addjobinput);
        console.log(addjobinput);
    }
    useEffect(()=>{
        axios.get("https://reqres.in/api/users")
        .then(res=>setUser(res.data.data))
    },[])

    function updateJob(e){
        e.preventDefault();
        const userJob = user.filter(value=>value.id===+id);
        console.log(userJob)
        userJob[0]['job'] = addjob;
        setAddjob("")
    }
        return(
        <div className="profile-main">
            <p>User Profile</p>
            <p>
                {
                    user.filter(value=>value.id===+id).map((user1)=>(
                        <>
                            <img className="profile-avatar" src={user1.avatar} alt=""/>
                            <p className="profile-desp"> <span>First Name :</span> {user1.first_name} </p>
                            <p className="profile-desp"> <span>Last Name :</span> {user1.last_name} </p>
                            <p className="profile-desp"> <span>Email :</span> {user1.email} </p>
                            <p className="profile-desp"> <span>Job :</span> {user1.job} </p>

                            {
                                (addjobinput) && (
                                    <>
                                    <input value={addjob} name="job" type="text" onChange={handleInput} /><br/>
                                    <button onClick={updateJob}>Update</button><br/>
                                    </>
                                )
                            }

                            <button onClick={handleInputField}>Add Job</button><br/>
                            <button onClick={editProfile}>Edit Profile</button>
                        </>
                    ))
                }
            </p>

        </div>
    )
}

export default withRouter(UserProfile);
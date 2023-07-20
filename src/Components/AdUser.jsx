import React, { useState } from 'react'
import {connect} from 'react-redux'
import {AddUser} from '../Config/Store/Action/User'
function SignUp(props) {
    console.log(props)
    let [user,setuser]=useState({
        email:'',
        password:''
    })
    const HandleEmail=(e)=>{
setuser({...user, [e.target.name]:e.target.value})
    }
    const HandlePassword=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
    }
    const submit=()=>
    {
        console.log(user)
props.addUser(user)
    }
  return (
    <div>
      <input type="text" name="email" id="" onChange={HandleEmail} />
      <input type="text" name="password" id="" onChange={HandlePassword} />
      <button onClick={submit}>
        Add User
      </button>

      {
props.AllUsers.map((v,i)=>{
    return<>
    <h2>
       Email: {v.email}
    </h2>
    <h2>
        Password :{v.password}
    </h2>
    </>
})
      }
    </div>
  )
}
const mapToStateProps=(state)=>({
    AllUsers:state.AllUsers
})
const mapToDispatchProps=(dispatch)=>({
addUser:(data)=>dispatch(AddUser(data))
})

export default connect(mapToStateProps,mapToDispatchProps)(SignUp)

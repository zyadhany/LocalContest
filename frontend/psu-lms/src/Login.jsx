import React from 'react'
import './Login.css'
import { useState, useContext } from 'react'
import { AppContext } from './App'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  // const { updateData } = useContext(AppContext);
  // const [inputValue, setInputValue] = useState(1);
  const[userName, setUserName] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();
  let state = false;
  let user = {userName, password, state};
  const {id} = 1;
  
  const login = () => {
    // event.preventDefault();
    console.warn(userName +' '+ password);

    // var email = useremail;
    // var password = userpassword;

    let item = {userName, password};
    console.log(item);
    
    if(userName === "Ibrahimadel" && password === "123456"){
      user.state = true;
      navigate('/contest/${id}', { state: { user } });
    }
    else{
      alert("Invalid username or password");
    }

    // fetch("http://localhost:8000/api/userloginn",{
    //     method:"POST",
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //     },
    //     body: JSON.stringify(item)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // console.log(data.message);
    //     // console.log(data.token.id);
    //     // console.log(data.token.name);
    //     // console.log(data.token.email);
    //     console.log(data);
    //     if(data.token){
    //         url=url+data.token.id;
    //         // console.log(url);
    //         // this.history.push("/dashbord");
    //         navigate(url);
    //     }
    //     else{
    //         alert(data.data);
    //     }
    // 
    // })
  };

  // const toggleNavbar = () => {
  //   updateData(inputValue);
  // };

  // const up = () => {
  //   setInputValue(inputValue+1);
  //   toggleNavbar();
  // };

  // console.log();

  return (
    <>
      <section>
        <div className='login-form-parent'>
            <form>
                <div className='form-field'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                <div className='form-field'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {/* <hr/> */}
                <div className='submit-button' onClick={login}>Login</div>
            </form>
        </div>
      </section>
    </>
  )
}

export default Login

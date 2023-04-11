import React from 'react'
import { useState } from 'react';
import '../css/Login.css'
import { Link, useNavigate } from 'react-router-dom';



function SignupS() {
    const [name, setName] = useState("");
    const [photoURl, setphotoURL] = useState("");
    const [email, setEmaill] = useState("")
    const [password, setPaasword] = useState("");
    const navigate = useNavigate();


    const register = (e) => {

        e.preventDefault();

        let namePattern = /^[A-Za-z]/;
        let passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/




        if (!name) {
            return alert("Name is required")

        } else {
            if (!name.match(namePattern)) {
                alert("Invalide name")
            } else {
                localStorage.setItem("name", name)
            }

        }

     



        if (!email) {
            return alert("email is required")
        } else {
            localStorage.setItem("email", email)
        }


    


    if (!password) {
        return alert("password is required")
    } else {
        if (password.match(passwordPattern)) {
            alert("Invalide password")
        } else {
            localStorage.setItem("password", password)

        }

    }



    alert("Registered successfully")

    // }  else {
    //     alert("Invalide Credantial..")
    // }

    navigate("/")

    setName(" ");
    setphotoURL("");
    setEmaill("");
    setPaasword("");
}








return (




    <div className='login'>

        <div className='loginScreen'>
            <img
                src='https://www.freeiconspng.com/uploads/linkedin-9.png'
                alt='linked in'
            />

            <form onSubmit={register}>
                <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Profile picture URL" value={photoURl} onChange={e => setphotoURL(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmaill(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={e => setPaasword(e.target.value)} />
                <input type="submit" value="sign Up" />
                <h4>Already a member?  <span><Link to="/">Login Here</Link></span></h4>
            </form>


        </div>
    </div>

)




}

export default SignupS
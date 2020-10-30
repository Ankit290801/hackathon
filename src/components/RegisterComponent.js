import React,{useState} from 'react';
import fire from './fire';

export default function RegisterComponent() {
    
const [name,newName]=useState('');
const [email,newEmail]=useState('');
const [password,newPassword]=useState('');
const [Cpassword,newCPassword]=useState('');


 const handlesubmit=e=>{
     e.preventDefault();
    console.log(name + password + Cpassword + email);
    fire.auth().createUserWithEmailAndPassword(email,password).then(cred=>{
        console.log(cred);
    })

}

    return (
        <div>
             <div className="text-center">
                    <h1>Registration Form</h1>
                    <p>Guidance to shape your future</p>
                </div>

                <form onSubmit={handlesubmit}>
                    <label>Name</label>
                    <input type="text" 
                    placeholder="Enter Full Name"
                    value={name}
                    onChange={e=>newName(e.target.value)}
                    />

                    <label>Email</label>
                    <input type="text" placeholder="Email Id"
                     value={email}
                     onChange={e=>newEmail(e.target.value)}/>

                    <label>Create Password</label>
                    <input type="password" placeholder="New Password"
                     value={password}
                     onChange={e=>newPassword(e.target.value)}/>

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"
                     value={Cpassword}
                     onChange={e=>newCPassword(e.target.value)}/>

                   


                    <input type="submit" value="Submit" />
                </form>
        </div>
    )
}

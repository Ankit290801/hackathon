import React,{useState} from 'react';
import fire from './fire';
import {Card} from 'reactstrap';

import { Button,Form, Label, Input, FormGroup, FormControl } from 'reactstrap';

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
             <div className="text-center container">
                    <h1>Registration Form</h1>
                    <p>Guidance to shape your future</p>
                </div>
                <Card className="card">
                <form onSubmit={handlesubmit}>
                    <label className="mr-2 ml-2 mb-4">First Name</label>
                    <input type="text"
                    placeholder="Enter First Name"
                    value={name}
                    onChange={e=>newName(e.target.value)}
                    />
                     <br />
                     <label className="mr-2 ml-2 mb-4">Last Name</label>
                    <input type="text"
                    placeholder="Enter Last Name"
                    value={name}
                    onChange={e=>newName(e.target.value)}
                    />
                  
                    <Input type="select">
                    <option>Area Of Interest</option>
                    <option>Android Dev</option>
                    <option>Machine Learning</option>
                    <option>web Dev</option>
                    </Input>
                    <br/>
                    <Input type="select">
                    <option>what are you registering as ?</option>
                    <option>student</option>
                    <option>teacher</option>
                    <option>other</option>
                    </Input>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Email</label>
                    <input type="text" placeholder="Email Id"
                     value={email}
                     onChange={e=>newEmail(e.target.value)}/>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Create Password</label>
                    <input type="password" placeholder="New Password"
                     value={password}
                     onChange={e=>newPassword(e.target.value)}/>
                    <br/>
                    <label className="mr-2 ml-2 mb-4">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"
                     value={Cpassword}
                     onChange={e=>newCPassword(e.target.value)}/>
                    <br/>
                    <label>upload resume</label>
                    <input type="file" name="upload resume" id="exampleFile" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                </Card>
        </div>
    )
}

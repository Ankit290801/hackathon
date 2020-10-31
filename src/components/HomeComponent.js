

import React,{useState} from 'react'
import fire from './fire';




export default function HomeComponent() {
    const [display,hide]=useState(false);

    function user(){
        
        fire.auth().onAuthStateChanged(user=>{
           console.log(user);
           if(user){
           hide(true);
           }else{
               hide(false);
           }
        })
    }

user();
console.log(display);
    return (
        <div className="landing">
                <div style={{display:display?'none':'block'}} className="title text-center">
                    <h1>HackYuva</h1>
                    <p><em>Learn to code, Code to Learn</em></p>
                   
                </div>
                
            </div>
    )
}

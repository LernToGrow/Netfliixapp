import React, { useState } from 'react';
import './form.css'
const App = ()=>{

    const [fullName,setFullName] = useState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        qualification: '',
    });

    const inputEvent = (event)=>{
        console.log(event.target.value)
        //setName(event.target.value);
        console.log(event.target.name)
        // const value = event.target.value;
        // const name = event.target.name;
        
        const {name,value} = event.target;
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name] : value,
            }

            // console.log(preValue)
            // if(name === "fName"){
            //     return{
            //         fName: value,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "lName"){
            //     return{
            //         fName: preValue.fName,
            //         lName: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "email"){
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: value,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "phone"){
            //     return{
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: value,
            //     };
            // }
        });

    };

    const onSubmit= (event)=>{
        event.preventDefault();
        alert('form submited');

    }
return(
    <> 
    <div className='main_div'>
    <form onSubmit={onSubmit}>
    <div>
        <h1>Hello  {fullName.fName} {fullName.lName}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <p>{fullName.qualification}</p>
        <input type="text" placeholder="Enter your Name"
            onChange={inputEvent}
            name='fName'
            value={fullName.fName}
        />    
        <input type="text" placeholder="Enter your LastName"
            onChange={inputEvent}
            name='lName'
            value={fullName.lName}
        />  
            <input type="email" placeholder="Enter your Email"
            onChange={inputEvent}
            name='email'
            value={fullName.emial}
        />  
            <input type="number" placeholder="Enter your phone number"
            onChange={inputEvent}
            name='phone'
            value={fullName.phone}
        /> 
            <input type="text" placeholder="Enter your qualification"
            onChange={inputEvent}
            name='qualification'
            value={fullName.qualification}
        />  
        <button type='submit'>Click ME</button>
        </div>
    </form>
    </div>
</>
)
}
export default App;
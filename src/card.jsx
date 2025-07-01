import {API} from "./data.jsx"
import "./card.css"
import { useState,useEffect } from "react";


function Card({name,image ,height,mass ,species, gender, homeworld, birth_year,died}) {
// __________________FILTER______________________________
// const filtername=API.filter((item)=>
//     item.name.includes("Yoda"))
// console.log(filtername);

    const [clicked , setclicked] =useState(false);  
    const [like, setlike]=useState (false) ;  
    useEffect(()=>{
        console.log("useeffect")
    },[like])

    function handleclick(){
        console.log("Card clicked:", name);
    setclicked(clicked => !clicked);
    }

//  function handlelike(){
//   setlike(like=>!like);
//  }

    let color;
{if (species=="human"){
    color="rgb(173,140,44)";
}
else if(species=="droid"){
    color="rgb(189,122,50)";}
else if(species=="twi'lek"){
    color="brown";}
else if(species=="aleena"){
    color="purple";}
else if(species=="vulptereen"){
    color="rgb(100,100,80)";}
else if(species=="xexto"){
    color="rgb(20,89,66)";}
else if(species==="dathomirian zobark"){
    color="red";}
else if(species==="toong"){
    color="rgb(128,48,111)";}
else if(species==="rodian"){
    color="rgb(130,110,111)";}
else if(species==="iridonian zabrak"){
    color="rgb(210,170,91)";}
else if(species==="cerean"){
    color="rgb(200,80,11)";}
else if(species==="nautolan"){
    color="rgb(210,190,101)";}
else if(species==="wookiee"){
    color="rgb(80,20,21)";}
else if(species==="sullustan"){
    color="rgb(170,121,101)";}
else if(species==="ewok"){
    color="rgb(10,190,101)";}
else if(species==="mon calamari"){
    color="rgb(230,10,01)";}
else if(species==="trandoshan"){
    color="rgb(20,10,101)";}
else if(species==="quermian"){
    color="rgb(10,100,201)";}
else if(species==="iktotchi"){
    color="rgb(20,55,21)";}
else if(species==="chagrian"){
    color="rgb(40,55,91)";}
else if(species==="kel dor"){
    color="rgb(220,55,21)";}
else if(species==="mirialan"){
    color="rgb(78,55,21)";}
else if(species==="toydarian"){
    color="rgb(88,10,101)";}
else if(species==="dug"){
    color="rgb(20,77,81)";}
else if(species==="hutt"){
    color="rgb(210,190,101)";}
else if(species==="kaminoan"){
    color="rgb(120,210,101)";}
else if(species==="geonosian"){
    color="rgb(150,19,71)";}
else if(species==="gungan"){
    color="rgb(150,10,101)";}
else if(species==="yoda's species"){
    color="black";}


}

    return (
        // <div id="card" className={`bg-${color}-500`}>
            <div id={!clicked? "card": "click"} style={{ backgroundColor: color }} className="p-4 rounded text-white"  
            onClick={handleclick} >
        
        <img className="bg-cover h-20 w10" src={image} alt={name}/>
        <h6 className="text-white-900 italic text-2xl">{name}</h6>
     <button className="h-4" onClick={()=>{setlike(like=>!like)
       setclicked (clicked=>!clicked)}
     }>{!like?"🤍":"🧡"}</button>
        {clicked && (
            <div className=" p-2 rounded mt-2 italic tex-1xl">
                <p>Species: {species}</p> 
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>       
                <p>Gender: {gender}</p>
                <p>Homeworld: {homeworld}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Died: {died}</p>
            </div>
        )}
    
        </div>

    );
}
export {Card};
import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import {Card} from "./card.jsx";
import {API} from "./data.jsx";
import {Search} from "./search.jsx";
import {Header} from "./header.jsx";
import {Filter} from "./filter.jsx";


function App(){
  
const[searchTerm, setsearchTerm]=useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedhome, setSelectedhome] = useState("");

  const filteredCharacters = API.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = selectedSpecies ? item.species === selectedSpecies : true;
    const matcheshome = selectedhome ? item.homeworld === selectedhome : true;
    return matchesSearch && matchesSpecies && matcheshome;
  });


const filteredname = API.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
);
    return (
     <>
                <div id="container" className="bg-amber-100 min-h-screen flex items-center flex-col">

        <Header/>
                
    <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/> 
    {/* <Filter searchTerm={searchTerm} setsearchTerm={setsearchTerm}/> */}
      <Filter setSelectedSpecies={setSelectedSpecies} setSelectedhome={setSelectedhome} />

      <div className="flex flex-wrap justify-center mt-6">
        {filteredCharacters.map((char) => (
          <Card key={char.id} {...char} />
        ))}
      </div>

                {/* __________________CARD_____________________
                 <Card title={API[0].name} img={API[0].image} color={API[0].sensorColor} />
                 <Card {...API[11]}/> */}
                 
     {/* <div className='flex flex-row flex-wrap justify-center pt-6'>
                 {/* {API.map((item)=><Card{...item}/>)} */}
                 {/* {filteredname.map((item) => <Card key={item.id} {...item} />)} */} 
                 
     </div>
        </>
    );
}
export {App}; 
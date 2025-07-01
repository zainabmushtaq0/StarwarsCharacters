import React from 'react'
import { useState } from 'react';
 import {API} from "./data.jsx";
import {Search} from "./search.jsx";
import {Card} from "./card.jsx";

function Filter ({setSelectedSpecies,setSelectedhome}) {


// const filterspecies= {[{API.filter((item))]}
const uniqueSpecies = [...new Set(API.map(item => item.species))];
console.log(uniqueSpecies);
const uniquehomeland=[...new Set(API.map(item=> item.homeworld))];


return(
    <>
<select className="bg-amber-200 rounded-sm mt-1 italic"
    onChange={(e) => setSelectedSpecies(e.target.value)}>

  <option value="">Select a species</option>
  {uniqueSpecies.map((species, index) => (
    <option key={index} value={species}>
      {species}
    </option>
 ))}
</select>
<select className="bg-amber-200 rounded-sm mt-1 italic"
 onChange={(e) => setSelectedhome(e.target.value)}
>
  <option value="">Select homeland</option>
  {uniquehomeland.map((home, index) => (
    <option key={index} value={home}>
      {home}
    </option>
 ))}
</select>
</>
)














//     const [speciesFilter, setSpeciesFilter] = useState("");
// const[homelandFilter, sethomelandFilter]=useState('');


// const filteredname = API.filter((char) => {
//   const matchesName = char.name.toLowerCase().includes(searchTerm.toLowerCase());
//   const matcheshomeland = homelandFilter ? char.homeland === homelandFilter : true;
// //   const matchesFilm = filmFilter ? char.films.includes(filmFilter) : true;
//   const matchesSpecies = speciesFilter ? char.species === speciesFilter : true;

//   return matchesName && matcheshomeland  && matchesSpecies;
// });
// // const filterspecies=API.filter((item)=>item.species.includes(searchTerm))

//   return (
//     <div className="flex flex-wrap items-center justify-center flex-col"> Filter by:<br/>
//       <select className="bg-amber-200 rounded-sm italic" onChange={(e) => sethomelandFilter(e.target.value)}>
//   <option value=""> HomeLand</option>
//   <option value="Tatooine">Tatooine</option>
//   <option value="Tatooine">naboo</option>
//   <option value="alderaan">alderaan</option>
//   <option value="kashyyyk">kashyyyk</option>
//   <option value="stewjon">stewjon</option>
//   <option value="RodiaTatooine">RodiaTatooine</option>
//   <option value="corellia">corellia</option>
// {/* {filterspecies.map((item)=><Filter {...item}/>)} */}

// </select>


// <select className="bg-amber-200 rounded-sm mt-1 italic" onChange={(e) => setSpeciesFilter(e.target.value)}>
//   <option value=""> Species</option>
//   <option value="Human">Human</option>
//   <option value="Droid">Droid</option>
//   <option value="Droid">Yoda's species</option>
//   <option value="Droid">Droid</option>
//   <option value="Droid">Droid</option>
// </select>

//     </div>
//   )
 }

export {Filter};

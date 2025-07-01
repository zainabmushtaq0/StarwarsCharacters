import { FaSearch } from 'react-icons/fa';
import {API} from "./data.jsx";

function Search({searchTerm, setsearchTerm}){
    //   const filtername=API.filter((item)=>
    //     item.name.includes("Yoda"))
    //  console.log(filtername);

    return(
        <div   className="search">
          
                <input 
               
                 type="text"
                  placeholder="Search your favorite characters.." 
                  value={searchTerm}
                onChange={(event)=> setsearchTerm(event.target.value)}/>
        <FaSearch/>
            
        
                </div>

    );
}
export {Search};
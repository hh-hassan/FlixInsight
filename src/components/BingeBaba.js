import { useState } from "react";
import { FaLightbulb } from 'react-icons/fa';

const BingeBaba = () => {
  
    const [text, settext] = useState("");
  
    return (
    
    <div className="flex justify-center m-40">
        
        <div className="flex bg-white px-3 py-1 rounded-md">
            
            <input 
                className="w-[500px] text-lg font-semibold focus:outline-none caret-red-500 placeholder-gray-500 placeholder:text-base"
                type="text"
                placeholder="What’s your binge mood today ?"
                value={text}
                onChange={(e) => {settext(e.target.value)}}
            >   
            </input>

            <div className="py-1">
                <FaLightbulb size={50} color="#e50914" />
            </div>

        </div>

    </div>
  )
}

export default BingeBaba;
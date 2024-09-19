import { useRef } from "react";
import client from "../utils/openai";
import { FaLightbulb } from 'react-icons/fa';

const BingeBaba = () => {
  
    const searchText = useRef(null);

    const handleSearch = () => {
        // console.log(searchText.current.value);

        async function main() {
            const chatCompletion = await client.chat.completions.create({
              messages: [{ role: 'user', content: searchText.current.value }],
              model: 'gpt-3.5-turbo',
            });
            console.log(chatCompletion?.choices);
          }
          
          main();
    };
  
    return (
    
    <div className="flex justify-center m-40">
        
        <div className="flex bg-white px-3 py-1 rounded-md border-4 border-yellow-500">
            
            <input 
                className="w-[500px] text-lg font-semibold focus:outline-none caret-red-500 placeholder-gray-500 placeholder:text-base"
                ref={searchText}
                type="text"
                placeholder="What’s your binge mood today ?"
            >   
            </input>

            <div className="py-1 cursor-pointer" onClick={handleSearch}>
                <FaLightbulb size={50} color="#FFA500" />
            </div>

        </div>

    </div>
  )
}

export default BingeBaba;
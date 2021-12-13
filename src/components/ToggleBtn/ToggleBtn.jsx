import { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div class="flex"
        onClick={() => {
            setToggle(!toggle);
            console.log('clicked!')
          }}>
  
            <label 
                for="toogleA"
                className="flex items-center cursor-pointer"
            >
                <div className="mr-3 text-white font-medium">
                    Show Live matches
                </div>
            
                <div className="relative" 
                >
                
                <input type="checkbox" className="sr-only"/>
                
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                
                <div className={"absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"  + (toggle ? null : "checked:transform translate-x-full" ) }></div>
                </div>
            
               
            </label>
  
        </div>
    </>
  );
}

export default Switch;

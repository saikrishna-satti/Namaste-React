import { useEffect, useState } from "react"


useOnlinestatus=()=>{
   const[onlinestatus,setonlinestatus]=useState(true);

   useEffect(()=>{

    const handleOnline=()=>{
        setonlinestatus(true);
    }

    const handleOffline=()=>{
        setonlinestatus(false);
    }
    
     window.addEventListener("online",handleOnline);
     window.addEventListener("offline",handleOffline);

     return ()=>{
        window.removeEventListener("online",handleOnline);
        window.removeEventListener("offline",handleOffline);
     }
   },[])

   return onlinestatus;

}

export default useOnlinestatus;
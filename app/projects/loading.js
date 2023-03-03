'use client'
import { ScaleLoader } from "react-spinners";

function loading() {
  return (
    <div className="h-screen flex justify-center">
        <div className="mt-24">
        <ScaleLoader color="#86efac" height={40} width={8} className='mt-28'/>
        <div className="text-green-300 font-spaceMono">loading...</div>
        </div>
    </div>

  )
  
}

export default loading;

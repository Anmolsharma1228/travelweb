import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = () => {
  return (
     <div className="flex justify-center items-center h-screen">
        <SyncLoader color="#000" size={20}/>
       </div>
  )
}

export default Loader
import React, { useEffect, useState } from 'react'
import Cards from './Component/Cards'
import axios from 'axios'

function App() {
  const [UserData, setUserData] = React.useState([])
  const [index, setIndex] = React.useState(0)

  const getData=async(elm,idx)=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }
  let content=<h3 className='text-center text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Loading...</h3>
  if(UserData.length>0){
    content=UserData.map((elm,idx)=>{
          return (
            <div key={idx}>
              {/* Component called */}
              <Cards key={idx} elm={elm} />
            </div>
          )
        })
 }
  useEffect(()=>{
    getData()
    setUserData([])
  },[index])
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-2xl font-bold  p-2">
      <h2 className='text-center text-4xl text-white'>Gallery Application</h2>
      <div className='flex h-[80%] flex-wrap gap-4 mt-5 p-2 pb-28'>
        {content}
      </div>
      <div className='fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 rounded-full bg-black/90 px-4 py-3 shadow-2xl shadow-black'>
        <button style={{opacity: index === 0 ? 0.5 : 1}} onClick={() => setIndex(Math.max(0, index - 1))} className='active:scale-105 cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition'>
          Prev
        </button>
        <p className='text-sm text-white'>Page: {index + 1}</p>
        <button onClick={() => setIndex(index + 1)} className='active:scale-105 cursor-pointer rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition'>
          Next
        </button>
      </div>
    </div>
  )
}
export default App 
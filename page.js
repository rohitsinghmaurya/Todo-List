 "use client"
import React, { Component, useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
      e.preventDefault()
      setMainTask([...MainTask, {title,desc}])
       settitle("")
       setdesc("")
      
  }

const deleteHandler = (i)=> {
     let copytask = [...MainTask]
     copytask.splice(i,1)
     setMainTask(copytask)
}

let randerTaks = <h2>No Task Available</h2>

  if(MainTask.length>0){
    randerTaks = MainTask.map((t,i)=>{
      return (
          <li className='flex items-center justify-between mb-5' >
           <div className='flex items-center justify-between mb-5 w-2/3'>
             <h5 className='text-2xl font-semibold'>{t.title}</h5>
             <h6 className='text-lg font-medium'>{t.desc}</h6>
           </div>
           <button 
            onClick={()=>{
              deleteHandler(i)
            }}
           className='bg-red-400 rounded px-4 py-2 font-bold text-white'>Delete</button>
          </li>
      )
   })
}

  return (
    <>
     <h1>Rohit's Todo List</h1>
     <form onSubmit={submitHandler} className='bg-red-300'>
      <input type="text" className='text-2xl border-zinc-900  
        border-2 m-5 px-4 py-2'
        placeholder='Enter Title here'
        value={title}
         onChange={(e)=>{
           settitle(e.target.value)
         }}
       />

      <input type="text" className='text-2xl border-zinc-800 
              border-2 m-5 px-4 py-2'
              placeholder='Enter Description here'
              value={desc}
              onChange={(e)=>{
                 setdesc(e.target.value)
              }}
      />
        <button className='bg-blue-400 text-white 
        px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
     </form>
     <hr/>
     <div className='p-8 bg-slate-200'>
          <ul>{randerTaks}</ul>
     </div>
    </>
  )
}


export default page